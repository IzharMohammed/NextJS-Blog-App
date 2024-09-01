import React, { Suspense } from 'react';
import PostsList from '@/components/posts-list';

function page() {
    return (
        <main className='text-center pt-36 px-5 border border-white min-h-screen max-w-[85rem] mx-auto bg-gray-900'>
            {/* Page title */}
            <h1 className='text-4xl mb-10 font-serif'>All posts</h1>
            
            {/* Suspense component to handle lazy loading of the PostsList component */}
            <Suspense fallback='testing loading....'>
                {/* The PostsList component will be rendered here once it's loaded */}
                <PostsList />
            </Suspense>
        </main>
    )
}

export default page;
