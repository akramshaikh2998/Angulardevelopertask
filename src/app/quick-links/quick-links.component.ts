import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  template: `
    <footer class="quick-links">
      <div>Quick links</div>
      <div>
        <a href="#">Press</a> |
        <a href="#">FAQs</a> |
        <a href="#">Contact us</a> |
        <a href="#">About us</a> |
        <a href="#">Join the team</a> |
        <a href="#">Terms & conditions</a>
      </div>
      <div class="footer-bottom">
        <span>PRIVACY POLICY</span>
        <span>FOLLOW US</span>
        <span>PRESENTED BY KLand</span>
      </div>
    </footer>
  `,
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent {}
