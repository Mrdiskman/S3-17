import database from "../database"

const verifyIdCategoryMiddleware = async (req, res, next) =>{
  const {id} = req.params

  try{
    const verifyId = await database.query("SELECT * FROM categories WHERE id = $1", 
    [id])
    if(verifyId.rowCount === 0){
      return res.status(400).json({message: "Categorie Not Found"})
    } 
  }
  catch(err){
    return res.status(400).json({message: "Syntax invalid id"})
  }

  next()
}

export default verifyIdCategoryMiddleware