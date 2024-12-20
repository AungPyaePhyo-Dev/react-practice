const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: 'String',
        required: true,
        trim: true,
        unique: true // user နှစ်ယောက်ရှိလို့မရ
    },
    password: {
        type: 'String',
        require: true,
        trim: true
    }
});

module.exports = mongoose.model('User', UserSchema);