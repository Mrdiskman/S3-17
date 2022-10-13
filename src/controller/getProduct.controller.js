import getProductService from "../services/getProduct.service"

const getProductController = async (req, res) => {
  const {id} = req.params
  try{
   const product = await getProductService(id)
   return res.status(200).json(product)
  }
  catch(err){
    return res.status(400).json({message:err.message})
  }
}

export default getProductController