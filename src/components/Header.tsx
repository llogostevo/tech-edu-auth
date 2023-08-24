import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import { logoFont, siteFont } from "@/app/layout";
import { usersCheck } from '../lib/database.queries';
import LogoutButton from "./LogoutButton";

export default async function Header() {

    const user = await usersCheck();

    return (
        <div className="text-mainText mt-5 px-4 md:pl-10 pt-12 pb-11 mb-10 border-t-2 border-b-2 border-primaryColor flex flex-row justify-between">
            <div>
                <div className="md:ml-4 mx-auto flex flex-row gap-10">
                    <Logo logoClasses="text-mainText text-3xl md:text-5xl lg:text-6xl" />
                </div>
                <nav className={`${logoFont.className} mt-2 space-y-2 md:space-y-0 md:flex md:space-x-4 md:ml-4`}>
                    {/*  */}
                    <Link className="mx-2 border-b-2 border-transparent hover:border-secondaryColor block" href="/questions">MyByte</Link>
                    <Link className="mx-2 border-b-2 border-transparent hover:border-secondaryColor block" href="/questions">ByteMark</Link>
                    <Link className="mx-2 border-b-2 border-transparent hover:border-secondaryColor block" href="/questions">ByteTrack</Link>
                    <Link className="mx-2 border-b-2 border-transparent hover:border-secondaryColor block" href="/questions">ByteNow</Link>

                    {/* visible only to non logged in */}
                    <Link className="mx-2 border-b-2 border-transparent hover:border-secondaryColor block" href="/blog">BlogBytes</Link>
                </nav>
            </div>
               <div className="flex flex-row gap-5">
                
                <div>
                <Image
                        src="/logo.png"
                        width={30}
                        height={30}
                        alt="Progress Icon"
                        className=""
                    />
                </div>

                <div>
                {user ? (
                  <div className="flex items-center gap-4">
                    {user.email}!
                    <LogoutButton />
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                  >
                    Login
                  </Link>
                )}
                </div>
                </div>
          
        </div>

    )
}
