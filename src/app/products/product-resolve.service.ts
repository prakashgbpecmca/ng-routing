import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductResolved } from './product';
import { ProductService } from './product.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<ProductResolved> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
    // ActivatedRouteSnapshot contains the information about the currently activated route
    // RouterStateSnapshot represent the state of the appcation router at the momment in time
    const id  =  +route.paramMap.get('id');
    if (isNaN(id)) {
      const message = '';
      console.log(message);
      return of({product: null, error: message});
    }
    return this.productService.getProduct(id)
               .pipe(
                 map(product => ({product: product})),
                 catchError(error => {
                   const message = `Retrieval error: ${error}`;
                   console.log(message);
                   return of({product: null, error: message});
                 })
               );
  }
}
