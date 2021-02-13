var mongoose=require("mongoose")
const empSchema= new mongoose.Schema(
    {
        name:{type:String},
        address:{type:String},
        phno:{type:String},
        designation:{type:String},
        email:{type:String},
        salary:{type:String},
        company:{type:String},
        ecode:{type:String}
    }
)
var empModel= mongoose.model("employees", empSchema)
module.exports={empModel}