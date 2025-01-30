import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from '@/models/user';

export async function POST(req){
    try{
        const {phoneNo, password}=await req.json();

        console.log('Inside API :',phoneNo);

        await connectMongoDB();
        await User.create({phoneNo , password})
       const user= await User.findOne({phoneNo})
        if(1){
            return NextResponse.json({message:"Invalid uswser"},
                {status:200});
        }
        else{
        return NextResponse.json({message:"login sucessfull"},
        {status:200});
        }

    }
    catch{
        return NextResponse.json({message:'No account linked with this Number'},
            {status:500});
        
    }
}