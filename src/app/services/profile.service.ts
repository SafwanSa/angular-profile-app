import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profiles: Profile[] = [
    new Profile(
      'safwan9f@gmail.com',
      'Safwan Saigh',
      '../assets/images/me.jpg'
    ),
    new Profile(
      'safwan9f@gmail.com',
      'Safwan Saigh',
      '../assets/images/me.jpg'
    ),
  ];
  constructor() {}
}
