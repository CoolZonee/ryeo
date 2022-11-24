import { Component } from '@angular/core';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent {
  categories = [
    { name: 'All', link: '/home' },
    { name: 'Category1', link: '/category1' },
    { name: 'Category2', link: '/category2' },
    { name: 'Category3', link: '/category3' },
    { name: 'Category4', link: '/category4' },
  ]
}
