import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductResolveService } from './product-resolve.service';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { AuthGuardGuard } from '../user/auth-guard.guard';
import { ProductEditGuardGuard } from './product-edit/product-edit-guard.guard';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'products',
        canActivate: [AuthGuardGuard],
        children: [
          {
            path: '',
            component: ProductListComponent
          },
          {
            path: ':id',
            component: ProductDetailComponent,
            resolve: { resolvedData: ProductResolveService }
          },
          {
            path: ':id/edit',
            component: ProductEditComponent,
            canDeactivate: [ProductEditGuardGuard],
            resolve: { resolvedData: ProductResolveService },
            children: [
              {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full'
              },
              {
                path: 'info',
                component: ProductEditInfoComponent
              },
              {
                path: 'tags',
                component: ProductEditTagsComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ]
})
export class ProductModule {}
