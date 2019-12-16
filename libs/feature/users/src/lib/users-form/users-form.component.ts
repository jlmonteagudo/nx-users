import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '@users/data-access';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  @Input() user: User;
  @Output() save: EventEmitter<User> = new EventEmitter<User>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.userForm = this.fb.group({
      username: [this.user && this.user.username, [Validators.required, Validators.maxLength(15)]],
      name: [this.user && this.user.name, [Validators.required, Validators.maxLength(150)]],
      email: [this.user && this.user.email, [Validators.email, Validators.maxLength(30)]],
      phone: [this.user && this.user.phone, [Validators.maxLength(30)]],
      website: [this.user && this.user.website, [Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/), Validators.maxLength(250)]],
    });

  }

  onSubmit() {
    const user: User = this.userForm.value;
    this.save.emit(user);
  }

}
