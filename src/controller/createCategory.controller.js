import createcategoryService from "../services/createCategory.service"

const createCategoryController = async (req, res)=>{
  const {name} = req.body
  try{
    const category = createcategoryService(name)
    return res.status(201).json({message: "Created sucessfuly", category})
  }
  catch(err){
    return res.status(400).json({message:err.message})
  }
}

export default createCategoryController