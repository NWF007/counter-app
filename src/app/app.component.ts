import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';
 
  count: number = 0;
  text: string = "Sorry but you can't go passed 0";

  handleIncrease = () => {

    if(this.count === 10){
      this.count = 0;
    }

    this.count = this.count + 1;
  }

  handleDecrease = () => {
 
    if(this.count > 0){
      this.count = this.count - 1;
    } else{
      this.count = 0
    }
  }

  handleReset = () => {
    this.count = 0;
  }


}
