import deleteProductService from "../services/deleteProduct.service"

const deleteProductController = async(req, res) => {  
  const id = req.params.id
  try{
    const deletedProduct = await deleteProductService(id)
    return res.status(204).json({message:"Product deleted sucessfuly"})
  }
  catch(err){
   return res.status(400).json({message:err.message})
  }
}

export default deleteProductController