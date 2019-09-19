import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
// import bulmaCalendar from 'bulma-calendar/';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {
  form: FormGroup;
  datePick = new FormControl("", Validators.required);
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.datePickerFunction();

  }

  createForm() {
    this.form = this.fb.group({
      "datePick": this.datePick
  });
  }

  datePickerFunction() {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', Option);

    // Loop on each calendar initialized
    calendars.forEach(calendar => {
      // Add listener to date:selected event
      calendar.on('date:selected', date => {
        console.log(date);
      });
    });

    // To access to bulmaCalendar instance of an element
    const element = document.querySelector('#my-element');
    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      // element.bulmaCalendar.on('select', datepicker => {
      //   console.log(datepicker.data.value());
      // });
    }
  }
  
}
