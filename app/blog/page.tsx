'use client'

// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export default function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([])

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getBlogs = async () => {
      const { data } = await supabase.from('blogs').select()
      if (data) {
        setBlogs(data)
      }
    }

    getBlogs()
  }, [supabase, setBlogs])

  return <pre>{JSON.stringify(blogs, null, 2)}</pre>
}
