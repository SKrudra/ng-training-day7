import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css']
})
export class TformsComponent implements OnInit {

  firstName;
  lastName;

  constructor() { }

  ngOnInit(): void {
  }

}
