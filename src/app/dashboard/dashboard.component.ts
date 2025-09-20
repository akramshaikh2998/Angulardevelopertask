import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: any = {};
  stats = { totalFiles: 0, approved: 0, pending: 0, errors: 0 };

  constructor(private router: Router) {}

  ngOnInit() {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
      this.stats.totalFiles = 120;
      this.stats.approved = 75;
      this.stats.pending = 30;
      this.stats.errors = 15;
    } else {
      this.router.navigate(['/']);
    }
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }
}
