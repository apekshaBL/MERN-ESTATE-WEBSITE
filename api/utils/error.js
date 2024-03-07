export const errorHandler=(statusCode,message)=>{
    const error=new Error(message);
    error.statusCode=statusCode

    //error.message=message;
    Error.captureStackTrace(error,errorHandler);
    return error;


};
export default errorHandler;