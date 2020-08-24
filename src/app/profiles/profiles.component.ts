import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
})
export class ProfilesComponent implements OnInit {
  profiles = [
    {
      name: 'Safwan Saigh',
      imageUrl: '../assets/images/me.jpg',
    },
    {
      name: 'Ahmed Saeed',
      imageUrl: '../assets/images/me.jpg',
    },
    {
      name: 'Hadi Albinsaad',
      imageUrl: '../assets/images/me.jpg',
    },
    {
      name: 'Fozan Khalawi',
      imageUrl: '../assets/images/me.jpg',
    },
    {
      name: 'Safwan Saigh',
      imageUrl: '../assets/images/me.jpg',
    },
    {
      name: 'Ahmed Saeed',
      imageUrl: '../assets/images/me.jpg',
    },
    {
      name: 'Hadi Albinsaad',
      imageUrl: '../assets/images/me.jpg',
    },
    {
      name: 'Fozan Khalawi',
      imageUrl: '../assets/images/me.jpg',
    },

    {
      name: 'Fozan Khalawi',
      imageUrl: '../assets/images/me.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
