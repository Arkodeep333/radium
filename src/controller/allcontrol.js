const productModel = require('../model/product')
const userModel = require('../model/user')
const orderModel = require('../model/order')
// const product = require('../model/product')
// const { create } = require('../model/product')
const seconduser = require('../model/seconduser')
const createUser= async function (req, res) {   
    let data= req.body
    data.freeAppUser = req.isFreeAppUser
     let savedData= await userModel.create(data)
     res.send({msg: savedData})    
}

const createProduct = async function(req,res){
    let d = req.body
    let pd = await productModel.create(d)
    res.send({msg: pd})

}
const createOrder = async function (req, res) {
    // user validation
    let UserId = req.body.UserId
    let productId = req.body.productId
    // let appHeaderType = req.headers['isfreeapp']
    let appTypeFree = req.isFreeAppUser//This attribute was set in the appMiddleware
    let orderAmount
    let orderDate = Date()
    // if(appHeaderType === 'false') {
    //     appTypeFree = false
    // } else {
    //     appTypeFree = true
    // }

    let user = await userModel.findById(UserId)
    if(!user) {
        return res.send({message: "User doesn't exist. Please provide a valid userId"})
    }

    //product validation
    let product  = await productModel.findById(productId)
    if(!product) {
        return res.send({message: "Product doesn't exist. Please provide a valid productId"})
    }

    //user balance validation
    if(!appTypeFree && user.balance < product.price) {
        return res.send({message: "User doesn't have enough balance to purchase the product"})
    }

    if(appTypeFree) {
        orderAmount = 0
    } else {
        //paid app
        orderAmount = product.price
    }

    let orderDetails = {
        UserId: UserId,
        productId: productId,
        Amount: orderAmount,
        isFreeAppUser: appTypeFree, 
        date: orderDate
    }

    let orderCreated = await orderModel.create(orderDetails)
    
   if(!appTypeFree) {
       await userModel.findOneAndUpdate({_id: UserId}, {balance: user.balance - product.price})
   }

   res.send({data: orderCreated})

}




// ---------------------------------------------------------------------23/11/21(IGNORE)---------------------------------
const createseconduser = async function(req,res){

    let enter = req.body
    let ed = await seconduser.create(enter)
    res.send({msg: ed})

}

const validateuser = async function(req,res){
    let pass = req.body.password
    let name = req.body.name
    let userfind = await seconduser.findOne({name: name, password: pass})
    if(userfind){
        return res.send({status: true })
    }else{
        return res.send({msg: false})
        }
}






module.exports.validateuser = validateuser
module.exports.createseconduser = createseconduser
module.exports.createOrder = createOrder
module.exports.createProduct = createProduct
module.exports.createUser = createUser 
