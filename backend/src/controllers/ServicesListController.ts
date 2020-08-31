import {Request, Response} from 'express';

import db from '../database/connection';


export default class ServicesListController {
    
    async list(request: Request, response: Response) {
        const services = await db('services').join('users', 'services.user_id', '=', 'users.id').select(['services.*', 'users.*']);
        return response.json(services);
    }

}