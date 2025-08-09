import express from "express"
import { checkHealth, getAll } from "./controllers"

/** 라우터에는 작업 함수를 호출하는 것만 한다 */
const router = express.Router()

router.get("/checkhealth", checkHealth)
router.get("/", getAll)

export { router }