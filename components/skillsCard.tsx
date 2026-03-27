import { skills } from '@/constants'
import { cn } from '@/lib/utils'
import { SkillCategory } from '@/types'

const SkillsCard = ({ className }: {
    className?: string,
}) => {
    return (
        <div className={cn("grid grid-cols-3 gap-4 justify-end", className)}>
            {
                skills.map((skill: SkillCategory) => (
                    <div key={skill.title}>
                        <div className="border border-foreground p-1">
                            <h3 className='text-white text-base font-semibold'>{skill.title}</h3>
                        </div>
                        <div className='flex items-center gap-2 border border-t-0 border-foreground p-1'>
                            {skill.skills.map((s) => (
                                <span key={s.name} className='text-foreground text-base font-normal'>{s.name}</span>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SkillsCard