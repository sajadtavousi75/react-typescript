import axios from "axios";
import Reminder from "../models/Reminder";

class ReminderServices{
    http = axios.create({
        baseURL : 'https://jsonplaceholder.typicode.com/'
    })


   async getReminders(){
   const res= await this.http.get<Reminder[]>('/todos');
   return res.data
    }


    async addReminders(title:string){
        const res = await this.http.post<Reminder>('/todos',{title});
        return res.data
    }

    async removeReminder(id:number){
        const res = await this.http.delete('/todos/' + id)
        return res.data
    }
}

export default new ReminderServices()