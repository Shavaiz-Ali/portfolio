import Image from 'next/image'

const Quote = () => {
    return (
        <div className="min-w-[712px] w-fit flex justify-center items-center mx-auto border border-foreground p-8 relative">
            <div className="absolute -top-[14px] left-3">
                <Image src={"/icons/quote.svg"} alt='quote' width={41} height={28} />
            </div>
            <div className="absolute -bottom-[14px] right-3">
                <Image src={"/icons/quote.svg"} alt='quote' width={41} height={28} />
            </div>
            <div className="absolute -bottom-[67%] right-0">
                <div className="border border-foreground border-t-0 min-w-[162px] h-16 flex justify-center items-center px-2">
                    <p className='text-2xl font-medium text-foreground'>
                        - Dr. Who
                    </p>
                </div>
            </div>
            <p className='text-2xl font-medium text-white'>
                With great power comes great electricity bill
            </p>
        </div>
    )
}

export default Quote