import { cn } from "@/lib/utils"
import { Button as ShadCNButon } from "./ui/button"


type ButtonProps = {
    className?: string,
    icon?: string,
    label: string
}

const Button = ({ className, icon, label }: ButtonProps) => {
    return (
        <ShadCNButon className={cn("border border-primary rounded-none flex items-center bg-transparent! text-base text-white font-medium h-9 w-[148px]", className)}>
            <span>{label}</span>
            {icon && icon}
        </ShadCNButon>
    )
}

export default Button