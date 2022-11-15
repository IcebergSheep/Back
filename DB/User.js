const mongoose = require('mongoose');

//db 스키마 생성
const user = new mongoose.Schema({
    name : {
        type: String
    },
    // id: {
    //     type: String
    // },
    // grade: {
    //     type: Number
    // },
    // likes: {
    //     type: Number
    // },
});

module.exports = User = mongoose.model('user', user);