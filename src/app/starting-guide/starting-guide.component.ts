import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartingGuideService } from './starting-guide.service';
import { StepsStartingGuideModel } from './steps/steps.starting-guide';

@Component({
  selector: 'ambar-starting-guide',
  templateUrl: './starting-guide.component.html',
  styleUrls: ['./starting-guide.component.scss'],
})
export class StartingGuideComponent implements OnInit, OnDestroy {
  steps$ = this.startingGuideService.steps$;
  constructor(private startingGuideService: StartingGuideService) {}

  ngOnInit(): void {
    this.steps$.subscribe((val) => {
      console.log(val);
    });
  }
  ngOnDestroy(): void {
    this.startingGuideService.deleteSteps();
  }
}
