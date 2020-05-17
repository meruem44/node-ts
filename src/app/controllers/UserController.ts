import { Request, Response } from 'express';

import User from '../models/User';

class UserController {
    public async index(req: Request, res: Response): Promise<Response> {
        const users = await User.find();

        return res.json(users);
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body); 

        const fullName = user.fullName()

        return res.json({ok: `${fullName} cadastrado com sucesso!`});
    }
}

export default new UserController();