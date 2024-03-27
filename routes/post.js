const mongoose=require('mongoose')




const postSchema=mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
  },
  title:String,
  description:String,
  password:String,
  image:String,
  createdAt: {
    type: Date,
    default: Date.now // Default value is current timestamp
  }
});

module.exports=mongoose.model("post",postSchema);