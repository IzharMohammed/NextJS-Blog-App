import Link from 'next/link'
import React from 'react'

const navLinks = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/posts',
        label: 'Posts'
    },
    {
        href: '/create-post',
        label: 'create post'
    }
]

function Header() {
    return (
        <div className='flex justify-between px-10 border-b '>
           <Link href='/'>
           <img
                src='https://avatars.githubusercontent.com/u/124599?v=4'
                width='45'
                height='35'
                className='rounded-lg'
            />
           </Link>
            <nav >
                <ul className='flex gap-6 pt-2'>
                    {
                        navLinks.map(link => (
                            <li><Link href={link.href}>{link.label}</Link></li>
                        ))
                    }
                </ul>
            </nav>
           
        </div>
    )
}

export default Header