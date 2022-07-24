import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from './../../models/Task.model';
import { TaskService } from 'src/app/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  listId: string
  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
        this.listId = params['listId']
        console.log(this.listId)
    })
  }
  createTask(title:string){
    this.taskService.createTask(title, this.listId).subscribe((newTask: Task) =>{
    //  this.router.navigate(['lists/',this.listId])
    this.router.navigate(['../'],{ relativeTo: this.route })
    })
  }

}
