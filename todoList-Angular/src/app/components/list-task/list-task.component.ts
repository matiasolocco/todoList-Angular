import { Task } from '../../interfaces/task';
import { TaskComponent } from './../task/task.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  @Input () taskList!: Task[]
}
