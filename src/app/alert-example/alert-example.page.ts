import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.page.html',
  styleUrls: ['./alert-example.page.scss'],
})
export class AlertExamplePage {

  option = {
    slidesPerView: 1.4,
    spaceBetween: 0,
    centeredSlides: true,
  };

  constructor() {}

}