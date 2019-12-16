import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSnackbarService } from '@users/ui/components';
import { UsersService, User } from '@users/data-access';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {

  constructor(private usersService: UsersService,
    private appSnackbarService: AppSnackbarService,
    private router: Router) { }

  ngOnInit() {
  }

  onSave(user: User) {
    this.usersService.insert(user).subscribe(
      () => {
        this.appSnackbarService.info('User has been created');
        this.router.navigate(['/users']);
      },
      (error) => {
        this.appSnackbarService.error('Error creating the user:\n' + error.message)
      });

  }

}
