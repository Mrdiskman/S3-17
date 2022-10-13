import getCategoryService from "../services/getCategory.service"

const getCategoryController = async(req, res) =>{
  const {id} = req.params 
  try{
    const category = await getCategoryService(id)
    return res.status(200).json(category)
  }

  catch(err){
    return res.status(400).json({message:err.message})
  }
}

export default getCategoryController