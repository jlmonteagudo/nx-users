import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersService, User, PaginatedData } from '@users/data-access';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

const DEFAULT_PAGE_INDEX = 0;
const DEFAULT_PAGE_SIZE = 5;

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  users$: Observable<PaginatedData<User>>;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  pageIndex = DEFAULT_PAGE_INDEX;
  pageSize = DEFAULT_PAGE_SIZE;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.loadData(DEFAULT_PAGE_INDEX + 1, DEFAULT_PAGE_SIZE);
  }

  onPage($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.loadData($event.pageIndex + 1, $event.pageSize);
  }

  loadData(page: number, limit: number) {
    this.users$ = this.usersService.findPaginated(page, limit);
  }

}
