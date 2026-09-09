import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import initialTasks from '../data/tasks'
import TaskCard from '../components/TaskCard'
import NewTaskModal from '../components/NewTaskModal'

function Tasks() {
    const [searchParams, setSearchParams] = useSearchParams()

    const [taskList, setTaskList] = useState(() => {
        const savedTasks = localStorage.getItem('flow-tasks')

        return savedTasks
            ? JSON.parse(savedTasks)
            : initialTasks
    })

    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [priorityFilter, setPriorityFilter] = useState('All')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [taskToEdit, setTaskToEdit] = useState(null)

    useEffect(() => {
        localStorage.setItem(
            'flow-tasks',
            JSON.stringify(taskList)
        )
    }, [taskList])

    useEffect(() => {
        if (searchParams.get('newTask') === 'true') {
            setTaskToEdit(null)
            setIsModalOpen(true)

            setSearchParams({}, { replace: true })
        }
    }, [searchParams, setSearchParams])

    function handleAddTask(newTask) {
        setTaskList((currentTasks) => [
            ...currentTasks,
            newTask
        ])
    }

    function handleDeleteTask(taskId) {
        const shouldDelete = window.confirm(
            'Are you sure you want to delete this task?'
        )

        if (!shouldDelete) {
            return
        }

        setTaskList((currentTasks) =>
            currentTasks.filter(
                (task) => task.id !== taskId
            )
        )
    }

    function handleEditTask(task) {
        setTaskToEdit(task)
        setIsModalOpen(true)
    }

    function handleUpdateTask(updatedTask) {
        setTaskList((currentTasks) =>
            currentTasks.map((task) =>
                task.id === updatedTask.id
                    ? updatedTask
                    : task
            )
        )
    }

    function handleOpenNewTask() {
        setTaskToEdit(null)
        setIsModalOpen(true)
    }

    function handleCloseModal() {
        setIsModalOpen(false)
        setTaskToEdit(null)
    }

    const filteredTasks = taskList.filter((task) => {
        const matchesSearch =
            task.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            task.project
                .toLowerCase()
                .includes(searchTerm.toLowerCase())

        const matchesStatus =
            statusFilter === 'All' ||
            task.status === statusFilter

        const matchesPriority =
            priorityFilter === 'All' ||
            task.priority === priorityFilter

        return (
            matchesSearch &&
            matchesStatus &&
            matchesPriority
        )
    })

    return (
        <main className="dashboard">

            <div className="projects-header">

                <div>
                    <span className="projects-eyebrow">
                        Workspace
                    </span>

                    <h2>Tasks</h2>
                </div>

                <button
                    className="new-project-button"
                    onClick={handleOpenNewTask}
                >
                    + New Task
                </button>

            </div>

            <div className="tasks-toolbar">

                <input
                    type="text"
                    className="projects-search"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(event) =>
                        setSearchTerm(event.target.value)
                    }
                />

                <select
                    className="projects-select"
                    value={statusFilter}
                    onChange={(event) =>
                        setStatusFilter(event.target.value)
                    }
                >
                    <option value="All">All statuses</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Review">Review</option>
                    <option value="Completed">Completed</option>
                </select>

                <select
                    className="projects-select"
                    value={priorityFilter}
                    onChange={(event) =>
                        setPriorityFilter(event.target.value)
                    }
                >
                    <option value="All">All priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

            </div>

            {filteredTasks.length > 0 ? (
                <div className="tasks-grid">

                    {filteredTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                        />
                    ))}

                </div>
            ) : (
                <div className="empty-state">
                    <h3>No tasks found</h3>
                    <p>Try changing your search or filters.</p>
                </div>
            )}

            <NewTaskModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAddTask={handleAddTask}
                onUpdateTask={handleUpdateTask}
                taskToEdit={taskToEdit}
            />

        </main>
    )
}

export default Tasks