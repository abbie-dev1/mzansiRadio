import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {

  @Input("stations") stations:any;
  @Output() onSelectedStation = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  getStation(station:any)
  {
    this.onSelectedStation.emit(station);
  }

}
