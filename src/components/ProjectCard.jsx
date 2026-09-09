import { Pencil, Trash2 } from 'lucide-react'

function ProjectCard({ project, onDelete, onEdit }) {
    return (
        <article className="project-card">

            <div className={`project-card-accent ${project.color}`}></div>

            <div className="project-card-header">

                <div className="project-card-title">
                    <div className={`project-initial ${project.color}`}>
                        {project.initials}
                    </div>

                    <strong>{project.name}</strong>
                </div>

                <div className="project-card-actions">

                    <span
                        className={`project-status ${project.status
                            .toLowerCase()
                            .replace(' ', '-')}`}
                    >
                        {project.status}
                    </span>

                    <button
                        className="project-edit-button"
                        onClick={() => onEdit(project)}
                        title="Edit project"
                    >
                        <Pencil size={14} />
                    </button>

                    <button
                        className="project-delete-button"
                        onClick={() => onDelete(project.id)}
                        title="Delete project"
                    >
                        <Trash2 size={14} />
                    </button>

                </div>

            </div>

            <p className="project-description">
                {project.description}
            </p>

            <div className="project-progress-label">
                <span>Progress</span>
                <strong>{project.progress}%</strong>
            </div>

            <div className="progress-track">
                <div
                    className={`progress-fill ${project.color}`}
                    style={{ width: `${project.progress}%` }}
                ></div>
            </div>

            <div className="project-card-footer">

                <div className="project-members">
                    {project.members.map((member) => (
                        <div
                            className="project-member"
                            key={member}
                        >
                            {member}
                        </div>
                    ))}
                </div>

                <div className="project-meta">
                    <span>{project.tasks}</span>
                    <span>{project.dueDate}</span>
                </div>

            </div>

        </article>
    )
}

export default ProjectCard