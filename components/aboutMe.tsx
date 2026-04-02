import React from 'react'
import CommonHeader from './commonHeader'
import Button from './button'
import Image from 'next/image'

const AboutMe = () => {
    return (
        <div className="space-y-12">
            <CommonHeader title="About Me" image={{
                width: 450
            }} />
            <div className="flex items-start gap-x-20">
                <div className="space-y-8">
                    <p className='text-base font-normal text-foreground space-y-5'>
                        <span className='block'>Hello, i’m Elias!</span>

                        <span className='block'>
                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                        </span>

                        <span className='block'>
                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </span>
                    </p>
                    <Button label='Read more ->' />
                </div>
                <div className="w-full -mt-20">
                    <Image
                        src="/images/about-me.png"
                        alt="about_me_image"
                        height={508}
                        width={343}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutMe