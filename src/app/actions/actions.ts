"use server"
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import React from 'react'

async function createPost(formData: FormData) {
    const title = formData.get('title') as string;
    const body = formData.get('body') as string;
    console.log('title', title);
    console.log('body', body);

    await prisma.post.create({
        data : {
            title,
            body
        }
    } )
    revalidatePath('/posts');
}

export default createPost