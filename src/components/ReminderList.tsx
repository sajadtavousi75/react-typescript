import Reminder from "../models/Reminder";
interface ReminderListProps{
    items: Reminder[],
    onRemoveReminder: (id : number) => void
}

function ReminderList({items ,onRemoveReminder} : ReminderListProps) {
    return (
        <div className=" container">
            <ul className="list-group">
        {items.map(item => <li className="list-group-item" key={item.id}>{item.title} <button onClick={() =>onRemoveReminder(item.id)} className="btn btn-outline-danger mx-2">Delete</button></li>)}
    </ul>
        </div>
    )
}

export default ReminderList;