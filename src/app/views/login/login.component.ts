import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {} from '@angular/router';

@Component({
  selector: 'login',
  template: `
    <h1>Delete</h1>
    <div>Are you sure u want to delete {{ id }} order? <button (click)="deleteorder(id)">Delete</button></div>
  `,
})
export class LoginViewComponent implements OnInit {
  id: number;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('orderId');
      console.log('1', this.id);
    });
    if (this.id == 0) {
      this.route.queryParams.subscribe((params) => {
        this.id = +params['orderId'];
        console.log('2', this.id);
      });
    }
  }

  deleteorder(orderId: number) {
    console.log(orderId);
    this.http
      .delete<any[]>('http://localhost:8000/api/orders/' + this.id)
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigate(['/list']);
  }
}
