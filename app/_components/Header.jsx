"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Plus

} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { UserButton, useUser } from '@clerk/nextjs'
function Header() {
    const path = usePathname();
    const { user, isSignedIn } = useUser();
    useEffect(() => {
        console.log(path);
    }, [])
    return (
        <div className='p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-1 bg-white'>
            <div className='flex gap-12 items-center'>
                <Image src={'/logo.svg'} width={150} height={150}></Image>
                <ul className='hidden md:flex gap-10'>
                    <Link href={'/'}> <li className={`'hover:text-primary font-medium text-sm cursor-pointer'${path == '/' && 'text-primary'}`}>For Sale</li> </Link>
                    <li className='hover:text-primary font-medium text-sm cursor-pointer'>For Rent</li>
                    <li className='hover:text-primary font-medium text-sm cursor-pointer'>Agent Finder</li>
                </ul> </div>
            <div className="flex gap-2">
                <Button >
                    <Plus></Plus>Post your Ad
                </Button>
                {isSignedIn ? <UserButton /> : <Button variant="outline">   Login
                </Button>}

            </div>

        </div>
    )
}

export default Header