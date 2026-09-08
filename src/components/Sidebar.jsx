import {
    LayoutDashboard,
    FolderKanban,
    ListTodo,
    CalendarDays,
    Activity,
    Settings,
    MoreVertical
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

const menuItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/' },
    { name: 'Projects', icon: FolderKanban, path: '/projects' },
    { name: 'Tasks', icon: ListTodo, path: '/tasks' },
    { name: 'Calendar', icon: CalendarDays, path: '/calendar' },
    { name: 'Activity', icon: Activity, path: '/activity' }
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
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `nav-item ${isActive ? 'active' : ''}`
                                }
                            >
                                <Icon size={16} strokeWidth={1.8} />
                                <span>{item.name}</span>
                            </NavLink>
                        )
                    })}

                </nav>
            </div>

            <div className="sidebar-section">
                <p className="sidebar-label">GENERAL</p>

                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `nav-item ${isActive ? 'active' : ''}`
                    }
                >
                    <Settings size={16} strokeWidth={1.8} />
                    <span>Settings</span>
                </NavLink>
            </div>

            <div className="sidebar-profile">

                <div className="profile-avatar">
                    JW
                </div>

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