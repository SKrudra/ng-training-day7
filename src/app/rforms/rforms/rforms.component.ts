import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      firstName: ['', Validators.required],
      lastName: [''],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.email, Validators.required]],
      address: this.fb.group({
        hno: [''],
        city: ['Pune']
      })
    });
  }

  ngOnInit(): void {
    this.profile.get('firstName').valueChanges.subscribe(data => console.log(data));
  }

  updateValues() {
    this.profile.patchValue({
      lastName: 'Kumar',
      phoneNumber: 9898989898,
      address: {
        hno: 10
      }
    });
  }

  onSubmit() {
    console.log('profile: ', this.profile.value);
  }
}
