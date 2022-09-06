import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  template: `
    <h2 *ngIf="displayName; else elseBlock">
      if1
    </h2>

    <ng-template #elseBlock>
    <h2>
      else2
    </h2>
    </ng-template>
  `,
  styleUrls: ['./directive-test.component.css']
})
export class DirectiveTestComponent implements OnInit {

  public displayName = true;

  constructor() { }

  ngOnInit(): void {
  }

}
