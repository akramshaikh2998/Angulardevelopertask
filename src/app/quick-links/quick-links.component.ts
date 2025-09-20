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

       <span class="follow-us">
  FOLLOW US
  <br>
  <a href="https://instagram.com/YOUR_PAGE" target="_blank" aria-label="Instagram">
    <i class="fab fa-instagram"></i>
  </a>
</span>


        <span>
          PRESENTED BY
         <img src="assets/kland.png" alt="KLand Logo" class="brand-logo">
        </span>
      </div>

      <div class="copy">
        <span>Copyright © 2024 K-Land,</span>
      </div>
      <div>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  `,
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent {}
