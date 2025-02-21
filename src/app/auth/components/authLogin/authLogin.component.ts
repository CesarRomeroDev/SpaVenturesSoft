import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [],
  templateUrl: './authLogin.component.html',
  styleUrl: './authLogin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginComponent { }
