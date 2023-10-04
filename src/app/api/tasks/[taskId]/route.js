import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}){

    const uniqueTask = await prisma.task.findUnique({
        where: {
            id: params.taskId,
        }
    });
    return NextResponse.json(uniqueTask);
};

export async function PUT(request, {params}){
    const data = await request.json();
    const taskUpdated = await prisma.task.update({
        where: {
            id: params.taskId,
        },
        data,
    })
    return NextResponse.json(taskUpdated);
};

export async function DELETE(request, {params}){

    const deletedTask = await prisma.task.delete({
        where: {
            id: params.taskId,
        }
    });
    return NextResponse.json(deletedTask);
};