import { Pencil, Trash2 } from 'lucide-react'

function TaskCard({ task, onEdit, onDelete }) {
    return (
        <article className="task-card">

            <div className="task-card-top">

                <div>
                    <span className={`task-status ${task.status.toLowerCase().replace(' ', '-')}`}>
                        {task.status}
                    </span>

                    <h3>{task.title}</h3>

                    <p>{task.project}</p>
                </div>

                <div className="task-card-right">

                    <div className="task-assignee">
                        {task.assignee}
                    </div>

                    <div className="task-actions">

                        <button
                            className="task-edit-button"
                            onClick={() => onEdit(task)}
                            title="Edit task"
                        >
                            <Pencil size={13} />
                        </button>

                        <button
                            className="task-delete-button"
                            onClick={() => onDelete(task.id)}
                            title="Delete task"
                        >
                            <Trash2 size={13} />
                        </button>

                    </div>

                </div>

            </div>

            <div className="task-card-bottom">

                <span className={`task-priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                </span>

                <span className="task-date">
                    {task.dueDate}
                </span>

            </div>

        </article>
    )
}

export default TaskCard