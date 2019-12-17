import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { User, UserService } from '@users/data-access';
import { UserListDataSource } from './user-list-datasource';
import { AppSnackbarService, AppConfirmationDialogComponent } from '@users/ui/components';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<User>;

  searchField = new FormControl();
  dataSource: UserListDataSource;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website', 'actions'];

  constructor(private userService: UserService,
              private appSnackbarService: AppSnackbarService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new UserListDataSource(this.userService, this.appSnackbarService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterByName = this.searchField.valueChanges.pipe(debounceTime(300));
    this.table.dataSource = this.dataSource;
  }

  onEdit(user: User) {
    this.router.navigate(['edit', user.id], {relativeTo: this.route});
  }

  onDelete(user: User) {

    const dialogRef = this.dialog.open(AppConfirmationDialogComponent, {
      data: 'Do you confirm the deletion of the article?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.deleteArticle(user); }
    });

  }

  deleteArticle(user: User) {
    this.userService.delete('' + user.id).subscribe(
      () => this.appSnackbarService.info('User has been deleted'),
      (error => this.appSnackbarService.error(`Error deleting the user`))
    );
  }

}
