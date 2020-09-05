import {Request, Response} from 'express';

import db from '../database/connection';


export default class ServiceRatedController {
             
    async rateService(request: Request, response: Response) {
        const {
            id,
            rate
        } = request.body;
        const trx = await db.transaction();

        const rateCount = 0;

        console.log(id, rate)

        const rated = await db('services')
            .where('services.id', '=', id)
            .select(['services.*']);
        console.log(rated)

        if (rated != []){ 
        const media = rate/rateCount
        rateCount +1
        console.log("Ola")
            try{
                const insertedServicesIds = await trx('services').insert({
                    media
                })    
            } catch ( err ) {
                await trx.rollback();

                return response.status(400).json({
                    error: 'Unexpected error while rating the service'
                })
            }
        }
    }  
    
}