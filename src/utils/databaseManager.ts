import fs from 'fs/promises'
const databasePath = 'db.json'

export async function readData(entity: string){
    const data = await fs.readFile(databasePath)
    const dataParse = JSON.parse(data.toString())

    if(!dataParse[entity]){
        throw new Error('Entity not found.')
    }
    return dataParse[entity]

}

export async function writeData(entity: string, saveData: any){
    const data = await fs.readFile(databasePath)
    const dataParse = JSON.parse(data.toString())

    if(!dataParse[entity]){
        throw new Error('Entity not found. ')
    }
    dataParse[entity].push(saveData)

    await fs.writeFile(databasePath, JSON.stringify(dataParse, null, '\t'))


}