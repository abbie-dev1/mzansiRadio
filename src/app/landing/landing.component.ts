import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  stations: any;
  selectedStation: any;
  // name: string;
  borders = [];

  constructor() { }

  ngOnInit(): void {
  }

}
