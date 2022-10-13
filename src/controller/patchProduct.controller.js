import PatchProductService from "../services/patchProduct.service"

const patchProductsController = async(req, res)=>{
  const {id} =  req.params
  const product = req.body
try{
  const updatedProduct = await PatchProductService(id, product)
  return res.status(200).json({message:"Product updated", product:updatedProduct})
}
catch(err){
  return res.status(400).json({message: err.message})
}}
export default patchProductsController