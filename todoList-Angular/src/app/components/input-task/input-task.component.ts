import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.css'
})
export class InputTaskComponent {
  text:string = ""
  @Output() onSendTask: EventEmitter<string> = new EventEmitter<string>()

  sendTask(){
    console.log('Task sent')
    this.onSendTask.emit(this.text)
    this.text=""
  }
}
