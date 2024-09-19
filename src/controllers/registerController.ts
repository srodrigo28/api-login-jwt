import { readData, writeData } from "../utils/databaseManager"
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

export default async function registerController(req: any, res: any){
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        return res.status(400).json({
            message: 'todos campos são requiridos'
        })
    }

    const users = await readData('users')
    const emailExists = users.find((user: any) => user.email === email)

    if(emailExists){
        return res.status(400).json({
            message: 'email already exists. '
        })
    }

    const hashPassword = await bcrypt.hash(password, 8)

    const newUser = {
        id: uuidv4(),
        name,
        email,
        password: hashPassword
    }

    await writeData('users', newUser)

    return res.status(201).json(newUser)

}