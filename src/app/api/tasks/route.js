import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
export async function GET(){
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
}
export async function POST(req){
    const {title, description, owner} = await req.json();
    const writeData = await prisma.task.create({ data: {
        title,
        description,
        owner
    }});
    return NextResponse.json(writeData);
}
