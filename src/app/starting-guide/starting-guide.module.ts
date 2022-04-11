import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StartingGuideComponent } from './starting-guide.component';
import { StartingGuideService } from './starting-guide.service';
import { PresentationComponent } from './presentation/presentation.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    StartingGuideComponent,
    PresentationComponent,
    QuestionsComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: StartingGuideComponent }]),
  ],
  providers: [StartingGuideService],
})
export class StartingGuideModule {}
