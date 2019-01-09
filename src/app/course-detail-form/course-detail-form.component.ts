import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-detail-form',
  templateUrl: './course-detail-form.component.html',
  styleUrls: ['./course-detail-form.component.css']
})
export class CourseDetailFormComponent implements OnInit {

  constructor() { }

  methodData = [
    {id: 1, name: 'Development' },
    {id: 2, name: 'Art' },
    {id: 3, name: 'Languages' },
  ];
  ngOnInit() {
  }

  submit(f) {
    console.log(f);
  }

  log(name) {
    console.log(name);
  }

}
