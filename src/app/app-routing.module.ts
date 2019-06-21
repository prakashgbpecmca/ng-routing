import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, PreloadAllModules} from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuardGuard } from './user/auth-guard.guard';
import { SelectiveStrategy } from './selective-preload-strategy.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: 'welcome', component: WelcomeComponent, data: {pageTitle: 'Welcome'}
        },
        {
          path: 'products',
          canActivate: [AuthGuardGuard],
          data: {preload: false},
          loadChildren: './products/product.module#ProductModule',
        },
        {
          path: '', redirectTo: 'welcome', pathMatch: 'full'
        },
        {
          path: '**', component: PageNotFoundComponent
        }
      ],{preloadingStrategy: SelectiveStrategy}
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
