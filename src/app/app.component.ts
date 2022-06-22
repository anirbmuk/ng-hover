import { Component } from '@angular/core';
import { IData } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly data: IData[] = [
    {
      text: 'One Left',
      alignment: 'left',
    },
    {
      text: 'One Right',
      alignment: 'right',
    },
    {
      text: 'Two Left',
      alignment: 'left',
    },
    {
      text: 'Two Right',
      alignment: 'right',
    },
    {
      text: 'Three Left',
      alignment: 'left',
    },
    {
      text: 'Three Right',
      alignment: 'right',
    },
  ];
}
