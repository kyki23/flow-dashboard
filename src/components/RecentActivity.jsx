const activities = [
    {
        initials: 'LE',
        text: 'Lena completed task Rate limiting middleware',
        time: '2h ago',
        tone: 'green'
    },
    {
        initials: 'SM',
        text: 'Sophie updated design FLOW Redesign',
        time: '4h ago',
        tone: 'purple'
    },
    {
        initials: 'JW',
        text: 'Jonas pushed commit to Analytics Platform',
        time: '5h ago',
        tone: 'blue'
    },
    {
        initials: 'NC',
        text: 'Nico created task in Mobile App Launch',
        time: '6h ago',
        tone: 'orange'
    }
]

function RecentActivity() {
    return (
        <section className="recent-activity-card">

            <div className="card-header">
                <div>
                    <h3>Recent Activity</h3>
                </div>
            </div>

            <div className="activity-list">

                {activities.map((activity) => (
                    <div className="activity-item" key={activity.text}>

                        <div className={`activity-avatar ${activity.tone}`}>
                            {activity.initials}
                        </div>

                        <div className="activity-content">
                            <p>{activity.text}</p>
                            <span>{activity.time}</span>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default RecentActivity