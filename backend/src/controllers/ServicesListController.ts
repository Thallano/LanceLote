import {Request, Response} from 'express';

import db from '../database/connection';


export default class ServicesListController {
    
    async list(request: Request, response: Response) {
        
        const services = await db('services').join('users', 'services.user_id', '=', 'users.id').select(['services.*', 'users.*']);
        return response.json(services);
    }

    async listbyuser(request: Request, response: Response) {
        const filters = request.query;

        const user = filters.user as string;

        if (!filters.user){
            return response.status(400).json({
                error: 'Missing filters to search services'
            });         
        }
        const userids = await db('services')
            .where('services.user_id', '=', user)
            .select(['services.*']);
        return response.json(userids);
    }

    async listReview(request: Request, response: Response){
        const serviceId = request.query;

        const service = serviceId.service as string;
        try{
      
            const reviewWithIdsNote = await db('loted')
            .where('loted.idService', '=', service)
            .join('services', 'services.idService', '=', 'loted.idService')
            .join('users', 'users.id', '=', 'loted.user_id')
            .select(['loted.*', 'services.service', 'users.name']);
            console.log(reviewWithIdsNote)
            return response.json(reviewWithIdsNote);
            
        } catch (err) {
    
            return response.status(400).json({
                error: 'Unexpected error while creating new service'
            })
        }
        
    }

    async listServiceUser(request: Request, response: Response){
        const serviceId = request.query;
        console.log(request.query)
        const service = serviceId.service as string;

        try{
      
            const reviewWithIdsNote = await db('services')
            .where('services.idService', '=', service)
            .join('users', 'users.id', '=', 'services.user_id')
            .select(['services.service', 'users.name', 'users.instagram', 'users.web']);
            
            return response.json(reviewWithIdsNote);
            
        } catch (err) {
    
            return response.status(400).json({
                error: 'Unexpected error while creating new service'
            })
        }
        
    }

}