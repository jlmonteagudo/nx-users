import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, switchMap, startWith, tap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { User, UsersService, PaginatedData, UserQuery } from '@users/data-access';

export class UsersListDataSource extends DataSource<User> {

  private count = 0;
  private isLoading = false;

  paginator: MatPaginator;
  sort: MatSort;
  filterByName: Observable<string>;

  constructor(private usersService: UsersService) {
    super();
  }

  connect(): Observable<User[]> {

    const dataMutations = [
      this.paginator.page.pipe(startWith(null)),
      this.sort.sortChange.pipe(startWith(null)),
      this.filterByName.pipe(startWith(''))
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

    return this.usersService.findPaginated(query)

  }

}
