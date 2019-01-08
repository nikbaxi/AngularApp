import {Component} from '@angular/core';
import { CoursesService } from 'src/courses.service';

@Component({
    selector: 'aap-courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;
    
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}