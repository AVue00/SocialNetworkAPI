import {Schema, model, Document} from 'mongoose';
import ReactionSchema, { type IReaction } from './Reaction.js';
import formatDate from '../utils/dateFormat.js';

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: IReaction[];
}

const ThoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp: any) => formatDate(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            ReactionSchema,
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true,
    }
);

const Thought = model<IThought>('Thought', ThoughtSchema);

export default Thought;