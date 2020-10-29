import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];
  constructor() { }

  ngOnInit(): void {
  }

}
