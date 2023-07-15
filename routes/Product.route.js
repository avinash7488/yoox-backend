const express = require("express");
const { ProductModel } = require("../model/Product.model");


const productRouter= express.Router();

// Insert Many documents in collection
productRouter.post("/insert",async(req,res)=>{
    try{
        await ProductModel.insertMany(req.body);
        res.send({"msg":"Products have been added successfully"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot add the products","error":err.message})
    }
})

// below code can be used to get all products for Home-Page in user site---------------->
productRouter.get("/",async(req,res)=>{
    let query= req.query;
    try{
        const products = await ProductModel.find(query);
        res.send(products)
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot get products","error":err.message})
    }
})


//below code can be used to get all products by using filter in user site---------------->
productRouter.get("/filter",async(req,res)=>{
    const query= req.query;
    // const userID = req.body.userID;
    let products;
    try{
        //You can use pagination by passing query as skip and limit------------------------->
    if(query.limit && query.skip){
        // If you want to sort data in ascending order according to price , pass "asc" as a query-------------------------------------->
      if(query.asc){
        if(query.brand  && query.category && query.type){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.brand && query.category){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.type && query.brand){
            products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.type && query.category){
            products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.type){
            products = await ProductModel.find({type:query.type}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.brand){
            products = await ProductModel.find({brand:query.brand}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.category){
            products = await ProductModel.find({category:query.category}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else{
             products = await ProductModel.find().skip(query.skip).limit(query.limit).sort({price:1});
        }
        // If you want to sort data in descending order according to price , pass "des" as a query-------------------------------------->
      }else if(query.des){
        if(query.brand  && query.category && query.type){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.brand && query.category){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.type && query.brand){
            products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.type && query.category){
            products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.type){
            products = await ProductModel.find({type:query.type}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.brand){
            products = await ProductModel.find({brand:query.brand}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.category){
            products = await ProductModel.find({category:query.category}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else{
             products = await ProductModel.find().skip(query.skip).limit(query.limit).sort({price:-1});
        }
      }else{
        if(query.brand  && query.category && query.type){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).skip(query.skip).limit(query.limit);
        }
        else if(query.brand && query.category){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).skip(query.skip).limit(query.limit);
        }
        else if(query.type && query.brand){
            products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]}).skip(query.skip).limit(query.limit);
        }
        else if(query.type && query.category){
            products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]}).skip(query.skip).limit(query.limit);
        }
        else if(query.type){
            products = await ProductModel.find({type:query.type}).skip(query.skip).limit(query.limit)
        }
        else if(query.brand){
            products = await ProductModel.find({brand:query.brand}).skip(query.skip).limit(query.limit);
        }
        else if(query.category){
            products = await ProductModel.find({category:query.category}).skip(query.skip).limit(query.limit);
        }
        else{
             products = await ProductModel.find().skip(query.skip).limit(query.limit);
        }
      }  
        
         //If you are not using pagination no need to pass query as skip and limit---------------------------------->
    }else{
        if(query.asc){
            if(query.brand  && query.category && query.type){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).sort({price:1});
            }
            else if(query.brand && query.category){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).sort({price:1});
            }
            else if(query.type && query.brand){
                products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]}).sort({price:1});
            }
            else if(query.type && query.category){
                products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]}).sort({price:1});
            }
            else if(query.type){
                products = await ProductModel.find({type:query.type}).sort({price:1});
            }
            else if(query.brand){
                products = await ProductModel.find({brand:query.brand}).sort({price:1});
            }
            else if(query.category){
                products = await ProductModel.find({category:query.category}).sort({price:1});
            }
            else{
                 products = await ProductModel.find().sort({price:1});
            }
          }else if(query.des){
            if(query.brand  && query.category && query.type){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).sort({price:-1});
            }
            else if(query.brand && query.category){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).sort({price:-1});
            }
            else if(query.type && query.brand){
                products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]}).sort({price:-1});
            }
            else if(query.type && query.category){
                products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]}).sort({price:-1});
            }
            else if(query.type){
                products = await ProductModel.find({type:query.type}).sort({price:-1});
            }
            else if(query.brand){
                products = await ProductModel.find({brand:query.brand}).sort({price:-1});
            }
            else if(query.category){
                products = await ProductModel.find({category:query.category}).sort({price:-1});
            }
            else{
                 products = await ProductModel.find().sort({price:-1});
            }
          }else{
            if(query.brand  && query.category && query.type){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]});
            }
            else if(query.brand && query.category){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]});
            }
            else if(query.type && query.brand){
                products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]});
            }
            else if(query.type && query.category){
                products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]});
            }
            else if(query.type){
                products = await ProductModel.find({type:query.type})
            }
            else if(query.brand){
                products = await ProductModel.find({brand:query.brand});
            }
            else if(query.category){
                products = await ProductModel.find({category:query.category});
            }
            else{
                 products = await ProductModel.find();
            }
          }
    }    
        res.send(products);
    }catch(err){
        res.send({"msg":"cannot get products","error":err.message})
    }
})


// below code can be used to get single product using ID by users ---------------->
productRouter.get("/:id",async(req,res)=>{
    const ID=req.params.id;
    try{
        const prod = await ProductModel.findById({_id:ID});
        res.send(prod)
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot Get Product","error":err.message})
    }
})

module.exports={productRouter}