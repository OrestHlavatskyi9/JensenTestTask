import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rubric-content-item',
  templateUrl: './rubric-content-item.component.html',
  styleUrl: './rubric-content-item.component.css'
})
export class RubricContentItemComponent {
  @Input()
  headerText: string = "";
}
