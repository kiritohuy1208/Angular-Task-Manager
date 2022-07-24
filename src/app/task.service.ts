import { Task } from './models/Task.model';
import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }
  createList(title:string){
    return this.webReqService.post("lists", {title})
  }
  getLists(){
    return this.webReqService.get("lists")
  }
  createTask(title:string, listId: string){
    return this.webReqService.post(`tasks/${listId}/createTask`, {title})
  }
  getTask(listId: string){
    return this.webReqService.get(`tasks/${listId}/tasks`)
  }
  taskComplete(task: Task){
    return this.webReqService.put(`tasks/${task._listId}/updateTask/${task._id}`,{
      completed: true
    })
  }
}
