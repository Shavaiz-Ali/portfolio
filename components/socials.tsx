import { cn } from "@/lib/utils"
import Image from "next/image"

const socialLinks = [
    {
        id: 11,
        path: "/icons/github.svg",
        alt: "github",
        height: 48,
        width: 48,
        href: ""
    },
    {
        id: 12,
        path: "/icons/linkedin.svg",
        alt: "linkedIn",
        height: 38,
        width: 38,
        href: ""
    },
    {
        id: 13,
        path: "/icons/twitter.svg",
        alt: "twitter",
        height: 38,
        width: 38,
        href: ""
    },
]

const Socials = ({ className }: { className?: string }) => {
    return (
        <div className={cn("fixed left-5 top-0 flex flex-col items-center", className)}>
            <Image src={"/images/line_downwards.png"} width={1} height={100} alt='line_downwards' />
            <div className="flex  flex-col items-center gap-2">
                {
                    socialLinks.map((s) => (
                        <a key={s.id} href={s.href} target="_blank">
                            <span><Image src={s.path} loading='eager' priority width={s.height} height={s.width} alt={s.alt} /></span>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Socials