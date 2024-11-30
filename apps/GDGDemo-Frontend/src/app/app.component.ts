import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MenuComponent } from '@gdgdemo/menu';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MenuComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GDGDemo-Frontend';
}
