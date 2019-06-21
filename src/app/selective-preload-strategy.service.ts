import { Injectable } from "@angular/core";
import { Route, PreloadingStrategy } from "@angular/router";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SelectiveStrategy implements PreloadingStrategy {
  preload(route: Route, fn: Function): Observable<any> {
    if (route.data["preload"]) {

      return fn();
    }
    return of(null);
  }
}
