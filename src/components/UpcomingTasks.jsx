const tasks = [
    {
        title: 'Dashboard responsive pass',
        project: 'FLOW Dashboard',
        time: '10:00',
        priority: 'High'
    },
    {
        title: 'Review landing page',
        project: 'Nova Website',
        time: '13:30',
        priority: 'Medium'
    },
    {
        title: 'Prepare client handoff',
        project: 'Atlas App',
        time: '16:00',
        priority: 'Low'
    }
]

function UpcomingTasks() {
    return (
        <section className="upcoming-card">

            <div className="card-header">
                <div>
                    <h3>Upcoming</h3>
                    <p>Tasks due today</p>
                </div>

                <button>View all</button>
            </div>

            <div className="upcoming-list">

                {tasks.map((task) => (
                    <div className="upcoming-item" key={task.title}>

                        <div>
                            <strong>{task.title}</strong>
                            <span>{task.project}</span>
                        </div>

                        <div className="upcoming-meta">
                            <span className={`priority ${task.priority.toLowerCase()}`}>
                                {task.priority}
                            </span>

                            <span>{task.time}</span>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default UpcomingTasks