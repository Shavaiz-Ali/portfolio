import { skills } from '@/constants'
import { cn } from '@/lib/utils'
import { SkillCategory } from '@/types'

const SkillsCard = ({ className }: {
    className?: string,
}) => {
    return (
        <div
            className={cn("w-full columns-1 sm:columns-2 lg:columns-3 gap-4", className)}
        >
            {skills.map((skill: SkillCategory) => (
                <div
                    key={skill.title}
                    className="break-inside-avoid mb-4"
                >
                    <div className="border border-foreground px-2 py-1">
                        <h3 className='text-white text-base font-semibold'>{skill.title}</h3>
                    </div>
                    <div className='flex items-center flex-wrap gap-2 border border-t-0 border-foreground p-2'>
                        {skill.skills.map((s) => (
                            <span key={s.name} className='text-foreground text-base font-normal'>{s.name}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsCard