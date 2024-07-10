import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  categories: string[] = [];
  filteredProducts: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data: any[]) => {
      this.products = data;
      this.filteredProducts = data;
    });

    this.dataService.getCategories().subscribe((data: string[]) => {
      this.categories = data;
    });
  }

  onCategoryChange(event: Event): void {
    const category = (event.target as HTMLSelectElement).value;
    if (category) {
      this.dataService.getProductsByCategory(category).subscribe((data: any[]) => {
        this.filteredProducts = data;
      });
    } else {
      this.filteredProducts = this.products;
    }
  }

  viewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }
}


