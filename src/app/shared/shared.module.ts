import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [HeaderComponent, SideBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SideBarComponent],
})
export class SharedModule {}
