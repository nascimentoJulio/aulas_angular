import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Product {
  id: number, 
  title: string 
  price: number, 
  description: string,
  category: string, 
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  getProduts(): Observable<HttpResponse<Product[]>> {
    return this.httpClient.get<Product[]>("https://fakestoreapi.com/products", {observe: 'response'})
  }
}
