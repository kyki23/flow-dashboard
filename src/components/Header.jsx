import {
    Search,
    Bell,
    Plus,
    Menu
} from 'lucide-react'

import { useLocation } from 'react-router-dom'

function Header({ onMenuToggle }) {
    const location = useLocation()

    const pageTitles = {
        '/': 'Overview',
        '/projects': 'Projects',
        '/tasks': 'Tasks',
        '/calendar': 'Calendar',
        '/activity': 'Activity',
        '/settings': 'Settings'
    }

    const currentTitle =
        pageTitles[location.pathname] || 'FLOW'

    return (
        <header className="topbar">

            <div className="topbar-left">

                <button
                    className="mobile-menu-button"
                    onClick={onMenuToggle}
                    aria-label="Open menu"
                >
                    <Menu size={20} />
                </button>

                <h1>{currentTitle}</h1>

            </div>

            <div className="topbar-actions">

                <div className="search-box">
                    <Search size={15} />

                    <input
                        type="text"
                        placeholder="Search..."
                    />

                    <span>⌘K</span>
                </div>

                <button className="icon-button">
                    <Bell size={17} />
                    <span className="notification-dot"></span>
                </button>

                <div className="header-avatar">
                    JW
                </div>

                <button className="new-task-button">
                    <Plus size={16} />
                    New Task
                </button>

            </div>

        </header>
    )
}

export default Header