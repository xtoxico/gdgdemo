import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  message = '';
  constructor(private http: HttpClient) {
    this.http.get<{message : string}>('/api').subscribe((response) => {
        this.message = response.message;
    });
  }


}
