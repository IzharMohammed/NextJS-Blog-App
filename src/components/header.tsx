import React from 'react'

const navLinks = [
    {
        href : '/',
        label : 'Home'
    },
    {
        href : 'posts',
        label : 'Posts'
    }
]

function Header() {
  return (
    <div>
        <nav>
            <ul>
                {
                    navLinks.map(link=>(
                        <li>{link.label}</li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default Header