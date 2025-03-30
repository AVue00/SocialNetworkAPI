import { Schema, Types, Document } from 'mongoose';
import formatDate from '../utils/dateFormat';

interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Date;
}

const ReactionSchema = new Schema<IReaction>(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp: any) => formatDate(timestamp)
        }
    }
);

export default ReactionSchema;