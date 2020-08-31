import {Request, Response} from 'express';
const crypto = require('crypto');

import db from '../database/connection';

export default class UserController {
    
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
        
        const id = crypto.randomBytes(3).toString('HEX');
        
        
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                id,
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

}