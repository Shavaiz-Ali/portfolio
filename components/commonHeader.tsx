import React from 'react'
import Button from './button'
import Image from 'next/image'

const CommonHeader = ({ title, button, image }: {
    title: string, button?: { show: boolean, label: string, onClick: () => void }, image?: {
        src?: string,
        alt?: string,
        width?: number,
        height?: number,
        className?: string
    }
}) => {
    return (
        <div className='flex items-center justify-between'>
            <div className="flex items-center gap-4">
                <p className='text-[32px] font-medium text-white'>
                    <span className='text-primary'>#</span>
                    {title}
                </p>
                <span>
                    <Image src={image?.src || "/images/line_forward.png"} width={image?.width || 511} height={image?.height || 1} className={image?.className || ''} alt={image?.alt || 'line_downwards'} />
                </span>
            </div>
            {button?.show && <Button className='border-none' label={button.label} onClick={button.onClick} />}
        </div>
    )
}

export default CommonHeader