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
        console.log(services)
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
        } = request.body;
        console.log(request.body)
        
        const lot = await db('services')
                            .where('services.idService', '=', service)
                            .select('loted', 'rate', 'ratetotal') as any;
       
        const ratetotalarray = parseInt(lot.map(function(item: any){
            return item.ratetotal;
        }));
        const loted = parseInt(lot.map(function(item: any){
            return item.loted;
        }));

        const ratetotal = rate+ratetotalarray

        const media = (ratetotal)/(loted+1)

        const mediaint = media.toFixed(2)

        const increment = loted+1
                
        try {
            
            await db('services').where('services.idService', '=', service).update({'rate': mediaint ,'loted': increment, "ratetotal": ratetotal});
    
            return response.status(201).send();

        } catch ( err ) {
           
            return response.status(400).json({
                error: 'Unexpected error while rating the service'
            })
        }
        
    }
}