const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: {
            name: {
                type: String,
                required: true,
            },
            phoneNo: {
                type: String,
            }
        },
        require: false
    },
    year: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Movies", MovieSchema);
