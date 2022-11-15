const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async(req, res) =>{
    const {name} = req.body;
    let user = {};
    user.name = name;
    // user.id = id;
    // user.grade = grade;
    // user.likes = likes;

    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

module.exports = route;