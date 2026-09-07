const projects = [
    {
        name: 'FLOW Redesign',
        progress: 68,
        tone: 'purple'
    },
    {
        name: 'API Gateway v2',
        progress: 89,
        tone: 'blue'
    },
    {
        name: 'Mobile App Launch',
        progress: 22,
        tone: 'green'
    },
    {
        name: 'Analytics Platform',
        progress: 54,
        tone: 'orange'
    }
]

function ProjectProgress() {
    return (
        <section className="project-progress-card">

            <div className="card-header">
                <div>
                    <h3>Project Progress</h3>
                </div>

                <button>All projects →</button>
            </div>

            <div className="project-progress-list">

                {projects.map((project) => (
                    <div className="project-progress-item" key={project.name}>

                        <div className="project-progress-info">
                            <strong>{project.name}</strong>
                            <span>{project.progress}%</span>
                        </div>

                        <div className="progress-track">
                            <div
                                className={`progress-fill ${project.tone}`}
                                style={{ width: `${project.progress}%` }}
                            ></div>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default ProjectProgress