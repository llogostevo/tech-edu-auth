import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

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
            <div className='sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/2 px-3 md:px-20 gap-6 flex flex-col justify-center items-center border bg-[#fafef] shadow rounded-lg mb-10'>
                <div className='mt-8'>
                    <h1 className='text-4xl md:text-5xl font-bold'>{post?.title}</h1>
                </div>
                <Image
                    src={`/${post.img_path}`}
                    width={500}
                    height={500}
                    alt={`Image of ${post.title}`}
                    className='rounded-md' // This will give slightly rounded corners
                />
                <p className="text-gray-700 mt-4">{post.content}</p>  {/* Added mt-4 for a slight space between image and content */}
                <div className="mb-4">
                    <p className="mt-2">{new Date(post.created_at).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'long', day: 'numeric'
                    })}</p>
                    {/* @ts-ignore */}
                    <p className="mt-2">{`${post.profiles?.first_name.charAt(0)} ${post.profiles?.last_name} `}</p>
                </div>

                <Link className="py-2 px-4 mb-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group" href="/blog">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>{' '}Return to BlogBytes</Link>
            </div>

            {/* @ts-ignore */}
            {/* <Comments slug={post.blog_id} /> */}
        </main>


    )
}


