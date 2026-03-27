import { Project, SkillsTypes } from "@/types"



export const NAVBAR_DATA = [
    {
        id: 1,
        label: "home",
        icon: "#",
        href: "/"
    },
    {
        id: 2,
        label: "works",
        icon: "#",
        href: "/about"
    },
    {
        id: 3,
        label: "about-me",
        icon: "#",
        href: "/projects"
    },
    {
        id: 4,
        label: "contacts",
        icon: "#",
        href: "/contact"
    },
]

export const projectData: Project[] = [
    {
        "id": "upwork-optimizer",
        "title": "Upwork Profile Optimizer",
        "description": "Full-stack app with AI integration to optimize Upwork profiles. Includes Chrome extension and web app.",
        "tech": ["Next.js", "React", "Node.js", "AI", "Chrome Extension"],
        "tags": ["Full Stack", "AI", "Extension"],
        "links": {
            "live": "https://your-upwork-optimizer.com",
            "github": "https://github.com/your-repo"
        },
        "status": "Production",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        "featured": true
    },
    {
        "id": "schedule-management",
        "title": "Schedule Management System",
        "description": "Frontend system for managing schedules with interactive calendar views and dynamic data handling.",
        "tech": ["React", "Next.js", "Calendar UI"],
        "tags": ["Frontend", "Dashboard"],
        "links": {
            "live": "https://your-schedule-app.com"
        },
        "status": "Live",
        "image": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
    },
    {
        "id": "leads-import",
        "title": "Leads Import System",
        "description": "Full-stack system for importing, processing, and managing leads efficiently with backend automation.",
        "tech": ["Node.js", "Express", "MongoDB", "Next.js"],
        "tags": ["Full Stack", "Automation"],
        "links": {
            "github": "https://github.com/your-leads-system"
        },
        "status": "Completed",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
        "id": "youtube-clone",
        "title": "YouTube Clone",
        "description": "Full-stack YouTube clone with video browsing and playback using RapidAPI",
        "tech": ["Next.js", "React", "RapidAPI", "Tailwind"],
        "tags": ["Frontend", "API Integration"],
        "links": {
            "live": "https://your-youtube-clone-url.com",
            "github": "https://github.com/your-repo"
        },
        "status": "Live"
    },
    {
        "id": "property-management-dashboard",
        "title": "Property Management Dashboard",
        "description": "Dashboard for managing apartment statuses using Google Sheets as a data source",
        "tech": ["Next.js", "Google Sheets API", "React"],
        "tags": ["Dashboard", "Admin Panel"],
        "links": {
            "live": "https://your-dashboard-url.com"
        },
        "status": "Live"
    },
    {
        "id": "chrome-translation-extension",
        "title": "Chrome Translation Extension",
        "description": "Chrome extension that detects untranslated words and allows dynamic translation with MongoDB storage",
        "tech": ["React", "Node.js", "Express", "MongoDB", "Chrome APIs"],
        "tags": ["Extension", "Automation"],
        "links": {
            "github": "https://github.com/your-extension-repo"
        },
        "status": "Completed"
    }
]


export const skills: SkillsTypes = [
    {
        "title": "Languages",
        "skills": [
            { "name": "JavaScript" },
            { "name": "TypeScript" },
            { "name": "Lua" }
        ]
    },
    {
        "title": "Databases",
        "skills": [
            { "name": "PostgreSQL" },
            { "name": "MongoDB" },
            { "name": "Supabase" },
            { "name": "Redis" }
        ]
    },
    {
        "title": "Frameworks",
        "skills": [
            { "name": "Next.js" },
            { "name": "React" },
            { "name": "Node.js" },
            { "name": "Express.js" },
            { "name": "Prisma" }
        ]
    },
    {
        "title": "Tools",
        "skills": [
            { "name": "Git" },
            { "name": "VS Code" },
            { "name": "Linux" },
            { "name": "Cloudinary" },
            { "name": "BullMQ" }
        ]
    },
    {
        "title": "Other",
        "skills": [
            { "name": "HTML" },
            { "name": "CSS" },
            { "name": "REST APIs" },
            { "name": "Authentication (NextAuth)" },
            { "name": "Chrome Extensions" }
        ]
    }
]