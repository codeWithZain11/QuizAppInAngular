import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  
  ngOnInit(): void {
    this.setBackground();
  }

  setBackground() {
    const backgroundContainer = document.querySelector('.background-container');
    if (backgroundContainer) {
      backgroundContainer.setAttribute('style', "background-image: url('assets/Screenshot.jpg');");
      backgroundContainer.setAttribute('style', `
        background-image: url('assets/Screenshot.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        min-height: 10vh;
        max-height : 30vh;
        color : white;
      `);
    }
  }

}
