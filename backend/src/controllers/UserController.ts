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
            password,
            bio,
            instagram,
            web
        } = request.body;
               
        const id = crypto.randomBytes(3).toString('HEX');
        
        
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                id,
                name,
                email,  
                password,
                bio,
                instagram,
                web
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
    
    async updateUser(request: Request, response: Response) {
        const {
            bio,
            instagram,
            web,
            user_id
        } = request.body;
        
        try {
            await db('users').where('users.id', '=', user_id).update({'bio': bio ,'instagram': instagram, "web": web});
            console.log(request.body)
            return response.status(201).send();
        } catch ( err ) {
            console.log(request.body)
            return response.status(400).json({
                error: 'Unexpected error while rating the service'
            })
        }
        }
        
}