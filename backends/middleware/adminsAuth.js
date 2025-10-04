import jwt from "jsonwebtoken";

const adminsAuth = async(req, res, next) => {
    try{
        const{token}= req.headers;
        if(!token){
            return res.json({success:false,message:"Not Authorized"})
        }
        const token_decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Not Authorized"})
        }
        next();
    }catch(error){
        console.log(error);
        res.status(500).json({success:false,message:"Server Error"}) 
        if(error.name === "TokenExpiredError"){
            res.json({success:false,message:"Session Expired"})
        }
    }
}

export {adminsAuth}