import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import SupabaseLogo from '../components/SupabaseLogo'
import NextJsLogo from '../components/NextJsLogo'
import Logo from '@/components/Logo'

export const dynamic = 'force-dynamic'


export default async function Home() {
  // const supabase = createServerComponentClient({ cookies })

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()

  return (
    <main>

      {/* PRODUCT SECTION */}
      <section className="">
        <div className="flex flex-col justify-center items-center py-10">
          <h1 className="text-5xl md:self-start font-bold mb-10">Welcome to <Logo logoClasses=""/></h1>

          <div className="grid md:grid-cols-3 gap-8">

            {/* ByteGrade Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-4">ByteGrade</h2>
              <p className="text-gray-700">
                Track marks to questions to see progress.
              </p>
            </div>

            {/* ByteTrack Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-4">ByteTrack</h2>
              <p className="text-gray-700">
              Track the topics you study and rate your understanding to monitor your progress.
              </p>
            </div>

            {/* ByteNow Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-4">ByteNow</h2>
              <p className="text-gray-700">
                Randomised questions based on your ByteGrade and ByteTrack to provide you with spaced repetition.
              </p>
            </div>

          </div>
        </div>


        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition ease-in-out duration-300">
          Join now and redefine your learning experience.
        </button>
      </section>

      {/* BLOG SECTION */}
      <section id="BlogBytes">
      <div className="flex flex-col justify-center items-center py-10">
          <h1  className="text-5xl md:self-start font-bold mb-10">{`Blog Bytes/>`}</h1>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Blog Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-4">ByteGrade</h2>
              <p className="text-gray-700">
                Track marks to questions to see progress.
              </p>
            </div>

            {/* ByteTrack Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-4">ByteTrack</h2>
              <p className="text-gray-700">
              Track the topics you study and rate your understanding to monitor your progress.
              </p>
            </div>

            {/* ByteNow Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2  className="text-3xl font-semibold mb-4">ByteNow</h2>
              <p className="text-gray-700">
                Randomised questions based on your ByteGrade and ByteTrack to provide you with spaced repetition.
              </p>
            </div>

          </div>
        </div>


        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition ease-in-out duration-300">
          Join now and redefine your learning experience.
        </button>
      </section>
    </main>
  )
}
