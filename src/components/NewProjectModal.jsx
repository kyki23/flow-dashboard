import { useState } from 'react'
import { X } from 'lucide-react'

function NewProjectModal({ isOpen, onClose, onAddProject }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('Planning')
    const [dueDate, setDueDate] = useState('')

    if (!isOpen) {
        return null
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (!name.trim()) {
            return
        }

        const newProject = {
            id: Date.now(),
            name: name,
            description: description,
            status: status,
            progress: 0,
            color: 'teal',
            initials: name.charAt(0).toUpperCase(),
            tasks: '0/0',
            dueDate: dueDate || 'No deadline',
            members: ['JW']
        }

        onAddProject(newProject)

        setName('')
        setDescription('')
        setStatus('Planning')
        setDueDate('')

        onClose()
    }

    return (
        <div className="modal-overlay">

            <div className="project-modal">

                <div className="modal-header">
                    <div>
                        <span>NEW PROJECT</span>
                        <h2>Create project</h2>
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
                        Project name
                        <input
                            type="text"
                            placeholder="e.g. Website Redesign"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label>

                    <label>
                        Description
                        <textarea
                            placeholder="Short project description..."
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>

                    <label>
                        Status
                        <select
                            value={status}
                            onChange={(event) => setStatus(event.target.value)}
                        >
                            <option value="Planning">Planning</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Review">Review</option>
                            <option value="Completed">Completed</option>
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
                            Create Project
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default NewProjectModal