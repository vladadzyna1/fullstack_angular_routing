import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  template: `
  <h1>Add</h1>
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
  <table>
      <thead >
      <tr >
        <th scope="row" >
            <select name="client_id" formControlName="client_id">
                <option value="">Оберіть клієнта</option>
                <option *ngFor="let client of clients" 
                  [value]="client.id">{{client.id}}
                </option>
            </select>
        </th>
        <td class="px-6 py-4">
            <input type="date" placeholder="order_date" formControlName="order_date" name="order_date" >
        </td>
        <td class="px-6 py-4">
            <input type="date" placeholder="payment_date" formControlName="payment_date" name="payment_date" >
        </td>
        <td class="px-6 py-4">
            <input type="text" placeholder="payment_amount"  formControlName="payment_amount" name="payment_amount" >
        </td>
        <td class="px-6 py-4">
            <button type="submit" >Add</button>
        </td>
      </tr>
      </thead>
    </table>
  </form>
  <!-- <div>{{this.form | json}}</div> -->
  `,
})
export class CatalogViewComponent implements OnInit {
  clients: any = [];
  form: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      client_id: ['', Validators.required],
      order_date: ['', Validators.required],
      payment_date: ['', Validators.required],
      payment_amount: ['', Validators.required],
    });
    this.updateClients();
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      const formData = {
        client_id: this.form.get('client_id').value,
        order_date: this.form.get('order_date').value,
        payment_date: this.form.get('payment_date').value,
        payment_amount: this.form.get('payment_amount').value,
      };
      console.log(formData)
      const formDataJson = JSON.stringify(formData);

      this.http
        .post<any[]>('http://localhost:8000/api/orders', formDataJson)
        .subscribe((data) => {
          console.log(data);
        });
      this.router.navigate(['/list']);
    } else {
      alert('Not valid');
    }
  }

  updateClients() {
    this.http
      .get<any[]>('http://localhost:8000/api/clients')
      .subscribe((data) => {
        console.log(data);
        this.clients = data;
      });
  }
}
