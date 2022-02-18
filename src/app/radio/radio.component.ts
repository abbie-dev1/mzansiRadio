import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  audioList = [
    {
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/MUNGANALONENEAAC.aac?dist=onlineradiobox",
      title: "MUNGHANA LONENE FM",
      cover: "https://cdn.onlineradiobox.com/img/l/7/857.v8.png"
    },
    {
      url: "https://edge.iono.fm/xice/67_medium.aac?p=embed",
      title: "CAPRICORN FM",
      cover: "https://cdn.onlineradiobox.com/img/l/3/12003.v8.png"
    },
    {
      url: "https://edge.iono.fm/xice/jacarandafm_live_medium.aac",
      title: "JACARANDA FM",
      cover: "https://cdn.onlineradiobox.com/img/l/8/278.v6.png"
    }
  ];
}
