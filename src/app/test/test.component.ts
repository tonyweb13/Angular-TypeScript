import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // selector: '.app-test',
  // selector: '[app-test]',
  // templateUrl: './test.component.html',
  // template: `
  // <h2>
  //   Welcome interpolatation {{ name }}
  // </h2>
  // <div>{{ 2+2 }}</div>
  // <div>{{ "Welcome " + name }}</div>
  // <div>{{ name.length }}</div>
  // <div>{{ name.toUpperCase() }}</div>
  // <div>{{ greetUser() }}</div>
  // <div>{{ siteUrl }}</div>
  // `,
  // styleUrls: ['./test.component.css']
  // styles: [`
  //   div {
  //     color: red
  //   }
  // `]
  // template: `
  //   <h2>
  //     Welcome interpolatation {{ name }}
  //   </h2>
  //   <input [id]="myId" type="text" value="pogi1">
  //   <input disabled id="{{myId}}" type="text" value="pogi2">
  //   <input [disabled]="isDisabled" id="{{myId}}" type="text" value="pogi3">
  //   <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="pogi4">
  // `,
  // styles: []
  template: `
    <h2>
      Welcome interpolatation {{ name }}
    </h2>
    <h2 class="text-success">Class Binding1</h2>
    <h2 [class]="successClass">Class Binding2</h2>
    <h2 [class.text-danger]="hasError">Class Binding3</h2>
    <h2 [ngClass]="messageClasses">Class Binding4</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding1</h2>
    <h2 [style.color]="highlightColor">Style Binding2</h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting='Welcome Tony'">Greet2</button>
    {{ greeting }} <br><hr>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
    <button (click)="logMessage(myInput)">Log Html</button> <br>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Tony J"
  public siteUrl = window.location.href;
  public myId = "testId"
  public isDisabled = true
  public successClass = "text-success"
  public hasError = true
  public isSpecial = true
  public highlightColor = "orange"
  public greeting = ""
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetUser () {
    return "Hello " + this.name;
  }

  onClick (event) {
    console.log(event)
    // this.greeting = "Welcome";
    this.greeting = event.type;
  }

  logMessage (val) {
    console.log(val)
  }
}
