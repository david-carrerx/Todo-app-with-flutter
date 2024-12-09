const UserModel = require('../models/user.model');

class UserService {
    static async registerUser(email, password){
        try {
            const createUser = new UserModel({email, password});
            return await createUser.save();
            
        } catch(e){
            console.log(e);
        }
    }
}

module.exports = UserService;