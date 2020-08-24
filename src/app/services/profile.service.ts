import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
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
}
