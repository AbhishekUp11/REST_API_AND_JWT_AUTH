const user = require('../model/user');
const User = user.User;


exports.getAllUser = async (req, res) => {
    const users = await User.find();
    res.json(users)
};

exports.getUser = async (req, res) =>{
    const userId = req.params.id;
    const user = await User.find({id: userId});
    res.json(user)
};

exports.replaceUser = async (req, res) =>{
    const id = req.params.id;
    const user = await User.findOneAndReplace({id: id}, req.body);
    res.json(user)
};

exports.updateUser = async (req, res) =>{
    const id = req.params.id;
    const user = await User.findOneAndUpdate({id: id}, req.body);
    res.json(user)
};

exports.deleteUser = async (req, res) =>{
  const id = req.params.id;
  const user = await User.findOneAndDelete({id: id});
  res.status(201).json(user);
};
