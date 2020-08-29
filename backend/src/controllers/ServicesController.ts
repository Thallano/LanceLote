import {Request, Response} from 'express';

import db from '../database/connection';

interface ServiceItem {
    service: string;
    modality: string;
    cost: number;
    description: string;
}

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
    
    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            password,
            service,
            cost,
            modality,
            description
        } = request.body;
        
        console.log(request.body)
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                email,
                whatsapp,
                password,
            });
        
            const user_id = insertedUsersIds[0];

            const insertedServicesIds = await trx('services').insert({
                service,
                cost,
                modality,
                description,
                user_id,
            })
        
            const service_id = insertedServicesIds[0];         
                 
            await trx.commit();
        
            return response.status(201).send();
            
        } catch (err) {
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new service'
            })
        }
    }

}