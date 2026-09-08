import StatCard from '../components/StatCard'
import ProductivityChart from '../components/ProductivityChart'
import UpcomingTasks from '../components/UpcomingTasks'
import ProjectProgress from '../components/ProjectProgress'
import RecentActivity from '../components/RecentActivity'

import {
    Zap,
    CircleCheck,
    Clock3,
    TrendingUp
} from 'lucide-react'

function Overview() {
    return (
        <main className="dashboard">

            <div className="dashboard-heading">
                <h2>Good morning, Jonas 👋</h2>
                <p>Here's what's happening across your workspace today.</p>
            </div>

            <div className="stats-grid">

                <StatCard
                    title="ACTIVE PROJECTS"
                    value="3"
                    subtitle="+2 this month"
                    icon={Zap}
                    tone="purple"
                />

                <StatCard
                    title="TASKS COMPLETED"
                    value="2"
                    subtitle="82% completion rate"
                    icon={CircleCheck}
                    tone="green"
                />

                <StatCard
                    title="IN PROGRESS"
                    value="3"
                    subtitle="Across all projects"
                    icon={Clock3}
                    tone="orange"
                />

                <StatCard
                    title="PRODUCTIVITY"
                    value="94%"
                    subtitle="↑ 6% vs last week"
                    icon={TrendingUp}
                    tone="teal"
                />

            </div>

            <div className="dashboard-main-grid">
                <ProductivityChart />
                <UpcomingTasks />
            </div>

            <div className="dashboard-bottom-grid">
                <ProjectProgress />
                <RecentActivity />
            </div>

        </main>
    )
}

export default Overview