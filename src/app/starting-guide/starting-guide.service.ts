import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  ResultTypes,
  StepsStartingGuideModel,
  STEPS_STARTING_GUIDE,
} from './steps/steps.starting-guide';

@Injectable({
  providedIn: 'root',
})
export class StartingGuideService {
  steps$: BehaviorSubject<StepsStartingGuideModel | undefined> =
    new BehaviorSubject<StepsStartingGuideModel | undefined>(undefined);
  constructor() {}
  sendStep(step = STEPS_STARTING_GUIDE) {
    this.steps$.next(step);
  }
  nextStep(option: StepsStartingGuideModel) {
    console.log(option);
    this.sendStep(option);
  }
  deleteSteps() {
    this.steps$.next(undefined);
  }
  findPremises(result: ResultTypes) {
    STEPS_STARTING_GUIDE;
  }
}
