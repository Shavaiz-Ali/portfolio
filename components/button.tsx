import { cn } from "@/lib/utils"
import { Button as ShadCNButon } from "./ui/button"


type ButtonProps = {
    className?: string,
    icon?: string,
    label?: string,
    children?: React.ReactNode,
    onClick?: () => void
}

const Button = ({ className, icon, label, children, ...props }: ButtonProps) => {
    return (
        <ShadCNButon {...props} className={cn("border border-primary rounded-none flex items-center bg-transparent! text-base text-white font-medium h-9 w-[148px]", className)}>
            {label && <span>{label}</span>}
            {icon && icon}
            {children && children}
        </ShadCNButon>
    )
}

export default Button