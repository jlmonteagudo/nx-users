import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSnackbarService } from '@users/ui/components';
import { UserService, User } from '@users/data-access';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(private userService: UserService,
    private appSnackbarService: AppSnackbarService,
    private router: Router) { }

  ngOnInit() {
  }

  onSave(user: User) {
    this.userService.insert(user).subscribe(
      () => {
        this.appSnackbarService.info('User has been created');
        this.router.navigate(['/users']);
      },
      (error) => {
        this.appSnackbarService.error('Error creating the user:\n' + error.message)
      });

  }

}
