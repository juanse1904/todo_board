import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}){

    const uniqueTask = await prisma.task.findUnique({
        where: {
            id: params.taskId,
        }
    });
    return NextResponse.json(uniqueTask);
}

export function PUT(){
    return NextResponse.json();
}
export function DELETE(){
    return NextResponse.json();
}