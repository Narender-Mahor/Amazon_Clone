const Products = require("./models/ProductsSchema");
const ProductsData = require("./constant/ProductData");

const DefaultData = async()=> {
    try{
        await Products.deleteMany({})
      const StoreData = await Products.insertMany(ProductsData)
      console.log(StoreData)
    }catch(error){
      console.log("error product not fetch", error.message);
    }
}

module.exports = DefaultData;