const RegisterUser = () =>{
    const {username, password,email,githubId} = req.body;

    if(!username || !password || !email){
        return resizeBy.status(400).json({message: "Username, password and email are required"});
    }

    // Further logic to register the user
}

const LoginUser = () =>{
    const {username,password} = req.body;

    if(!username || !password){
        return res.status(400).json({message: "Username and password are required"});
    }

    // Further logic to login the user
}


export {RegisterUser, LoginUser};