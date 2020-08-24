import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
})
export class ProfilesComponent implements OnInit {
  profiles = [];
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profiles = this.profileService.profiles;
  }
}
