# FLOW Dashboard

A responsive project management dashboard built with React and Vite.

FLOW is a frontend portfolio project focused on building a realistic SaaS-style application with reusable React components, client-side routing, CRUD functionality, filtering, persistent local data and responsive layouts.

## Live Demo

https://flow-dashboard-sable.vercel.app/

## Features

- Responsive desktop and mobile dashboard
- React Router navigation
- Project management
- Create, edit and delete projects
- Project search, filtering and sorting
- Task management
- Create, edit and delete tasks
- Task search and filtering
- Monthly calendar view
- Task deadlines displayed in the calendar
- Create, edit and delete calendar events
- Activity feed
- Profile settings interface
- Mobile sidebar navigation
- Empty states
- Delete confirmations
- Custom 404 page
- LocalStorage persistence
- Production deployment with Vercel

## Tech Stack

- React
- JavaScript
- Vite
- React Router
- CSS
- Lucide React
- LocalStorage
- Vercel
- Git & GitHub

## What I Practiced

This project helped me practice and understand:

- React components
- Props
- State with `useState`
- Side effects with `useEffect`
- Rendering lists with `.map()`
- Filtering data with `.filter()`
- Updating arrays and objects in React state
- CRUD operations
- Controlled forms
- Conditional rendering
- Client-side routing
- URL search parameters
- LocalStorage persistence
- Responsive layouts
- Component-based application structure

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── StatCard.jsx
│   ├── ProjectCard.jsx
│   ├── TaskCard.jsx
│   ├── NewProjectModal.jsx
│   ├── NewTaskModal.jsx
│   ├── NewEventModal.jsx
│   └── ...
├── data/
│   ├── projects.js
│   └── tasks.js
├── pages/
│   ├── Overview.jsx
│   ├── Projects.jsx
│   ├── Tasks.jsx
│   ├── Calendar.jsx
│   ├── Activity.jsx
│   ├── Settings.jsx
│   └── NotFound.jsx
├── App.jsx
├── App.css
└── main.jsx