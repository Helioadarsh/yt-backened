// @ts-nocheck


const asyncHandler = (requestHandler) => {
    return (req,res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
        }
    
};


// const asyncHandler = (requestHandler:any) => {
//     interface requestHandler {
//         (req: Request, res: Response, next: Function): void | Promise<void>;
//     }

//     (req: Request, res: Response, next: Function) => {
//         Promise.resolve(requestHandler(req, res, next)).
//         catch((err) => next(err))
//     }
    
// };
export {asyncHandler};

// const asyncHandler = () =>{}
// const asynchHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler  = (fn) => async (req, res , next) =>{
//     try{
//          await fn(req, res, next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }