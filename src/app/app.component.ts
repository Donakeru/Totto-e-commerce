import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


//Components
import { HeaderComponent } from './components/header/header.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SearcherComponent,
    UserMenuComponent,
    HomeComponent,
    ProductCardComponent,
    CatalogueComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'totto-commerce';
}
