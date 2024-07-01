const mongoose=require('mongoose')
const connectdb=async()=>
    {
        try {
            await mongoose.connect("mongodb+srv://walidkh:Jcska7MhSuGzBSwz@cluster0.1k3mblv.mongodb.net/shopdata")
            console.log("database is connected")
        } catch (error) {
            console.log(error)
        }
        
}
module.exports=connectdb