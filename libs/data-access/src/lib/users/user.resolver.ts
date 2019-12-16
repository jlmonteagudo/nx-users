import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { User } from './user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private usersService: UsersService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.usersService.findOne(id).pipe(
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
