import Image from 'next/image'
import React from 'react'
const topics =[{
    title: 'Pyhton',
    desc: "Let's talk about python",
    img:'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg'
},
    {
        "title": "JavaScript",
        "desc": "Dive into JavaScript programming",
        "img": '/js.png'
    },
    {
        "title": "Java",
        "desc": "Explore the world of Java",
        "img": "/java.png"
    },
    {
        "title": "C++",
        "desc": "Master C++ programming",
        "img": "/c++.png"
    },
    {
        "title": "Ruby",
        "desc": "Learn Ruby programming",
        "img": "/ruby.png"
    },
    {
        "title": "HTML",
        "desc": "Understand the basics of HTML",
        "img": "/html.png"
    }
    
]


const forums = () => {
  return (
    <div className=' container mx-auto my-20 '>
      <h1 className='text-3xl text-center font-bold pt-5'>Discussion Forum</h1>
      <div className='flex flex-wrap justify-center'>
        {topics.map((topic)=>{
            return <div key={topic.img} className='bg-second m-4 w-1/4 shadow-lg flex flex-col items-center justify-center py-10 border rounded-3xl'>
                <Image
                 height={34} width={34} src={topic.img}
                />
                <h2 className='text-2xl'>{topic.title}</h2>
                <p>{topic.desc}</p>

                
            </div>
        })}
      </div>
    </div>
  )
}

export default forums
