import React from 'react'
import Link from 'next/link';
import axios from 'axios'
import prisma from '@/lib/db';
/* Server Component */


async function PostsList() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const blogs = await prisma.post.findMany();
    console.log('type of blogs', typeof (blogs));
    return (
        <div className='flex flex-col'>
            {
                blogs.map(blog => (
                    <div key={blog.id}><Link href={`/posts/${blog.id}`}>{blog.title}</Link></div>
                ))
            }
        </div>
    )
}

export default PostsList