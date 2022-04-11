import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { StartingGuideService } from '../starting-guide.service';

@Component({
  selector: 'ambar-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 150ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ResultComponent implements OnInit {
  steps$ = this.startingGuideService.steps$;
  constructor(private startingGuideService: StartingGuideService) {}

  ngOnInit(): void {}
}
