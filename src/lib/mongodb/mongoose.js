import mongoose from "mongoose";
import { clerkClient } from "@clerk/nextjs";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if (initialized) {
        console.log('MongoDB already connected');
        return;
    }

    try {
        // Verify Clerk authentication before connecting
        const { sessionId } = await clerkClient.sessions.getSession();
        if (!sessionId) {
            throw new Error('Unauthorized: No valid Clerk session');
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'next-estate',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        initialized = true;
        console.log('MongoDB Connected with Clerk authentication');
    } catch (error) {
        console.log('MongoDB Connection error:', error);
        throw error; // Re-throw to handle authentication errors
    }
};