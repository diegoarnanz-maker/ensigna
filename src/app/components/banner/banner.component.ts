import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'] 
})
export class BannerComponent {

  private sanitizer = inject(DomSanitizer);

  // URL corregida para el video de YouTube con autoplay, mute, loop, sin controles y sin manipulación
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/5i0vYvWcaGo?autoplay=1&mute=1&loop=1&controls=0&playlist=5i0vYvWcaGo'
  );
}
