import {Router} from "express"
import CreateProductsController from "../controller/CreateProduct.controller"
import deleteProductController from "../controller/deleteProduct.controller"
import getProductController from "../controller/getProduct.controller"
import listProductscontroller from "../controller/listProducts.cotroller"
import patchProductsController from "../controller/patchProduct.controller"
import verifyIdProductMiddleware from "../middleware/verifyIdProduct.middleware"

const router = Router()

router.get("/", listProductscontroller)
router.get("/:id",verifyIdProductMiddleware, getProductController)
router.get("/category/:id")
router.post("/", CreateProductsController)
router.patch("/:id", verifyIdProductMiddleware, patchProductsController)
router.delete("/:id", verifyIdProductMiddleware, deleteProductController)

export default router