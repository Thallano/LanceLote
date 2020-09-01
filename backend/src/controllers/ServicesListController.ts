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

}