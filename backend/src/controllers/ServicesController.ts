import {Request, Response} from 'express';

import db from '../database/connection';

const crypto = require('crypto');

export default class ServicesController {
    
    async index(request: Request, response: Response) {
        const filters = request.query;

        const service = filters.service as string;
        
        if (!filters.service){
            return response.status(400).json({
                error: 'Missing filters to search services'
            });         
        }

        const services = await db('services')
            .where('services.service', '=', service)
            .join('users', 'services.user_id', '=', 'users.id')
            .select(['services.*', 'users.*']);
        return response.json(services);
    }
        
    async createService(request: Request, response: Response) {
        
        const {
            service,
            cost,
            modality,
            description,
            user_id,
            rate,
            loted,
            ratetotal
        } = request.body;
    
        const idService = crypto.randomBytes(2).toString('HEX');

        const trx = await db.transaction();
    
        try {
            
            const insertedServicesIds = await trx('services').insert({
                service,
                idService,
                cost,
                modality,
                description,
                user_id,
                rate,
                loted,
                ratetotal
            })        

            await trx.commit();
        
            return response.status(201).send();
            
        } catch (err) {
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new service'
            })
        }
    }

    async deleteService(request: Request, response: Response) {
        const serviceid = request.query;
        
        const service = serviceid.service as string;
        
        try{
        await db('services').where('services.idService', service).delete();
        return response.status(201).send();
        }catch (err) {   
            return response.status(400).json({
                error: 'Unexpected error while deleting service'
            })
        }
    } 

    async rateService(request: Request, response: Response) { 

        const {
            rate,
            service,
            user_id,
            review,
            rated,
            review_name
        } = request.body;
                
        const lot = await db('services')
                            .where('services.idService', '=', service)
                            /*.join('loted', 'services.user_id', '=', 'users.id')*/
                            .select('loted', 'rate', 'ratetotal') as any;
       
        const ratetotalarray = parseInt(lot.map(function(item: any){
            return item.ratetotal;
        }));
        const loted = parseInt(lot.map(function(item: any){
            return item.loted;
        }));

        const ratetotal = rate+ratetotalarray

        const media = (ratetotal)/(loted+1)

        const mediaint = media.toFixed(1)

        const increment = loted+1

        const userRate = await db('loted')
                            .where('idService', '=', service)
                            .where('user_id', '=', user_id)
                            .select('idService', 'user_id') as any;
        if (userRate != ''){
            return response.status(400).json({
                error: 'Você já avaliou esse serviço!'
            })
        } else {
        try {
            
            await db('services').where('services.idService', '=', service).update({'rate': mediaint ,'loted': increment, "ratetotal": ratetotal});
            await db('loted').insert({'rated': rate ,'review': review, "idservice": service, "user_id": user_id, "review_name": review_name});

            return response.status(201).send();

        } catch ( err ) {
           
            return response.status(400).json({
                error: 'Unexpected error while rating the service'
            })
        }
        }
    }
}