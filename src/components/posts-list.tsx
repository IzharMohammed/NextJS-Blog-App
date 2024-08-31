import React from 'react'
import Link from 'next/link';
import axios from 'axios'

// Asynchronous server component responsible for rendering the page

interface Blog {
    id: string
    title: string
}

async function PostsList() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const blogs = await axios.get<Blog[]>('https://dummyapi.online/api/blogposts');
    console.log('type of blogs', typeof (blogs));
    return (
        <div className='flex flex-col'>
            {
                blogs.data.map(blog => (
                    <Link href={`/posts/${blog.id}`}>{blog.title}</Link>
                ))
            }
        </div>
    )
}

export default PostsList