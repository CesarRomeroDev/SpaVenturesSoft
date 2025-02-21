import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MenuItem } from '../../interfaces/category';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-list-category',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './listCategory.component.html',
  styleUrl: './listCategory.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCategoryComponent implements OnInit{

  public category: MenuItem[] = [];

  constructor(
    private categoryServices: CategoryService,
    private cd: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.categoryServices.getCategory().subscribe(
      ( category ) => {
        this.category = category;
        this.cd.markForCheck();
      }
    )
  }
}
