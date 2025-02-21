import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { MenuItem } from '../../interfaces/brands';



@Component({
  selector: 'app-list-brands',
  standalone: true,
  imports: [],
  templateUrl: './listBrands.component.html',
  styleUrl: './listBrands.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBrandsComponent implements OnInit {

  constructor(
    private brandsServices: BrandsService,
    private cd: ChangeDetectorRef,
  ) {}

  public brands: MenuItem[] = [];
  public filters: MenuItem[] = [];
  public isSmallScreen = window.innerWidth < 768;
  public textAscDesc = signal('Descendente');

  ngOnInit(): void {
    this.loadBrandsfilter()
  }

  desc(brands: MenuItem[], filters: MenuItem[]): void {
    let reversed = [...brands].reverse();
    let reversedFilters = [...filters].reverse();
    this.brands = reversed;
    this.filters = reversedFilters;
    this.textAscDesc.update( (value) => value === 'Descendente' ? 'Ascendente' : 'Descendente');
  }

  loadBrandsfilter(): void {
    this.brandsServices.getBrandsFilters().subscribe(
      ( brands) => {
        this.filters = brands;
        this.cd.markForCheck();
      }
    )
  }

  loadBrands(): void {
    this.brandsServices.getBrands().subscribe(
      ( brands ) => {
        this.brands = brands;
        this.cd.markForCheck();
      }
    )
  }


}
