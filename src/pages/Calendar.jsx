import { useEffect, useState } from 'react'
import {
    ChevronLeft,
    ChevronRight,
    Pencil,
    Trash2
} from 'lucide-react'

import initialTasks from '../data/tasks'
import NewEventModal from '../components/NewEventModal'

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [eventToEdit, setEventToEdit] = useState(null)

    const [eventList, setEventList] = useState(() => {
        const savedEvents = localStorage.getItem('flow-events')

        return savedEvents
            ? JSON.parse(savedEvents)
            : []
    })

    useEffect(() => {
        localStorage.setItem(
            'flow-events',
            JSON.stringify(eventList)
        )
    }, [eventList])

    const savedTasks = localStorage.getItem('flow-tasks')

    const tasks = savedTasks
        ? JSON.parse(savedTasks)
        : initialTasks

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const monthName = currentDate.toLocaleString('en-US', {
        month: 'long',
        year: 'numeric'
    })

    const firstDayOfMonth = new Date(
        year,
        month,
        1
    ).getDay()

    const daysInMonth = new Date(
        year,
        month + 1,
        0
    ).getDate()

    const calendarDays = [
        ...Array(firstDayOfMonth).fill(null),

        ...Array.from(
            { length: daysInMonth },
            (_, index) => index + 1
        )
    ]

    function previousMonth() {
        setCurrentDate(
            new Date(year, month - 1, 1)
        )
    }

    function nextMonth() {
        setCurrentDate(
            new Date(year, month + 1, 1)
        )
    }

    function handleOpenNewEvent() {
        setEventToEdit(null)
        setIsModalOpen(true)
    }

    function handleCloseModal() {
        setIsModalOpen(false)
        setEventToEdit(null)
    }

    function handleAddEvent(newEvent) {
        setEventList((currentEvents) => [
            ...currentEvents,
            newEvent
        ])
    }

    function handleEditEvent(event) {
        setEventToEdit(event)
        setIsModalOpen(true)
    }

    function handleUpdateEvent(updatedEvent) {
        setEventList((currentEvents) =>
            currentEvents.map((event) =>
                event.id === updatedEvent.id
                    ? updatedEvent
                    : event
            )
        )
    }

    function handleDeleteEvent(eventId) {
        const shouldDelete = window.confirm(
            'Are you sure you want to delete this event?'
        )

        if (!shouldDelete) {
            return
        }

        setEventList((currentEvents) =>
            currentEvents.filter(
                (event) => event.id !== eventId
            )
        )
    }

    function getTasksForDay(day) {
        return tasks.filter((task) => {
            if (
                !day ||
                task.dueDate === 'No deadline'
            ) {
                return false
            }

            const taskDate = new Date(task.dueDate)

            if (Number.isNaN(taskDate.getTime())) {
                return false
            }

            return (
                taskDate.getDate() === day &&
                taskDate.getMonth() === month &&
                taskDate.getFullYear() === year
            )
        })
    }

    function getEventsForDay(day) {
        return eventList.filter((event) => {
            if (!day || !event.date) {
                return false
            }

            const eventDate = new Date(
                `${event.date}T12:00:00`
            )

            return (
                eventDate.getDate() === day &&
                eventDate.getMonth() === month &&
                eventDate.getFullYear() === year
            )
        })
    }

    return (
        <main className="dashboard">

            <div className="projects-header">

                <div>
                    <span className="projects-eyebrow">
                        Workspace
                    </span>

                    <h2>Calendar</h2>
                </div>

                <button
                    className="new-project-button"
                    onClick={handleOpenNewEvent}
                >
                    + New Event
                </button>

            </div>

            <section className="calendar-card">

                <div className="calendar-header">

                    <h3>{monthName}</h3>

                    <div className="calendar-controls">

                        <button onClick={previousMonth}>
                            <ChevronLeft size={16} />
                        </button>

                        <button
                            className="today-button"
                            onClick={() =>
                                setCurrentDate(new Date())
                            }
                        >
                            Today
                        </button>

                        <button onClick={nextMonth}>
                            <ChevronRight size={16} />
                        </button>

                    </div>

                </div>

                <div className="calendar-weekdays">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                </div>

                <div className="calendar-grid">

                    {calendarDays.map((day, index) => {
                        const dayTasks = getTasksForDay(day)
                        const dayEvents = getEventsForDay(day)

                        const today = new Date()

                        const isToday =
                            day === today.getDate() &&
                            month === today.getMonth() &&
                            year === today.getFullYear()

                        return (
                            <div
                                className={`calendar-day ${!day ? 'empty' : ''
                                    }`}
                                key={index}
                            >

                                {day && (
                                    <>

                                        <span
                                            className={`calendar-day-number ${isToday ? 'today' : ''
                                                }`}
                                        >
                                            {day}
                                        </span>

                                        <div className="calendar-events">

                                            {dayTasks.map((task) => (
                                                <div
                                                    className={`calendar-event ${task.priority.toLowerCase()}`}
                                                    key={`task-${task.id}`}
                                                >
                                                    {task.title}
                                                </div>
                                            ))}

                                            {dayEvents.map((event) => (
                                                <div
                                                    className={`calendar-event event-${event.type.toLowerCase()} calendar-custom-event`}
                                                    key={`event-${event.id}`}
                                                >

                                                    <span className="calendar-event-title">
                                                        {event.title}
                                                    </span>

                                                    <div className="calendar-event-actions">

                                                        <button
                                                            onClick={() =>
                                                                handleEditEvent(event)
                                                            }
                                                            title="Edit event"
                                                        >
                                                            <Pencil size={10} />
                                                        </button>

                                                        <button
                                                            onClick={() =>
                                                                handleDeleteEvent(event.id)
                                                            }
                                                            title="Delete event"
                                                        >
                                                            <Trash2 size={10} />
                                                        </button>

                                                    </div>

                                                </div>
                                            ))}

                                        </div>

                                    </>
                                )}

                            </div>
                        )
                    })}

                </div>

            </section>

            <NewEventModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAddEvent={handleAddEvent}
                onUpdateEvent={handleUpdateEvent}
                eventToEdit={eventToEdit}
            />

        </main>
    )
}

export default Calendar