import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cp-viewchild';


  ReceivedFromChildCounter = 0;
  @ViewChild(HeaderComponent) hc!: HeaderComponent;
  ReceiveFromChildViewChild() {
    this.ReceivedFromChildCounter = this.hc.count;
  }


  ReceivedFromChild!: string;
  ReceiveFromChildOutput(event: string) {
    console.log(event);
    this.ReceivedFromChild=event;
  }
  
}
