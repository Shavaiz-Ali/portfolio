import { Project } from '@/types'
import Image from 'next/image'
import Button from './button'

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className='w-full h-auto'>
            <div className="overflow-hidden border border-foreground h-[201px] w-full">
                <Image
                    src={project?.image || "/images/project.png"}
                    alt={project.title}
                    width={0}
                    height={0}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='w-full h-full object-cover' />
            </div>
            <div className="flex flex-wrap gap-2 border-t-0 border border-foreground overflow-hidden p-2">
                {project.tech?.map((tech: string) => (
                    <span key={tech} className='text-base text-foreground font-normal'>{tech}</span>
                ))}
            </div>
            <div className="flex flex-wrap gap-4 border-t-0 border border-foreground overflow-hidden p-2">
                <h1 className='text-2xl font-medium text-white'>{project.title}</h1>
                <p className='text-base text-foreground font-normal'>{project.description}</p>
            </div>
            <div className="flex justify-center items-center gap-4 border-t-0 border border-foreground overflow-hidden p-2">
                <Button label="Live <~>" onClick={() => { }} />
                <Button label="GitHub ~~>" onClick={() => { }} className='border-foreground' />
            </div>
        </div>
    )
}

export default ProjectCard