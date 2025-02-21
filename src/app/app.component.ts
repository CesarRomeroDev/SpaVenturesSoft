import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//components
import { HeaderComponent } from "./shared/components/header/header.component";
import { TableComponent } from "./shared/components/table/table.component";
import { ListCategoryComponent } from "./category/components/listCategory/listCategory.component";
import { ListBrandsComponent } from "./brands/components/listBrands/listBrands.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TableComponent, ListCategoryComponent, ListBrandsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngulaSpa';
}
