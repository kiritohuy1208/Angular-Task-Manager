import { Task } from './../../models/Task.model';
import { List } from './../../models/Lists.model';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[]
  tasks: Task[]
  constructor(private taskService: TaskService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) =>{
      this.taskService.getTask(params.listId).subscribe((tasks: Task[])=>{
        this.tasks = tasks
      })
    })
    this.taskService.getLists().subscribe((lists: List[])=>{
       this.lists=lists
    })

  }
  onTaskClick(task: Task){
    this.taskService.taskComplete(task).subscribe(() => {
      console.log("Update success")
    })
  }
  // createNewList(title:string){
  //   this.taskService.createList("title").subscribe((respone:any) =>{
  //     console.log(respone)
  //   })
  // }

}
