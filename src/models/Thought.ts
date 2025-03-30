import {Schema, model, Document} from 'mongoose';
import ReactionSchema from './Reaction';
import formatDate from '../utils/dateFormat';

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: [typeof ReactionSchema];
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