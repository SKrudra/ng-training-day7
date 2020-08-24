import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RformsComponent implements OnInit {


  profile: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.profile = new FormGroup({
    //   firstName: new FormControl('Sandeep'),
    //   lastName: new FormControl(''),
    //   address: new FormGroup({
    //     hno: new FormControl(''),
    //     city: new FormControl('')
    //   })
    // });


    this.profile = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: this.fb.group({
        hno: [''],
        city: ['Pune']
      })
    });
   }

  ngOnInit(): void {
  }

}
