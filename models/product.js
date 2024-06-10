const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "id":String,
        "mdate":String,
        "price":String
    }
)

let productmodel=mongoose.Model("products",schema);

module.exports={productmodel}