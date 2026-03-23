import { cn } from '@/lib/utils'
import React from 'react'

const Wrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('max-w-6xl px-4 lg:px-12 mx-auto w-full bg-background pb-20', className)}>{children}</div>
    )
}

export default Wrapper