import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }
  createList(title:string):void{
    this.webReqService.post("/lists",{title})
  }
}