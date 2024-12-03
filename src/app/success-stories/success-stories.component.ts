import { Component, OnInit } from '@angular/core';

declare var Swiper: any; // Declare Swiper for the CDN version

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css'], // Fixed `styleUrls` typo
})
export class SuccessStoriesComponent implements OnInit {
  captions: string[] = [
    'Alex T. showcasing his first responsive website design',
    'Samantha R. presenting her first freelance project',
    'James K. building dynamic web applications',
  ];
  currentCaption: string = '';

  ngOnInit(): void {
    // Initialize Swiper
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        // TypeScript-aware function for Swiper event
        slideChange: function (this: any) {
          const activeIndex = this.realIndex; // Explicitly use Swiper's internal "this"
          const caption = document.getElementById('slide-caption');
          if (caption) {
            caption.innerText = [
              'Alex T. showcasing his first responsive website design',
              'Samantha R. presenting her first freelance project',
              'James K. building dynamic web applications',
            ][activeIndex];
          }
        },
      },
    });

    // Set initial caption
    this.currentCaption = this.captions[0];
    const captionElement = document.getElementById('slide-caption');
    if (captionElement) {
      captionElement.innerText = this.currentCaption;
    }
  }
}
