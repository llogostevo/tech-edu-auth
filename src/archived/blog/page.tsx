'use client'

import { usersCheck } from '@/lib/database.queries'
// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export  default function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([])

  
  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getBlogs = async () => {
      const { data, error } = await supabase
  .from('blogs')
  .select(`
    blog_id,
    title,
    content,
    img_path,
    created_at,
    author_id,
    profiles(profile_id,
    first_name,
    last_name, 
    type)
  `) 
  console.log(data)  
  if (error) {
    console.error("Error fetching blogs:", error.message);
  } else {
    setBlogs(data);
  }
    }

    getBlogs()
  }, [supabase, setBlogs])

  console.log(blogs)

  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Blog Card */}
      {blogs.map(blog => (
        <div key={blog.blog_id} className="bg-white flex flex-col gap-2 p-6 rounded-lg shadow-lg mb-4"> 
          <h2 className="text-3xl font-semibold mb-4">{blog.title}</h2>
          {/* <p>{blog.img_path}</p> */}
          {/* <p className="text-gray-700">{blog.content}</p> */}
          <p>{new Date(blog.created_at).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
          })}</p>   
        </div>
      ))}

    </section>
  )
}
