import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {mockProducts} from "../state/mock-products";
import {Product} from "../../models/product.model";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsUrl =
    'https://localhost:9002/occ/v2/products';

  constructor(private http: HttpClient) {
    // this.getConfig().subscribe(x=>console.log(x));
  }

  getConfig() {
    return this.http.get(this.productsUrl);
  }

  getProduct(productCode: string): Product {
    return mockProducts.filter(p => p.id === productCode)[0];
  }
}
