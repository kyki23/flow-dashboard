import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

function NewProjectModal({
    isOpen,
    onClose,
    onAddProject,
    onUpdateProject,
    projectToEdit
}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('Planning')
    const [dueDate, setDueDate] = useState('')

    useEffect(() => {
        if (projectToEdit) {
            setName(projectToEdit.name)
            setDescription(projectToEdit.description)
            setStatus(projectToEdit.status)

            const parsedDate = new Date(projectToEdit.dueDate)

            if (!Number.isNaN(parsedDate.getTime())) {
                setDueDate(parsedDate.toISOString().split('T')[0])
            } else {
                setDueDate('')
            }
        } else {
            setName('')
            setDescription('')
            setStatus('Planning')
            setDueDate('')
        }
    }, [projectToEdit, isOpen])

    if (!isOpen) {
        return null
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (!name.trim()) {
            return
        }

        if (projectToEdit) {
            const updatedProject = {
                ...projectToEdit,
                name,
                description,
                status,
                dueDate: dueDate || projectToEdit.dueDate,
                initials: name.charAt(0).toUpperCase()
            }

            onUpdateProject(updatedProject)
        } else {
            const newProject = {
                id: Date.now(),
                name,
                description,
                status,
                progress: 0,
                color: 'teal',
                initials: name.charAt(0).toUpperCase(),
                tasks: '0/0',
                dueDate: dueDate || 'No deadline',
                members: ['JW']
            }

            onAddProject(newProject)
        }

        onClose()
    }

    return (
        <div className="modal-overlay">

            <div className="project-modal">

                <div className="modal-header">

                    <div>
                        <span>
                            {projectToEdit ? 'EDIT PROJECT' : 'NEW PROJECT'}
                        </span>

                        <h2>
                            {projectToEdit ? 'Edit project' : 'Create project'}
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
                            {projectToEdit ? 'Save Changes' : 'Create Project'}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default NewProjectModal