import listProducts from "../services/listProducts.service"

const listProductscontroller = async (req, res) =>{
  try{
    const products = await listProducts()
    return res.status(200).json(products)
  }
  catch(err){
    return res.status(400).json({message:err.message})
  }
}

export default listProductscontroller