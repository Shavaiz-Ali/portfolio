import Button from './button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='lg:py-[123px] py-10 w-full lg:flex items-start justify-between lg:gap-0 gap-10'>
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
            <div className='lg:-mt-20 relative'>
                <span>
                    <Image src={"/images/hero.png"} loading='eager' priority height={386} width={469} alt='hero_image' />
                </span>
                <div className="absolute bottom-0 right-0 border border-foreground w-full min-h-9 bg-background flex items-center gap-[10px] px-2 py-[10px]">
                    <div className='size-4 bg-primary' />
                    <p className='text-base text-foreground font-normal'>
                        Currently working on
                        <span className='text-white font-medium'> Portfolio</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero