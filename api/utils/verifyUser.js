import jwt from 'jsonwebtoken';
import errorHandler from './error.js';

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;

    if(!token) return next(errorHandler(401,'Unauthorized'));
    const jwtSecret = process.env.JWT_SECRET;


    if (!jwtSecret) {
        return next(errorHandler(500, 'Internal Server Error: JWT secret not defined'));
    }

    jwt.verify(token,/*process.env.JWT_SECRET*/jwtSecret,(err,user)=>{
       /* if(err) return next (errorHandler(403,'Forbidden'));  

        req.user=user;
        next(); */
        if(err){
            if(err.name==='JsonWebTokenError'){
                return next(errorHandler(403,'Forbidden:Invalid token'));
            }
            if(err.name==='TokenExpiredError'){
                return next(errorHandler(401,'Unauthorized:Token has expired'));
            }
            return next(errorHandler(500,'Internal Server Error'));
        }
        req.user=user;
        next();
    });
};