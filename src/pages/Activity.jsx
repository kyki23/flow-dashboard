const activities = [
    {
        id: 1,
        user: 'Lena',
        initials: 'LE',
        action: 'completed',
        target: 'Rate limiting middleware',
        project: 'API Gateway v2',
        time: '2h ago'
    },
    {
        id: 2,
        user: 'Sophie',
        initials: 'SM',
        action: 'updated',
        target: 'FLOW dashboard design',
        project: 'FLOW Redesign',
        time: '4h ago'
    },
    {
        id: 3,
        user: 'Jonas',
        initials: 'JW',
        action: 'created',
        target: 'Performance audit task',
        project: 'Analytics Platform',
        time: '5h ago'
    },
    {
        id: 4,
        user: 'Nico',
        initials: 'NC',
        action: 'moved',
        target: 'Launch checklist to Review',
        project: 'Mobile App Launch',
        time: '6h ago'
    },
    {
        id: 5,
        user: 'Clara',
        initials: 'CS',
        action: 'added',
        target: 'Client meeting event',
        project: 'Calendar',
        time: 'Yesterday'
    }
]

function Activity() {
    return (
        <main className="dashboard">

            <div className="projects-header">

                <div>
                    <span className="projects-eyebrow">
                        Workspace
                    </span>

                    <h2>Activity</h2>
                </div>

            </div>

            <div className="activity-page-list">

                {activities.map((activity) => (
                    <div
                        className="activity-page-item"
                        key={activity.id}
                    >

                        <div className="activity-page-avatar">
                            {activity.initials}
                        </div>

                        <div className="activity-page-content">

                            <p>
                                <strong>{activity.user}</strong>
                                {' '}
                                {activity.action}
                                {' '}
                                <strong>{activity.target}</strong>
                            </p>

                            <span>
                                {activity.project} · {activity.time}
                            </span>

                        </div>

                    </div>
                ))}

            </div>

        </main>
    )
}

export default Activity