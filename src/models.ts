import { PrismaClient } from "../generated/prisma"

/** 모델은 데이터 베이스 작업만 한다 */

/** MUST call from `../generated/prisma` */
const prisma = new PrismaClient()

export const findMany = async () => prisma.plugin.findMany()