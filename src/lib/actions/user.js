import User from '../models/user.model';

import { connect } from '../mongodb/mongoose';

export const createOrUpdate = async (
    id,
    first_name,
    last_name,
    image_url,
    email_addresses
) => {

    try {
        await connect();
        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    profilePicture: image_url,
                    email: email_addresses[0].email_addresses,    
            },
         },
         { upsert: true, new: true }
        );
        return user;
    } catch (error) {
        console.log('Error: Could not create or update user:', error);
    }
};