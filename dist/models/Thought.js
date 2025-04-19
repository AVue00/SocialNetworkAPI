import { Schema, model } from 'mongoose';
import ReactionSchema from './Reaction.js';
import formatDate from '../utils/dateFormat.js';
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => formatDate(timestamp),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        ReactionSchema,
    ],
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true,
});
const Thought = model('Thought', ThoughtSchema);
export default Thought;
