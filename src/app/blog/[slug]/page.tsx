import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import Image from 'next/image'

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
                <div className="mb-10">
                <p className="mt-2">{new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric'
                })}</p>
                {/* @ts-ignore */}
                <p className="mt-2">{`${post.profiles?.first_name.charAt(0)} ${post.profiles?.last_name} `}</p>
                </div>
            </div>

            {/* @ts-ignore */}
            {/* <Comments slug={post.blog_id} /> */}
        </main>


    )
}


