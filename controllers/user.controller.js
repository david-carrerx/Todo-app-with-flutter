const UserService = require("../services/user.service");

exports.register = async(req, res, next) => {
    try {
        const {email, password} = req.body;
        const successRes = await UserService.registerUser(email, password);
        res.json({status: true, success: "User registered successfully"});
    } catch (e) {
        console.log(e)
    }
}