import database from "../database";

const getCategoryService = async (id) => {
  try{
    const category = await database.query("SELECT * FROM categories WHERE id = $1;", [id])
    return category.rows[0]
  }

  catch(err){
    throw new Error(err)
  }
};
export default getCategoryService