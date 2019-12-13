import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, switchMap, startWith, tap, catchError } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { User, UsersService, PaginatedData, UserQuery } from '@users/data-access';
import { AppSnackbarService } from '@users/ui/components';

export class UsersListDataSource extends DataSource<User> {

  paginator: MatPaginator;
  sort: MatSort;
  filterByName: Observable<string>;

  count = 0;
  isLoading = false;

  constructor(private usersService: UsersService, private appSnackbarService: AppSnackbarService) {
    super();
  }

  connect(): Observable<User[]> {

    const dataMutations = [
      this.paginator.page.pipe(startWith(null)),
      this.sort.sortChange.pipe(startWith(null)),
      this.filterByName.pipe(
        startWith(''),
        tap(() => this.paginator.pageIndex = 0)
      )
    ];

    return combineLatest(dataMutations).pipe(
      tap(() => this.isLoading = true),
      switchMap(this.findUsers.bind(this)),
      tap(() => this.isLoading = false),
      map((userData: PaginatedData<User>) => {
        this.count = userData.count;
        return userData.data;
      })
    );

  }

  disconnect() {}

  private findUsers([page, sort, filter]): Observable<PaginatedData<User>> {

    const query: UserQuery = {
      filter: '' + filter,
      pageIndex: this.paginator.pageIndex + 1,
      pageSize: this.paginator.pageSize,
      sortField: this.sort.active,
      sortDirection: this.sort.direction
    }

    return this.usersService.findPaginated(query).pipe(
      catchError(this.handleError.bind(this))
    );

  }

  private handleError(err: any) {
    const errorMessage = (err.error instanceof ErrorEvent) ? `An error occurred: ${err.error.message}` : err.message;
    this.appSnackbarService.errorNoIcon(errorMessage);
    return of({});
  }

}
