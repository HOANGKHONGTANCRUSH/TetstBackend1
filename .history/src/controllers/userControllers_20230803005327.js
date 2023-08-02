import { asIs } from "sequelize";
import userServices from "../services/userServices"

let handleLogin = async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'missing inputs parameter!',
        })
    }

    let userData = await userServices.handleUserLogin(email, password);
    // check email exist
    // comoare password
    // return userInfor
    // access_token: JWT
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {'a':'abc'},
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.body.type; //All, id
    let users = await userServices.getAllUsers(id);

    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
         users
    })
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers:handleGetAllUsers,
}