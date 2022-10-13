import database from "../database"

const verifyIdProductMiddleware = async (req, res, next) =>{
  const id = req.params.id

  try{
    const verifyId = await database.query("SELECT * FROM products WHERE id = $1", 
    [id])
    if(verifyId.rowCount === 0){
      return res.status(400).json({message: "Product Not Found"})
    } 
  }
  catch(err){
    return res.status(400).json({message: "Syntax invalid id"})
  }

  next()
}

export default verifyIdProductMiddleware