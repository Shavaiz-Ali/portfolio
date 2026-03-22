"use client"
import Wrapper from './wrapper'
import Image from 'next/image'
import { NAVBAR_DATA } from '@/constants'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const Header = () => {
    const [isActiveLink, setIsActiveLink] = useState("/")

    return (
        <Wrapper className='py-8 pb-2'>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <Image src={"/images/logo.png"} width={16} height={16} alt='logo' />
                    <p className='text-base font-bold text-white'>
                        <span>Shavaiz</span>
                    </p>
                </div>
                <div className="flex items-center gap-8">
                    {NAVBAR_DATA.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={cn("text-base font-medium text-foreground flex items-center", isActiveLink === item.href && "text-white")}
                            onClick={() => setIsActiveLink(item.href)}
                        >
                            <span className='text-primary'>{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default Header