const bcrypt = require('bcrypt');

const User = require('../models/User');

const register = async(userName, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    let user = new User({
        username: userName,
        password: hashPassword,
    });
    return user.save();
}

const login = async(userName, password) => {
    const filter = {
        username: userName
    };
    console.log('filter ', filter);
    const user = await User.findOne(filter);
    console.log('user', user);
    if(user) {
        const validPass = await bcrypt.compare(password, user.password);
        if(validPass) {
            return user;
        }else {
            throw Error('Invalid user or password');
        }
    }
    throw Error('Invalid user');
}

module.exports = {register, login};

