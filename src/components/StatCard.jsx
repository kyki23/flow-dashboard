function StatCard({ title, value, subtitle, icon: Icon, tone }) {
    return (
        <div className="stat-card">

            <div className="stat-card-top">
                <span className="stat-title">{title}</span>

                <div className={`stat-icon ${tone}`}>
                    <Icon size={16} strokeWidth={2} />
                </div>
            </div>

            <strong className="stat-value">{value}</strong>

            <span className="stat-subtitle">
                {subtitle}
            </span>

        </div>
    )
}

export default StatCard