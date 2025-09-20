import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  template: `
    <footer class="quick-links">
      <div class="title">Quick links</div>
      <nav class="links">
        <a href="#" aria-label="Press">Press</a>
        <a href="#" aria-label="FAQs">FAQs</a>
        <a href="#" aria-label="Contact us">Contact us</a>
        <a href="#" aria-label="About us">About us</a>
        <a href="#" aria-label="Join the team">Join the team</a>
        <a href="#" aria-label="Terms and conditions">Terms & conditions</a>
      </nav>

      <div class="footer-bottom">
        <span class="privacy">PRIVACY POLICY</span>

        <span class="follow-us">
          FOLLOW US
          <br />
          <a href="https://instagram.com/YOUR_PAGE" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </span>

        <span class="presented-by">
          PRESENTED BY
          <img src="assets/kland.png" alt="KLand Logo" class="brand-logo" />
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
