import { useState } from 'react'

function Settings() {
    const [name, setName] = useState('Jonas Weber')
    const [email, setEmail] = useState('jonas@flow.app')
    const [role, setRole] = useState('Frontend Engineer')
    const [notifications, setNotifications] = useState(true)

    function handleSave(event) {
        event.preventDefault()

        alert('Settings saved')
    }

    return (
        <main className="dashboard">

            <div className="projects-header">

                <div>
                    <span className="projects-eyebrow">
                        General
                    </span>

                    <h2>Settings</h2>
                </div>

            </div>

            <section className="settings-card">

                <div className="settings-card-header">
                    <h3>Profile settings</h3>
                    <p>Manage your personal workspace information.</p>
                </div>

                <form
                    className="settings-form"
                    onSubmit={handleSave}
                >

                    <label>
                        Full name

                        <input
                            type="text"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                        />
                    </label>

                    <label>
                        Email address

                        <input
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                        />
                    </label>

                    <label>
                        Role

                        <input
                            type="text"
                            value={role}
                            onChange={(event) =>
                                setRole(event.target.value)
                            }
                        />
                    </label>

                    <div className="settings-toggle-row">

                        <div>
                            <strong>Email notifications</strong>
                            <span>
                                Receive updates about tasks and projects.
                            </span>
                        </div>

                        <button
                            type="button"
                            className={`settings-toggle ${notifications ? 'active' : ''
                                }`}
                            onClick={() =>
                                setNotifications(!notifications)
                            }
                        >
                            <span></span>
                        </button>

                    </div>

                    <button
                        type="submit"
                        className="save-settings-button"
                    >
                        Save Changes
                    </button>

                </form>

            </section>

        </main>
    )
}

export default Settings