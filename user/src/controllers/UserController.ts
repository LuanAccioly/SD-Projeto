import {Request, Response} from 'express'
import User from '../models/User'
import jwt from 'jsonwebtoken'

class UserController {
    async create(req: Request, res: Response) {
        const {
            name,
            email,
            password,
            registration,
            manager,
        } = req.body;

        try {
            const userExists = await User.findOne({email})
            
            if(userExists) {
                return res.status(400).json({
                    error: "E-mail ja cadastrado",
                    message: "E-mail ja cadastrado"
                })
            }

            const user = await User.create({
                name,
                email,
                password,
                registration,
                bought: {
                    morning: 0,
                    night: 0,
                },
                manager,
            })

            return res.json(user);
        } catch (error) {
            return res.status(400).json({
                error: error,
                message: "Falha no registro do usuário"
            })
        }
    }

    async index(_req: Request, res: Response) {
        try {

            const users = await User.find()

            return res.json(users);
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: "Falha ao listar usuários"
            })
        }
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({email}).select("+password");
            const match = await user?.comparePassword(password);
            if(match) {
                const token = jwt.sign({
                    user: user
                },
                process.env.SECRET
                )
                return res.json({user, token})
            } else {
                return res.status(500).json({
                    error: "Credenciais Invalidas",
                    message: "Credenciais Invalidas"
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: "Falha ao logar"
            })
        }

    }
}

export default new UserController