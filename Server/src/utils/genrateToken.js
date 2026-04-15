import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign(
        { userId: user.user_id  },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: process.env.JWT_ACCESS_EXPIRATION }
    )
}

const generateRefreshToken = (user) => {
    return jwt.sign(
        { userId: user.user_id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: process.env.JWT_REFRESH_EXPIRATION }
    )
}

export { generateToken , generateRefreshToken }