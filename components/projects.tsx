"use client"
import { projectData } from "@/constants"
import CommonHeader from "./commonHeader"
import ProjectCard from "./projectCard"
import { Project } from "@/types"

const Projects = () => {
    return (
        <div className="space-y-12">
            <CommonHeader title="Projects" button={{ show: true, label: "View all ~~>", onClick: () => { } }} />
            <div className="grid grid-cols-3 gap-4 h-auto">
                {projectData.slice(0, 3).map((project: Project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects