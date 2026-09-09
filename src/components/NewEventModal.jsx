import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

function NewEventModal({
    isOpen,
    onClose,
    onAddEvent,
    onUpdateEvent,
    eventToEdit
}) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('Meeting')

    useEffect(() => {
        if (eventToEdit) {
            setTitle(eventToEdit.title)
            setDate(eventToEdit.date)
            setType(eventToEdit.type)
        } else {
            setTitle('')
            setDate('')
            setType('Meeting')
        }
    }, [eventToEdit, isOpen])

    if (!isOpen) {
        return null
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (!title.trim() || !date) {
            return
        }

        if (eventToEdit) {
            const updatedEvent = {
                ...eventToEdit,
                title,
                date,
                type
            }

            onUpdateEvent(updatedEvent)
        } else {
            const newEvent = {
                id: Date.now(),
                title,
                date,
                type
            }

            onAddEvent(newEvent)
        }

        onClose()
    }

    return (
        <div className="modal-overlay">

            <div className="project-modal">

                <div className="modal-header">

                    <div>
                        <span>
                            {eventToEdit ? 'EDIT EVENT' : 'NEW EVENT'}
                        </span>

                        <h2>
                            {eventToEdit ? 'Edit event' : 'Create event'}
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
                        Event title

                        <input
                            type="text"
                            placeholder="e.g. Client Meeting"
                            value={title}
                            onChange={(event) =>
                                setTitle(event.target.value)
                            }
                        />
                    </label>

                    <label>
                        Date

                        <input
                            type="date"
                            value={date}
                            onChange={(event) =>
                                setDate(event.target.value)
                            }
                        />
                    </label>

                    <label>
                        Type

                        <select
                            value={type}
                            onChange={(event) =>
                                setType(event.target.value)
                            }
                        >
                            <option value="Meeting">Meeting</option>
                            <option value="Deadline">Deadline</option>
                            <option value="Milestone">Milestone</option>
                            <option value="Personal">Personal</option>
                        </select>
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
                            {eventToEdit ? 'Save Changes' : 'Create Event'}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default NewEventModal