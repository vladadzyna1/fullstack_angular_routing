import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  template: `
    <div>
      <h1>List</h1>
      <div id="asd">
      <div *ngFor="let order of orders">
        <h2>{{ order.id }} ClientId: {{ order.client_id }}</h2>
        <p>OrderDate: {{ order.order_date }}</p>
        <p>TotalOrderQuantity: {{ order.total_order_quantity }}</p>
        <p>TotalOrderCost: {{ order.total_order_cost }}</p>
        <p>payment_date: {{ order.payment_date }}</p>
        <p>payment_amount: {{ order.payment_amount }}</p>

        <a routerLink="/delete/{{ order.id }}">Delete</a>
        <button (click)="onDelete(order.id)">Delete</button>
      </div>
      </div>
    </div>
  `,
})
export class HomeViewComponent implements OnInit {
  orders: any[] = [{ title: 'asd', text: 'qwe' }];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http
      .get<any[]>('http://localhost:8000/api/orders')
      .subscribe((data) => {
        this.orders = data;
      });
  }

  onDelete(id) {
    this.router.navigate(['/delete/'], { queryParams: { orderId: id } });
  }
}
