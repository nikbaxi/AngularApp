import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  contactMethod = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }

}
