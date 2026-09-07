const days = [
    { day: 'Mon', value: 38 },
    { day: 'Tue', value: 56 },
    { day: 'Wed', value: 34 },
    { day: 'Thu', value: 72, active: true },
    { day: 'Fri', value: 52 },
    { day: 'Sat', value: 20 },
    { day: 'Sun', value: 28 }
]

function ProductivityChart() {
    return (
        <section className="productivity-card">

            <div className="card-header">
                <div>
                    <h3>Weekly Productivity</h3>
                    <p>Tasks completed per day</p>
                </div>

                <button>This week</button>
            </div>

            <div className="chart">
                {days.map((item) => (
                    <div className="chart-item" key={item.day}>

                        <div
                            className={`chart-bar ${item.active ? 'active' : ''}`}
                            style={{ height: `${item.value}px` }}
                        ></div>

                        <span>{item.day}</span>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default ProductivityChart