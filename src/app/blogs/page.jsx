"use client"

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import {getBlogs} from '../../lib/api/blogs'
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'
function page() {
  const [blogs,setBlogs] = useState([])
  const [searched_value,setSearched_value] = useState("")
  const [org_data,setOrgData] = useState([])
  const {data,isLoading} = useQuery({
    queryKey:['blogs'],
    queryFn:getBlogs,
    staleTime:0,
    refetchInterval:6000,
  })

  useEffect(()=>{
    if(data)
    {
      setBlogs(data)
      setOrgData(data)
    }
  },[data])

  useEffect(()=>{
    let search_blogs = blogs.filter(blog=>(blog.title.toLowerCase().includes(searched_value.toLowerCase())))
    if(search_blogs)
    {
      setBlogs(search_blogs)
    }
    if(searched_value === "")
    {
      setBlogs(org_data)
    }
  
    
  },[searched_value])

  return (
    <>
    {isLoading && <p className='text-center'>Loading...</p>}
    {!isLoading && 
      <div className='w-[1180px] mx-auto '>
        <div className='mb-4'>
            <input className='w-[400px] h-[60px] mb-2 px-3 border-1  border-gray-300 rounded-md' type="text" value={searched_value} name="search" id="search" placeholder="eg. new blogs" autoFocus onChange={(e)=>{setSearched_value(e.target.value)}}/>
        </div>
        <div className='grid grid-cols-3 gap-4 gap-y-16'>
        {blogs.map((post)=>{
          return(<div key={post.id} className='flex flex-col gap-6'>
            <div className="relative w-[375px] h-[300px] rounded-2xl">
                <Image
                  width={300}
                  height={300}
                  src={post.avatar}
                  alt="recent"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h2 className="text-xl font-medium">{post.title}</h2>
              <p>{post.description.split(" ",15).join(" ")}</p>
              <Link href={`/blog/${post.id}`}><button className='w-[118px] h-[40px] rounded-[10px] bg-[#141C25] text-white text-[14px]'>Learn more</button></Link>
            </div>)
        })}
      </div>

      </div>
    }
    </>
    
  )
}

export default page
