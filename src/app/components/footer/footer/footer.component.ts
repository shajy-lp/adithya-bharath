import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  navigate(){
    window.open('https://www.instagram.com/stylewithbharath/profilecard/?igsh=ZGtoMDR5dnd3MWh3');
  }
}
