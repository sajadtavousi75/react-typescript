
import { useEffect, useState } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder'
import ReminderService from './services/Reminder'
import NewReminder from './components/NewReminder'



function App() {

  const [reminders , setReminders] = useState<Reminder[]>([])

  useEffect(() =>{
    loadReminder()
  },[])

  const loadReminder = async ()=>{
   const reminders= await ReminderService.getReminders();
   setReminders(reminders)
  }

  const removeReminder = ( id : number)=>{
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const addReminder =async (title : string) =>{
   const newReminder= await ReminderService.addReminders(title)
   setReminders([newReminder,...reminders])
  }

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  )
}

export default App
