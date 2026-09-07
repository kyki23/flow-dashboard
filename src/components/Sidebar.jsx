import {
    LayoutDashboard,
    FolderKanban,
    ListTodo,
    CalendarDays,
    Activity,
    Settings,
    MoreVertical
} from 'lucide-react'

const menuItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Projects', icon: FolderKanban },
    { name: 'Tasks', icon: ListTodo },
    { name: 'Calendar', icon: CalendarDays },
    { name: 'Activity', icon: Activity }
]

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                <div className="logo-mark">FL</div>
                <span>FLOW</span>
            </div>

            <div className="sidebar-section">
                <p className="sidebar-label">WORKSPACE</p>

                <nav className="sidebar-nav">
                    {menuItems.map((item) => {
                        const Icon = item.icon

                        return (
                            <a
                                href="#"
                                key={item.name}
                                className={`nav-item ${item.name === 'Overview' ? 'active' : ''}`}
                            >
                                <Icon size={16} strokeWidth={1.8} />
                                <span>{item.name}</span>
                            </a>
                        )
                    })}
                </nav>
            </div>

            <div className="sidebar-section">
                <p className="sidebar-label">GENERAL</p>

                <a href="#" className="nav-item">
                    <Settings size={16} strokeWidth={1.8} />
                    <span>Settings</span>
                </a>
            </div>

            <div className="sidebar-profile">
                <div className="profile-avatar">JW</div>

                <div className="profile-info">
                    <strong>Jonas Weber</strong>
                    <span>Frontend Engineer</span>
                </div>

                <MoreVertical size={16} />
            </div>

        </aside>
    )
}

export default Sidebar