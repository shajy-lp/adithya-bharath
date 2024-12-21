import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adithya-bharath';
  images = [
    { src: './assets/DSC06482 2.svg' },
    { src: './assets/DSC06711 2.svg' },
    { src: './assets/DSC06663 2.svg' },
    { src: './assets/DSC06492 2.svg' },
    { src: './assets/DSC06760 2.svg' }
  ];
  imagesSec = [
    { src: './assets/DSC06549 1.svg' },
    { src: './assets/DSC06590 1.svg' },
    { src: './assets/DSC06760 1.svg' },
    { src: './assets/DSC06601 1.svg' },
    { src: './assets/DSC06448 1.svg' },
    { src: './assets/DSC06667 1.svg' },
    { src: './assets/DSC06546 1.svg' },
    { src: './assets/DSC06724 1.svg' },
    { src: './assets/DSC06501 1.svg' }
  ];

  isImageViewerOpen = false;
  isImageViewerOpen2 = false;
  currentIndex = 0;
  isHomeActive: boolean = true;
  contactActive: boolean = false;

  get currentImage() {
    return this.images[this.currentIndex].src;
  }
  get currentImage2() {
    return this.imagesSec[this.currentIndex].src;
  }

  openImageViewer(index: number) {
    this.currentIndex = index;
    this.isImageViewerOpen = true;
  }
  openImage(index: number) {
    this.currentIndex = index;
    this.isImageViewerOpen2 = true;
  }

  closeImageViewer() {
    this.isImageViewerOpen = false;
  }
  closeImageViewer2() {
    this.isImageViewerOpen2 = false;
  }

  nextImage(event: Event) {
    event.stopPropagation(); // Prevent closing the viewer
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length; // Circular navigation
  }
  nextImage2(event: Event) {
    event.stopPropagation(); // Prevent closing the viewer
    this.currentIndex =
      (this.currentIndex + 1) % this.imagesSec.length; // Circular navigation
  }

  prevImage(event: Event) {
    event.stopPropagation(); // Prevent closing the viewer
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length; // Circular navigation
  }
  prevImage2(event: Event) {
    event.stopPropagation(); // Prevent closing the viewer
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.imagesSec.length; // Circular navigation
  }

  onLinkClick(link: string): void {
    // Reset active states
    this.isHomeActive = false;
    this.contactActive = false;
    // Set the active state for the clicked link
    if (link === 'home') {
      this.isHomeActive = true;
    } else {
      this.contactActive = true;
    }
  }
}
