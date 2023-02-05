const exuserstore= require('../models/User')

const CreateUser=(async(req,res)=>{
        const data = req.body;
        const newuser= new exuserstore({
        Firstname:data.Firstname,
        Lastname:data.Lastname,
        Email:data.Email,
        age:data.age,
    })

    try
    {
        const datasave= await newuser.save()
        res.status(200).json(datasave)
    }
    catch(err)
    {
        res.status(400).json({massage:'error'})
    }
    
 })

 const GetAllUsers=(async(req,res)=>{
    const getall= await exuserstore.find() ;
    res.send(getall).status(200);
 })

 const FindUserById=(async(req,res)=>{
    const id =req.params.id
    const exist = await exuserstore.exists({ _id: id })
    if (!exist)
    {
        res.status(404).send("user not found")
    }
    else
    {
       await exuserstore.findByIdAndUpdate(id, {$set: req.body})
       res.status(200).send("User updated successfully")
    }

 })

 const DeleteById=(async(req,res)=>{
    const id =req.params.id
    const exist = await exuserstore.exists({ _id: id })
    if (!exist)
    {
        res.status(404).send("user not found")
    }
    else
    {
       await exuserstore.findByIdAndRemove(id)
       res.status(200).send("User Removed successfully")
    }
 })
module.exports={CreateUser,GetAllUsers,FindUserById,DeleteById}