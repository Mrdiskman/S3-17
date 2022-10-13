import {Router} from "express"
import createCategoryController from "../controller/createCategory.controller"
import getCategoryController from "../controller/getCategory.controller"
import listCatecoriesController from "../controller/listCategories.controller"
import verifyIdCategoryMiddleware from "../middleware/verifyCategoryId.middleware"

const router = Router()

router.get("/", listCatecoriesController)
router.get("/:id", verifyIdCategoryMiddleware ,getCategoryController)
router.post("/", createCategoryController)
router.patch("/:id")
router.delete("/:id")

export default router