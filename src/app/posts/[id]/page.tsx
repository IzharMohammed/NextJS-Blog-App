"use client"
import prisma from "@/lib/db"
import { useParams } from "next/navigation"

async function page({ params }: { params: { id: string } }) {
    //   const id =  parseInt(useParams().id);
    console.log(params.id);

    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    return (
        <main className='text-center pt-36 px-5 border border-white min-h-screen max-w-[85rem] mx-auto bg-gray-900'>
            <div className='text-4xl mb-10'>{post?.title}</div>
            <div className='max-w-[900px] mx-auto leading-8'>{post?.body}</div>
        </main>
    )
}

export default page