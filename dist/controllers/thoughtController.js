import { Thought } from '../models/index.js';
export const getAllThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        res.json(thought);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        res.json(thought);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const updateThought = async (req, res) => {
    try {
        const thoughtToUpdate = await Thought.findById(req.params.id);
        if (thoughtToUpdate) {
            thoughtToUpdate.set(req.body);
            const updatedThought = await thoughtToUpdate.save();
            res.json(updatedThought);
        }
        else {
            res.status(404).json({ message: 'Thought not found' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const deleteThought = async (req, res) => {
    try {
        const thoughtToDelete = await Thought.findOneAndDelete({ _id: req.params.id });
        if (thoughtToDelete) {
            res.json({ message: 'Thought deleted' });
        }
        else {
            res.status(404).json({ message: 'Thought not found' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const addReaction = async (req, res) => {
    try {
        const thoughtToUpdate = await Thought.findById(req.params.thoughtId);
        if (thoughtToUpdate) {
            thoughtToUpdate.reactions.push(req.body);
            const updatedThought = await thoughtToUpdate.save();
            res.json(updatedThought);
        }
        else {
            res.status(404).json({ message: 'Thought not found' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
export const deleteReaction = async (req, res) => {
    try {
        const thoughtToUpdate = await Thought.findById(req.params.thoughtId);
        if (thoughtToUpdate) {
            thoughtToUpdate.reactions = thoughtToUpdate.reactions.filter((reaction) => reaction.reactionId.toString() !== req.params.reactionId);
            const updatedThought = await thoughtToUpdate.save();
            res.json(updatedThought);
        }
        else {
            res.status(404).json({ message: 'Thought not found' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
