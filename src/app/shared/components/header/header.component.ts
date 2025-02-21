import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthLoginComponent } from "../../../auth/components/authLogin/authLogin.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AuthLoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { }
