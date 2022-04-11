import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { StartingGuideService } from '../starting-guide.service';
import { StepsStartingGuideModel } from '../steps/steps.starting-guide';

@Component({
  selector: 'ambar-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
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
export class QuestionsComponent implements OnInit {
  steps$ = this.startingGuideService.steps$;
  constructor(private startingGuideService: StartingGuideService) {}

  ngOnInit(): void {}
  selectOption(option: StepsStartingGuideModel) {
    console.log(option);

    option?.children && this.startingGuideService.nextStep(option.children[0]);
  }
}
