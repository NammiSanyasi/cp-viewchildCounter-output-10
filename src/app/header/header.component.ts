import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  count = 0;
  incr() { this.count++; }
  decr() { this.count--; }
  reset() {
    this.count =0;
  }

 
  @Output() Event= new EventEmitter();
   value!: string
   SendFromChild() {
    this.Event.emit(this.value)
  }
}
