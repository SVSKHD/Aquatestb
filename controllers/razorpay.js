const Razorpay = require("razorpay")
const User = require("../models/user")
const Cart = require("../models/cart");
const id = require("shortid")


exports.rpay = async (req,res)=>{
    const { couponApplied } = req.body;
    const user = await User.findOne({ email: req.user.email }).exec();
    const { cartTotal, totalAfterDiscount } = await Cart.findOne({
        orderdBy: user._id,
      }).exec();
    
    let finalAmount = 0;
  
    if (couponApplied && totalAfterDiscount) {
        finalAmount = totalAfterDiscount * 100;
    } else {
        finalAmount = cartTotal * 100;
    }
    
    try {

        const razor = new Razorpay({
            key_id:process.env.RKEY,
            key_secret:process.env.RSECRET
        })

        const options = {
            amount: finalAmount,
            currency: "INR",
            receipt:id.generate(),
            payment_capture,
        }
        const order = await razor.orders.create(options)
        console.log("Order details" , order)
        if(!order)return res.status(500).send("SomeThing Wend Wrong")
        res.json(order)
    } catch (error) {
        res.status(500).send(error)
    }
}



