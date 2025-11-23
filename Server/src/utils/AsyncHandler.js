const asyncHandler = (functionToBeWrapped) => async(req,res,next) =>{
    try {
        await Promise.resolve(functionToBeWrapped(req,res,next));
    } catch (error) {
        next(error);
    }
}

export {asyncHandler}