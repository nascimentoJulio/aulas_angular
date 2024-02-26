import { Component } from '@angular/core';
import { ApiServiceService, Product } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products!: Product[] | null
  name: string = 'Afonso'

  constructor(private apiService: ApiServiceService) {
    this.apiService.getProduts().subscribe(response => {
        this.products = response.body 
    })
  }
}
