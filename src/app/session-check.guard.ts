import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from "./services/auth-service.service";

@Injectable({
  providedIn: "root",
})
export class SessionCheckGuard implements CanActivate {
  pass: string;
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.pass = localStorage.getItem("user");
    if (this.pass != null) return true;
    else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
