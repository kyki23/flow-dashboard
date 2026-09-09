import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <main className="dashboard">

            <div className="not-found">

                <span>404</span>

                <h2>Page not found</h2>

                <p>
                    The page you're looking for doesn't exist.
                </p>

                <Link
                    to="/"
                    className="not-found-button"
                >
                    Back to Overview
                </Link>

            </div>

        </main>
    )
}

export default NotFound