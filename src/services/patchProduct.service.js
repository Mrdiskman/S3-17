import database from "../database"

const PatchProductService = async (id, product) =>{
  try{
    let query = "UPDATE products SET "
    const values = Object.values(product)
    const keys = Object.keys(product)
    keys.forEach((key, index) => {
      query+=`${key} = \$${index+1}, `
    })
    query = query.slice(0, -2)  
    query += ` WHERE id = \$${keys.length+1} RETURNING *;`
    const res = await database.query(query, [...values, id])
    return res.rows[0]
  }
  catch(err){
    throw new Error(err)
  }
}

export default PatchProductService