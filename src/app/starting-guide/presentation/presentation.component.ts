import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { StartingGuideService } from '../starting-guide.service';

@Component({
  selector: 'ambar-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class PresentationComponent implements OnInit {
  constructor(private startingGuideService: StartingGuideService) {}

  ngOnInit(): void {}
  start() {
    this.startingGuideService.sendStep();
  }
}
