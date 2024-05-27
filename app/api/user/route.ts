import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const client=new PrismaClient()

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body)
    const user= await client.signupdata.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    return NextResponse.json({ username: body.username, password: body.password })
}


export async function GET() {
    const user=await client.signupdata.findFirst({})

    return Response.json({
        username:user?.username,
        password:user?.password
    })
}