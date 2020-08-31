import {Request, Response} from 'express';

import db from '../database/connection';

/*interface ServiceItem {
    service: string;
    modality: string;
    cost: number;
    description: string;
} */

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
    /*
    async login(request: Request, response: Response) {
        const login = request.query;

        const email = login.email as string;
        const password = login.password as string;
        
        if (!login.email || !login.password){
            return response.status(400).json({
                error: 'Erro ao procurar usuário'
            });         
        }

        const users = await db('users')
            .where('users.email', '=', email)
            .where('users.password', '=', password)
            .select('users.*');
        return response.json(users);
    }

    
    async createUser(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            password,
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

            await trx.commit();
        
            return response.status(201).send();
            
        } catch (err) {
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new service'
            })
        }
    }
    */
    
    async createService(request: Request, response: Response) {
        const {
            service,
            cost,
            modality,
            description,
            user_id
        } = request.body;
        console.log(request.body)
        const trx = await db.transaction();
    
        try {
            
            const insertedServicesIds = await trx('services').insert({
                service,
                cost,
                modality,
                description,
                user_id
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

}