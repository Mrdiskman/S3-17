import listCategoryService from "../services/listCategory.service"

const listCatecoriesController = async(req, res)=>{
  try{
    const listCategories = await listCategoryService()
    return res.status(200).json(listCategories)
  }

  catch(err){
    return res.status(400).json({message:err.message})
  }
}

export default listCatecoriesController