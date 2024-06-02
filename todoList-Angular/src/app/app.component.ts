import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { TaskComponent } from './components/task/task.component';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTaskComponent, ListTaskComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 taskList: Task [] = [
  {text: "pasear al perro", state: true},
  {text: "hacer las compras", state: false},
 ]

 taskReceived (msg: string){
  if (this.taskList.find( x => x.text === msg ) === undefined ){
    this.taskList.push({text: msg, state: false})
  }
 }


}
