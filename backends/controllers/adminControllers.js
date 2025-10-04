

import jwt from "jsonwebtoken";
//adminLogins
const adminLogins = async(req,res)=>{

    try{
    const {email,password}= req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email + password, process.env.JWT_SECRET);
        res.json({ success: true, message: "Login successful", token })
        
    }else{
        res.json({ success: false, message: "Invalid credentials" })
    }


    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}


export {adminLogins}