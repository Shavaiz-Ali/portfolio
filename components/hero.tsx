import React from 'react'
import Wrapper from './wrapper'
import Button from './button'
import Image from 'next/image'

const Hero = () => {
    return (
        <Wrapper>
            <div className='py-[123px] w-full flex items-start justify-between'>
                <div className="space-y-8">
                    <p className='text-[32px] font-semibold text-white'>Shavaiz is a
                        <span className='text-primary'> web designer</span>  and
                        <span className='text-primary block'> front-end developer</span>
                    </p>
                    <div className="space-y-6">
                        <p className='text-base text-foreground'>
                            He crafts responsive websites where technologies meet
                            <span className='block'>creativity</span>
                        </p>

                        <Button label='Contact me!!' />
                    </div>
                </div>
                <div className='-mt-20'>
                    <span>
                        <Image src={"/images/hero.png"} height={386} width={469} alt='hero_image' />
                    </span>
                </div>
            </div>
        </Wrapper>
    )
}

export default Hero