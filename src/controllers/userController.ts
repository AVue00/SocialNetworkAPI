import { Request, Response } from 'express';
import { User } from '../models/index.js';

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const userToUpdate = await User.findById(req.params.id);
        if (userToUpdate) {
            userToUpdate.set(req.body);
            const updatedUser = await userToUpdate.save();
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userToDelete = await User.findOneAndDelete({_id: req.params.id});
        if (userToDelete) {
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}