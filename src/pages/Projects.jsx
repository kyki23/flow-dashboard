import { useEffect, useState } from 'react'

import initialProjects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import NewProjectModal from '../components/NewProjectModal'

function Projects() {
    const [projectList, setProjectList] = useState(() => {
        const savedProjects = localStorage.getItem('flow-projects')

        return savedProjects
            ? JSON.parse(savedProjects)
            : initialProjects
    })

    useEffect(() => {
        localStorage.setItem(
            'flow-projects',
            JSON.stringify(projectList)
        )
    }, [projectList])

    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [sortBy, setSortBy] = useState('Due Date')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [projectToEdit, setProjectToEdit] = useState(null)

    function handleAddProject(newProject) {
        setProjectList((currentProjects) => [
            ...currentProjects,
            newProject
        ])
    }

    function handleDeleteProject(projectId) {
        setProjectList((currentProjects) =>
            currentProjects.filter(
                (project) => project.id !== projectId
            )
        )
    }

    function handleEditProject(project) {
        setProjectToEdit(project)
        setIsModalOpen(true)
    }

    function handleUpdateProject(updatedProject) {
        setProjectList((currentProjects) =>
            currentProjects.map((project) =>
                project.id === updatedProject.id
                    ? updatedProject
                    : project
            )
        )
    }

    function handleCloseModal() {
        setIsModalOpen(false)
        setProjectToEdit(null)
    }

    function handleOpenNewProject() {
        setProjectToEdit(null)
        setIsModalOpen(true)
    }

    const filteredProjects = projectList
        .filter((project) => {
            const matchesSearch =
                project.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())

            const matchesStatus =
                statusFilter === 'All' ||
                project.status === statusFilter

            return matchesSearch && matchesStatus
        })
        .sort((a, b) => {
            if (sortBy === 'Progress') {
                return b.progress - a.progress
            }

            if (sortBy === 'Name') {
                return a.name.localeCompare(b.name)
            }

            if (sortBy === 'Due Date') {
                return new Date(a.dueDate) - new Date(b.dueDate)
            }

            return 0
        })

    const planningCount = projectList.filter(
        (project) => project.status === 'Planning'
    ).length

    const inProgressCount = projectList.filter(
        (project) => project.status === 'In Progress'
    ).length

    const reviewCount = projectList.filter(
        (project) => project.status === 'Review'
    ).length

    const completedCount = projectList.filter(
        (project) => project.status === 'Completed'
    ).length

    return (
        <main className="dashboard">

            <div className="projects-header">

                <div>
                    <span className="projects-eyebrow">
                        Workspace
                    </span>

                    <h2>Projects</h2>
                </div>

                <button
                    className="new-project-button"
                    onClick={handleOpenNewProject}
                >
                    + New Project
                </button>

            </div>

            <div className="projects-toolbar">

                <input
                    type="text"
                    placeholder="Search projects..."
                    className="projects-search"
                    value={searchTerm}
                    onChange={(event) =>
                        setSearchTerm(event.target.value)
                    }
                />

                <select
                    className="projects-select"
                    value={statusFilter}
                    onChange={(event) =>
                        setStatusFilter(event.target.value)
                    }
                >
                    <option value="All">All</option>
                    <option value="Planning">Planning</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Review">Review</option>
                    <option value="Completed">Completed</option>
                </select>

                <select
                    className="projects-select"
                    value={sortBy}
                    onChange={(event) =>
                        setSortBy(event.target.value)
                    }
                >
                    <option value="Due Date">Sort: Due Date</option>
                    <option value="Progress">Sort: Progress</option>
                    <option value="Name">Sort: Name</option>
                </select>

            </div>

            <div className="project-filters">

                <button
                    className={`project-filter ${statusFilter === 'All' ? 'active' : ''
                        }`}
                    onClick={() => setStatusFilter('All')}
                >
                    All {projectList.length}
                </button>

                <button
                    className={`project-filter ${statusFilter === 'Planning' ? 'active' : ''
                        }`}
                    onClick={() => setStatusFilter('Planning')}
                >
                    Planning {planningCount}
                </button>

                <button
                    className={`project-filter ${statusFilter === 'In Progress' ? 'active' : ''
                        }`}
                    onClick={() => setStatusFilter('In Progress')}
                >
                    In Progress {inProgressCount}
                </button>

                <button
                    className={`project-filter ${statusFilter === 'Review' ? 'active' : ''
                        }`}
                    onClick={() => setStatusFilter('Review')}
                >
                    Review {reviewCount}
                </button>

                <button
                    className={`project-filter ${statusFilter === 'Completed' ? 'active' : ''
                        }`}
                    onClick={() => setStatusFilter('Completed')}
                >
                    Completed {completedCount}
                </button>

            </div>

            <div className="projects-grid">

                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onDelete={handleDeleteProject}
                        onEdit={handleEditProject}
                    />
                ))}

            </div>

            <NewProjectModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAddProject={handleAddProject}
                onUpdateProject={handleUpdateProject}
                projectToEdit={projectToEdit}
            />

        </main>
    )
}

export default Projects