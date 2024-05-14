import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  newUser: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }
  formSubmitted: boolean = false;

  onSubmit(): void {
    this.formSubmitted = true;
    console.log(this.newUser);
  }
}
