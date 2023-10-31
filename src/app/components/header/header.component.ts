import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from '../searcher/searcher.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    SearcherComponent,
    UserMenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

}
