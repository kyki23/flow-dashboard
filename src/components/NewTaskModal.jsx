import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

function NewTaskModal({
    isOpen,
    onClose,
    onAddTask,
    onUpdateTask,
    taskToEdit
}) {
    const [title, setTitle] = useState('')
    const [project, setProject] = useState('')
    const [status, setStatus] = useState('To Do')
    const [priority, setPriority] = useState('Medium')
    const [dueDate, setDueDate] = useState('')
    const [assignee, setAssignee] = useState('JW')

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title)
            setProject(taskToEdit.project)
            setStatus(taskToEdit.status)
            setPriority(taskToEdit.priority)
            setAssignee(taskToEdit.assignee)

            const parsedDate = new Date(taskToEdit.dueDate)

            if (!Number.isNaN(parsedDate.getTime())) {
                setDueDate(parsedDate.toISOString().split('T')[0])
            } else {
                setDueDate('')
            }
        } else {
            setTitle('')
            setProject('')
            setStatus('To Do')
            setPriority('Medium')
            setDueDate('')
            setAssignee('JW')
        }
    }, [taskToEdit, isOpen])

    if (!isOpen) {
        return null
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (!title.trim()) {
            return
        }

        if (taskToEdit) {
            const updatedTask = {
                ...taskToEdit,
                title,
                project: project || 'General',
                status,
                priority,
                dueDate: dueDate || taskToEdit.dueDate,
                assignee
            }

            onUpdateTask(updatedTask)
        } else {
            const newTask = {
                id: Date.now(),
                title,
                project: project || 'General',
                status,
                priority,
                dueDate: dueDate || 'No deadline',
                assignee
            }

            onAddTask(newTask)
        }

        onClose()
    }

    return (
        <div className="modal-overlay">

            <div className="project-modal">

                <div className="modal-header">

                    <div>
                        <span>
                            {taskToEdit ? 'EDIT TASK' : 'NEW TASK'}
                        </span>

                        <h2>
                            {taskToEdit ? 'Edit task' : 'Create task'}
                        </h2>
                    </div>

                    <button
                        className="modal-close"
                        onClick={onClose}
                    >
                        <X size={18} />
                    </button>

                </div>

                <form
                    className="project-form"
                    onSubmit={handleSubmit}
                >

                    <label>
                        Task title

                        <input
                            type="text"
                            placeholder="e.g. Build login page"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </label>

                    <label>
                        Project

                        <input
                            type="text"
                            placeholder="e.g. FLOW Redesign"
                            value={project}
                            onChange={(event) => setProject(event.target.value)}
                        />
                    </label>

                    <label>
                        Status

                        <select
                            value={status}
                            onChange={(event) => setStatus(event.target.value)}
                        >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Review">Review</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </label>

                    <label>
                        Priority

                        <select
                            value={priority}
                            onChange={(event) => setPriority(event.target.value)}
                        >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </label>

                    <label>
                        Due date

                        <input
                            type="date"
                            value={dueDate}
                            onChange={(event) => setDueDate(event.target.value)}
                        />
                    </label>

                    <label>
                        Assignee

                        <input
                            type="text"
                            maxLength="2"
                            value={assignee}
                            onChange={(event) =>
                                setAssignee(event.target.value.toUpperCase())
                            }
                        />
                    </label>

                    <div className="modal-actions">

                        <button
                            type="button"
                            className="cancel-button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="create-project-button"
                        >
                            {taskToEdit ? 'Save Changes' : 'Create Task'}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default NewTaskModal