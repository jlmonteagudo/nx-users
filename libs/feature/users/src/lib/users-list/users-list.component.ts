import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UsersListDataSource } from './users-list-datasource';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { User, UsersService } from '@users/data-access';
import { AppSnackbarService } from '@users/ui/components';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<User>;

  searchField = new FormControl();
  dataSource: UsersListDataSource;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];

  constructor(private userService: UsersService, private appSnackbarService: AppSnackbarService) {}

  ngOnInit() {
    this.dataSource = new UsersListDataSource(this.userService, this.appSnackbarService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterByName = this.searchField.valueChanges.pipe(debounceTime(300));
    this.table.dataSource = this.dataSource;
  }

}
