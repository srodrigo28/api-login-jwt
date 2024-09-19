import { readData } from "../utils/databaseManager"

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

    const newUser = {
        id: 1,
        name,
        email,
        password
    }





}