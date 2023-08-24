// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function BlogPost({ params }: { params: { slug: string } }) {

    // Create a Supabase client configured to use cookies
    const supabase = createServerComponentClient({ cookies })

    //   GET THE POST BY SLUG
    // query to get hte blogs and profile data from the database
    const { data: blogs } = await supabase.from('blogs').select(`
  blog_id,
  title,
  content,
  img_path,
  created_at,
  author_id,
  profiles(profile_id,
  first_name,
  last_name)
`).eq('blog_id', `${params.slug}`)

    if (!blogs || blogs.length === 0) {
        return notFound();
    }

    // there should only be one post returned
    const post = blogs[0];

    return (

        <main key={post.blog_id} className="flex flex-col items-center	">
            <div className=' sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/2 px-3 md:px-20 flex flex-col justify-center items-center border bg-[#fafef] shadow rounded-lg mb-10'>
                <section className='mt-10'>
                    <h1 className={`text-4xl md:text-5xl font-bold`} >{post?.title}</h1>
                </section>
                <p>{post.img_path}</p>
                <p className="text-gray-700">{post.content}</p>
                <p>{new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric'
                })}</p>
                {/* @ts-ignore */}
                <p>{`${post.profiles?.first_name.charAt(0)} ${post.profiles?.last_name} `}</p>
                ƒ</div>
            {/* @ts-ignore */}
            {/* <Comments slug={post.blog_id} /> */}
        </main>


    )
}


