import { Request, Response } from "express"
import { errorHandler } from "./errorHandler"
import { findMany } from "./models"

/** 컨트롤러에서 실제 작업을 한다 */

export const checkHealth = async (req: Request, res: Response) => {
    res.json({ message: "----- so far so good" })
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const result = await findMany()
        console.log({ result })
        res.json(result)
    } catch (error) {
        errorHandler(error as Error, res)
    }
}