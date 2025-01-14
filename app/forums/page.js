import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export const metadata = {
  title: 'Forums - Zchat',
  description: '...',
}
const topics =[{
   'title': 'Pyhton',
    'desc': "Let's talk about python",
    'img':'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg',
    'slug':'python'
},
    {
        "title": "JavaScript",
        "desc": "Dive into JavaScript programming",
        "img": '/js.png',
       'slug':'javascript'
    },
    {
        "title": "Java",
        "desc": "Explore the world of Java",
        "img": "/java.png",
       'slug':'java'
    },
    {
        "title": "C++",
        "desc": "Master C++ programming",
        "img": "/c++.png",
        'slug':'c++'
    },
    {
        "title": "Ruby",
        "desc": "Learn Ruby programming",
        "img": "/ruby.png",
        'slug':'ruby'
    },
    {
        "title": "HTML",
        "desc": "Understand the basics of HTML",
        "img": "/html.png",
        'slug':'html'
    }
    
]


const forums = () => {
  return (
    <div className=' container mx-auto my-20 '>
      <h1 className='text-3xl text-center font-bold pt-5'>Discussion Forum</h1>
      <div className='flex flex-wrap justify-center'>
        {topics.map((topic)=>{
            return <div key={topic.img} className='bg-fourth text-black m-4 w-1/4 shadow-lg flex flex-col items-center justify-center py-10 border rounded-3xl'>
                <Image
                 height={34} width={34} src={topic.img} alt={topic.title}
                />
                <h2 className='text-2xl'>{topic.title}</h2>
                <p>{topic.desc}</p>
                <Link href={`/forum/${topic.slug}`}>
                    <Button className='shadow-lg border bg-second text-white border-white rounded-3xl mt-2'>
                        Discuss Now
                    </Button>
                </Link>

                
            </div>
        })}
      </div>
    </div>
  )
}

export default forums
