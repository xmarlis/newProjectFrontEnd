import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  featuredArticles=[{"title":"Inside China’s IT Revolution: Innovation or Surveillance?","img":"./img/china.jpg","para": "Explore China’s rapid advancements in information technology and whether it’s fostering true innovation."},{"title":"A New Chapter Begins: Welcoming Our New IT Trainees","img":"./img/coworkers.jpg","para": "Leo Baumann, Martina Bauer and Josef Leitner joined the Team."},{"title":"Could OpenAI’s New Browser Redefine the Internet?","img":"./img/roboter.jpg","para": "Explore China’s rapid advancements in information technology and whether it’s fostering true innovation or increasing state surveillance."}]

  generalArticles=[{"title":"Tutorial: How to build a news blog with Angular","img":"./img/blog.jpg","para": "A step-by-step guide for creating a news blog with Angular for beginners."},{"title":"New Features: First Testversion of Android 16 released","img":"./img/android.jpg","para": "Get a sneak peek at Android 16’s first test version and its innovative updates."},{"title":"Beyond Automation: The Evolving Role of Web Developers in the AI Era","img":"./img/ai_bild.jpg","para": "Web developers are adapting to AI advancements and explore new challenges and opportunities in the age of AI."},{"title":"Warning: Windows 10 support ends in a year!","img":"./img/support.jpg","para": "We prepare you for the changes that come with the end of Windows 10 support."},{"title":"The Fit Developer: How to Maintain Physical Health in a Desk Job","img":"./img/fit.jpg","para": "Tips on staying healthy while working long hours in front of a computer."},{"title":"Interview: A former participant of our Course shares her experience","img":"./img/teilnehmer.jpg","para": "A former course participant shares valuable insights into their learning journey at our company."}, {
    "title": "Meta's Metaverse Vision: A New Frontier for Digital Interaction", "img":"./img/facebook.jpg",
    "para": "Meta’s ambitious metaverse aims to blend the digital and physical worlds. But with growing concerns over privacy, can it lead the way?",

    "author": "Samantha Lewis",
    "date": "23 November 2024"
},
{
    "title": "AI's Role in Shaping the Future of Self-Driving Cars", "img":"./img/tesla.jpg",
    "para": "AI is driving innovation in self-driving cars, offering safer and more efficient transport. But challenges remain for real-world application.",
    "author": "Nathan Brooks",
    "date": "24 November 2024"
},
{
    "title": "CodeFactory's New Office: A Hub for Innovation and Learning","img":"./img/office.jpg",
    "para": "CodeFactory’s new office is designed for creativity and collaboration, providing a space where aspiring developers can thrive.",
    "author": "Olivia Green",
    "date": "26 November 2024"
}]
}

