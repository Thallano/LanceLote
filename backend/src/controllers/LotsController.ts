import {Request, Response } from 'express';
import db from '../database/connection';

export default class LotsController {
    async index(request: Request, response: Response){
        const totalLots = await db('loters').count('* as total');

        const { total } = totalLots[0];

        return response.json({ total });
    }

    async create(request: Request, response: Response){
        const { user_id } = request.body;

        await db('lots').insert({
            user_id,
        });

        return response.status(201).send();
    }
}