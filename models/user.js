import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    // name:{
    //     type: String,
    //     required:true,
    // },
    phoneNo:{
        type: String,
        require:true
    },
    password: {
      type: String,
      required: true,
    }
},
{timestamps:true}
);

const User= mongoose.models.User || mongoose.model('User',userSchema);

export default User;