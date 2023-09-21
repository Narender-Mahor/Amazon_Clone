const express = require("express")
const router = new express.Router()
const Products = require("../models/ProductsSchema")
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate")


//get product data api

router.get("/getproducts", async(req, res)=> {
    try{
        const productsData = await Products.find();
        console.log("api data has been fetched",productsData)
        res.status(201).json(productsData);
    }catch(error){
        console.log("error while fetching all products data" + error.message);
    }
});

// get individual data

router.get("/getproductsone/:id", async(req, res)=> {
    try{
        const {id} = req.params;
        // console.log(id);

        const individualData = await Products.findOne({id:id})
        // console.log(individualData)
        res.status(201).json(individualData)

    }catch(error){
      res.status(400).json(individualData)
      console.log("error while fetching all id data" + error.message);

    }
});

// regsiter data

router.post("/register", async(req, res)=> {
    // console.log(req.body);
    const { email,  fname, number, password, rpassword } = req.body

    if(!email  || !fname || !number || !password || !rpassword){
        res.status(422).json({error: "please fill the all data carefully"})
        console.log("no data available");
    }

        try {
            const preUser = await USER.findOne({email: email})

            if(preUser){
                res.status(422).json({error: "this user already exists"})
            }else if(password !== rpassword){
                res.status(422).json({error: "password and repeat password does not match"})
            }else{
                const finalUser = new USER({
                    email, fname, number, password, rpassword
                });

                const storeData = await finalUser.save();
                console.log(storeData);
                res.status(201).json(storeData)
            }
        } catch (error) {
            
        }
});



router.post("/login", async(req, res)=> {
    const { email, password } = req.body;

    if(!email || !password){
        res.status(400).json({error: "fill the all data"});
    }

    try {
        const userLogin = await USER.findOne({email:email})
        console.log(userLogin + "user value");

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)
            console.log(isMatch + "pass match");

            //token generate
            const token = await userLogin.generateAuthToken();
            // console.log(token);

            res.cookie("Amazonweb", token,{
                expires:new Date(Date.now() + 900000),
                httpOnly: true
            })


        if(!isMatch){
            res.status(400).json({error: "check your details"});
           }else{
             res.status(201).json(userLogin);
           }
        }
    } catch (error) {
        res.status(400).json({error: "invalid details"});
    }
    
});

router.post("/addcart/:id", authenticate,  async(req, res)=> {
    try {
        const {id} = req.params;
        const cart = await Products.findOne({id: id})
        console.log(cart + "cart value")
        const UserContact = await USER.findOne({_id:req.userID});
        console.log(UserContact)

        if (UserContact){
            const cartData = await UserContact.addcartdata(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        }else{
            res.status(401).json({error: "invalid user"})
        }
    } catch (error) {
        res.status(401).json({error: "invalid user"})
    }
})

module.exports = router