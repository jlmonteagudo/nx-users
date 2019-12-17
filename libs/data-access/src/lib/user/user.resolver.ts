import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.userService.findOne(id).pipe(
      take(1),
      mergeMap(user => {
        if (user) {
          return of(user);
        } else {
          this.router.navigate(['/users']);
          return EMPTY;
        }
      })
    );

  }
}
