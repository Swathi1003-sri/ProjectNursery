const userModel = require("../Model/UserModel")

// ===================================== ADD USER START =========================================

const addUser = async(req , res)=>{
    try{
        const { username , password , email } = req.body
         const UserData = new userModel({
            username,password,email
        })
        await UserData.save()
        res.status(200).send("User Added !")
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name} , Error Message:${err.message}`)
    }
}
// ===================================== ADD USER END =========================================

// ===================================== GET USER START =========================================

const getUser = async(req , res)=>{
    try{
        var UserDetails = await userModel.find()
        res.status(200).send(UserDetails)
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name} , Error Message:${err.message}`)
    }
}

// ===================================== GET USER END =========================================

// ===================================== REMOVE USER START =========================================

const removeUser = async(req , res)=>{
    try{
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send("User REmoved !")
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name} , Error Message:${err.message}`)
    }
}
// ===================================== REMOVE USER END =========================================

// ===================================== LOGIN USER START =========================================

const loginUser = async(req , res)=>{
    try{
        const { username , password } = req.body
        const user = await userModel.findOne({ username , password})

        if(user){
            res.status(200).send(user)
        }
        else{
            res.status(404).send("Invalid")
        }
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name} , Error Message:${err.message}`)
    }
}
// ===================================== LOGIN USER END =========================================

// ===================================== MODULE EXPORTS =========================================
module.exports = { addUser , getUser , removeUser , loginUser}