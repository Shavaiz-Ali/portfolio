import CommonHeader from "./commonHeader"
import Image from 'next/image'
import SkillsCard from './skillsCard'

const Skills = () => {
    return (
        <div className="space-y-12">
            <CommonHeader title="Skills" image={{
                width: 300
            }} />
            <div className="flex items-center w-full gap-x-20">
                <div className="w-full">
                    <span>
                        <Image
                            src="/images/skills_side_image.png"
                            width={349}
                            height={282}
                            alt="skills_side_image"
                            className='w-full h-auto'
                        />
                    </span>
                </div>
                <SkillsCard />
            </div>
        </div>
    )
}

export default Skills