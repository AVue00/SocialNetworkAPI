import { User } from '../models/index.js';
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const updateUser = async (req, res) => {
    try {
        const userToUpdate = await User.findById(req.params.id);
        if (userToUpdate) {
            userToUpdate.set(req.body);
            const updatedUser = await userToUpdate.save();
            res.json(updatedUser);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const deleteUser = async (req, res) => {
    try {
        const userToDelete = await User.findOneAndDelete({ _id: req.params.id });
        if (userToDelete) {
            res.json({ message: 'User deleted' });
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const addFriend = async (req, res) => {
    try {
        const userId = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } });
        const friendId = await User.findOneAndUpdate({ _id: req.params.friendId }, { $addToSet: { friends: req.params.userId } });
        if (userId && friendId) {
            res.json({ message: 'Users are now friends!' });
        }
        else {
            res.status(404).json({ message: 'Users cannot be friends' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const removeFriend = async (req, res) => {
    try {
        const userId = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } });
        const friendId = await User.findOneAndUpdate({ _id: req.params.friendId }, { $pull: { friends: req.params.userId } });
        if (userId && friendId) {
            res.json({ message: 'Users are no longer friends' });
        }
        else {
            res.status(404).json({ message: 'Users cannot be defriended' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
