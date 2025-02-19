import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-rubric-content-block',
  templateUrl: './course-rubric-content-block.component.html',
  styleUrl: './course-rubric-content-block.component.css'
})
export class CourseRubricContentBlockComponent implements OnInit{
  @Input()
  numberOfRows: number = 1;

  rowsArray: any[] = [];

  ngOnInit(): void {
      this.rowsArray = Array(this.numberOfRows).fill(0);
  }
}
