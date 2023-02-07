import axios from "axios";
import Task from "../models/Task";

class TasksController{
    //CRUD
    async save(task) {
        try {
            let response = await axios.post(
                `https://we-start-tasks-app-7fe4a-default-rtdb.firebaseio.com/tasks.json?auth=${token}`,
                task
            );
            return response.data.name
        } catch (error) {
            //ERROR
        }
    }

    async read() {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.get(
                `https://we-start-tasks-app-7fe4a-default-rtdb.firebaseio.com/tasks.json?auth=${token}`
            );
            if(response.data.length != 0){
                let tasks = [];
                for(let key in response.data){
                    let item = response.data[key]
                    let task = new Task;
                    task.id = key;
                    task.name = item.name;
                    task.categoryId = item.categoryId;
                    task.categoryName = item.categoryName;
                    task.details = item.details;
                    task.startDate = item.startDate;
                    task.endDate = item.endDate;
                    task.status = item.status;
                    tasks.push(task)
                }
                return tasks ;
            }
            return [];
        } catch (error) {
            //ERROR
            return [];
        }
    }

    async delete(id) {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.delete(
                `https://we-start-tasks-app-7fe4a-default-rtdb.firebaseio.com/tasks/${id}.json?auth=${token}`
            );
            return true;
        } catch (error) {
            //ERROR
            return false;
        }
    }

    async update(updatedTask) {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.put(
                `https://we-start-tasks-app-7fe4a-default-rtdb.firebaseio.com/tasks/${updatedTask.id}}.json?auth=${token}`,
                {
                    name: updatedTask.name,
                    categoryId: updatedTask.categoryId,
                    categoryName: updatedTask.categoryName,
                    details: updatedTask.details,
                    startDate: updatedTask.startDate,
                    endDate: updatedTask.endDate,
                    status: updatedTask.status,
                }
            );
            return true;
        } catch (error) {
            //ERROR
            return false;
        }
    }
    
}
export default TasksController;

