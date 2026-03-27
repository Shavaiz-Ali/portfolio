export type ProjectStatus =
    | "Live"
    | "Completed"
    | "In Progress"
    | "Planned"
    | "Production";

export interface ProjectLinks {
    live?: string;
    github?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    tags?: string[];
    links?: ProjectLinks;
    status: ProjectStatus;
    image?: string;
    featured?: boolean;
}

export type Skill = {
    name: string;
};

export type SkillCategory = {
    title: string;
    skills: Skill[];
};

export type SkillsTypes = SkillCategory[];