import createPost from '@/app/actions/actions';
import React from 'react'

async function Form() {

  return (
    <form action={createPost} className='flex  flex-col max-w-[550px] mx-auto pt-16 gap-4'>
      <input type="text"
        name='title'
        placeholder="Title for new post"
        className="border rounded px-3 h-10 text-black"
        required />
      <textarea
        name="body"
        placeholder="Body content for new post"
        className="border rounded px-3 py-2 text-black"
        rows={6}
        required
      />
      <button>submit</button>
    </form>
  )
}

export default Form; 