import { Schema, model } from 'mongoose';
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true,
});
const User = model('User', UserSchema);
export default User;
