import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrandsService } from '../../../brands/services/brands.service';
import { MenuItem } from '../../../brands/interfaces/brands';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit{

  constructor(
    private brandsServices: BrandsService,
    private cd: ChangeDetectorRef,
  ){}

  public brandsFooters: MenuItem[] = [];


  ngOnInit(): void {
    this.getBrandsFooter();
  }

  getBrandsFooter(): void{
    this.brandsServices.getBrandsFilters().subscribe(
      (brands) => {
        this.brandsFooters = [...brands].slice(0, 4);
        console.log(this.brandsFooters);
        this.cd.markForCheck();
      }
    )
  }

}
