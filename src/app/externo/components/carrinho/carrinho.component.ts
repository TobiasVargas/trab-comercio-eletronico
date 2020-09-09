import { Component, OnInit } from '@angular/core';
import { Produto } from '../home/product.model';
import { ProdutoCarrinho } from './produtoCarrinho.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtos_do_carrinho: ProdutoCarrinho[];
  displayedColumns: string[] = ['produto', 'valor_unitario', 'quantidade', 'subtotal', 'acoes'];
  dataSource;
  constructor() { }

  ngOnInit(): void {
    this.produtos_do_carrinho = [
      {
        id: 1,
        nome: 'PC Gamer',
        preco_unitario: '3152,76',
        quantidade: 1,
        subtotal: '3152,76',
      },
      {
        id: 2,
        nome: 'Mousepad',
        preco_unitario: '139,00',
        quantidade: 1,
        subtotal: '139,00',
      },
      {
        id:3,
        nome: 'Memória Ram',
        preco_unitario: '349,00',
        quantidade: 2,
        subtotal: '698',
      }
    ]
    this.dataSource = this.produtos_do_carrinho;
  }

}
