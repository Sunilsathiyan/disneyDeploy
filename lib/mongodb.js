import mongoose from 'mongoose';

export const connectMongoDB= async()=>{

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected MongoDb')
    }
    catch(error){
        console.log("Error in Mongo:",error);
    }
};
