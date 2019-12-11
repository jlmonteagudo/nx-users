import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { UsersService, User, PaginatedData } from '@users/data-access';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

const DEFAULT_PAGE_INDEX = 0;
const DEFAULT_PAGE_SIZE = 5;

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit  {

  users$: Observable<PaginatedData<User>>;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];

  pageIndex = DEFAULT_PAGE_INDEX;
  pageSize = DEFAULT_PAGE_SIZE;
  sortField: string;
  sortDirection: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.users$ = this.usersService.findPaginated(this.pageIndex + 1 , this.pageSize, this.sortField, this.sortDirection);
  }

  onPage($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.loadData();
  }

  onSortChange($event) {
    this.sortField = $event.active;
    this.sortDirection = $event.direction;
    this.loadData();
  }

}
