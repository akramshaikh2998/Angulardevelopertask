import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user = {
    firstName: 'Test',
    lastName: 'Test',
    email: 'eddy@yopmail.com',
    phoneCode: '+965',
    phone: '98563214'
  };

  oldPassword = '';
  newPassword = '';
  confirmPassword = '';

  saveProfile() {
    console.log('Profile saved', this.user, this.oldPassword, this.newPassword);
  }
}
