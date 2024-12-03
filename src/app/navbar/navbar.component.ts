import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  activeSection: string = ''; // The currently active section, used for highlighting in navbar
  isNavbarOpen: boolean = false; // Track if the navbar is open

  constructor(private router: Router) {}

  // Function for navigating to the home page and scrolling to the section
  onNavigateToSection(section: string) {
    // First, navigate to the home route
    this.router.navigate(['/']).then(() => {
      // Then, scroll to the specified section once the homepage is loaded
      this.scrollToSection(section);
    });
    this.closeNavbar(); // Close the navbar after clicking a link
  }

  // Function to navigate to the home page without scrolling to a specific section
  onNavigateToHome() {
    this.router.navigate(['/']);
    this.closeNavbar(); // Close the navbar after clicking a link
  }

  // Function to handle scrolling to sections
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth', // Ensures smooth scrolling
      });
    }
  }

  // Detect the active section on scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = [
      'home',
      'course-info',
      'our-facility',
      'offers',
      'success-stories',
      'news',
    ];
    let currentSection = 'home'; // Default section

    // Loop through the sections to find the currently visible section
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section is within the viewport
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentSection = sectionId;
          break;
        }
      }
    }

    // Update the active section for highlighting
    this.activeSection = currentSection;
  }

  // Function to toggle navbar visibility (on mobile)
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      if (this.isNavbarOpen) {
        navbarCollapse.classList.add('show');
      } else {
        navbarCollapse.classList.remove('show');
      }
    }
  }

  // Function to close navbar when an item is clicked
  closeNavbar() {
    this.isNavbarOpen = false;
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }
}
