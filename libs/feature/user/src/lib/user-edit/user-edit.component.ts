import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, User } from '@users/data-access';
import { AppSnackbarService } from '@users/ui/components';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(private userService: UserService,
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
    this.userService.update(updatedUser).subscribe(
      () => {
        this.appSnackbarService.info('User has been updated');
        this.router.navigate(['/users']);
      },
      (error => this.appSnackbarService.error(`Error updating the user`))
    );

  }

}
