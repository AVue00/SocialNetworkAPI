import mongoose from 'mongoose';

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/networkDB');
        console.log('Database connected');
        return mongoose.connection;
    } catch(error) {
        console.error('Database connection error:', error);
        throw new Error('Database connection failed.');
    }
}

export default db;