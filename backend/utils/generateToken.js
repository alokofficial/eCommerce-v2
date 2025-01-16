import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development", // set to true in production
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
    });
}

export default generateToken