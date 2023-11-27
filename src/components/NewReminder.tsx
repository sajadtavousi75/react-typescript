import React from 'react'

interface NewReminderProps{
    onAddReminder : (title: string) => void
}

function NewReminder({onAddReminder} : NewReminderProps) : JSX.Element {
const [title , setTitle] = React.useState('')

const formSubmit =(e : React.FormEvent)=>{
    e.preventDefault()
    if(!title) return;
    onAddReminder(title)
    setTitle('')
}

    return (
        <div className="container my-5">
            <form onSubmit={formSubmit}>
            <label htmlFor="title">Title:</label>
            <input id="title" type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)}/>
            <button type="submit" className="btn btn-primary rounded-pill mt-2">Add Reminder</button>
        </form>
        </div>
    )
}

export default NewReminder;