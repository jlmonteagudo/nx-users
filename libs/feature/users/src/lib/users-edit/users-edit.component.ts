import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService, User } from '@users/data-access';
import { AppSnackbarService } from '@users/ui/components';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  user: User;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router,
              private appSnackbarService: AppSnackbarService) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.user = data.user;
    });
  }

  onSave(updatedUser: User) {

    updatedUser.id = this.user.id;
    this.usersService.update(updatedUser).subscribe(
      () => {
        this.appSnackbarService.info('User has been updated');
        this.router.navigate(['/users']);
      },
      (error => this.appSnackbarService.error(`Error updating the user`))
    );

  }

}
