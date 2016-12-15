import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Project} from "../project";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() project;
  @Output() projectChange = new EventEmitter<Project>();
  private newTask = {};

  constructor() {
  }

  ngOnInit() {
  }

  addTask() {
    this.project.tasks = this.project.tasks || [];
    this.project.tasks.push(this.newTask);
    this.projectChange.emit(this.project);
    this.newTask = {};
  }

  addTask2(task) {
    console.log('Adding task: ', task);
    this.project.tasks.push(task);
    this.projectChange.emit(this.project);
  }
}
