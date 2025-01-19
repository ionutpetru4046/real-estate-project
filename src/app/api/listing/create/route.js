import Listing from "@/lib/models/listing.model.js";
import { connect } from "../../../../lib/mongodb/mongoose.js";
import { currentUser } from "@clerk/nextjs/dist/types/server";
import { disconnect } from "mongoose";

export const POST = async (req) => {
    const user = await currentUser();
    try {
        await connect();
        const data = await req.json();
      if (!user || user.publicMetadata.userMongoId !== data.userMongoId) {
        return new Response('Unauthorized', {
            status: 401,
        });
      }
      const newListing = await Listing.create({
        userRef: user.publicMetadata.userMongoId,
        name: data.name,
        description: data.description,
        address: data.address,
        regularPrice: data.regularPrice,
        discountPrice: data.discountPrice,
        bathrooms: data.bathrooms,
        furnished: data.furnished,
        parking: data.parking,
        type: data.type,
        offer: data.offer,
        imageUrls: data.imageUrls,
      });
      await newListing.save();
      return new Response(JSON.stringify(newPost), {
        status: 200,
      });
    } catch (error) {
        console.log('Error creating Post:', error);
        return new Response('Error creating Post', {
            status: 500,
        });
    }
};