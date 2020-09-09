import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../components/home/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  ver_carrinho(): void {
    this.router.navigateByUrl('/carrinho');
  }
}
