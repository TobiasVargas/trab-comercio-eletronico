import { Component, OnInit } from '@angular/core';
import { Produto } from '../home/product.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtos_do_carrinho: Produto[];
  displayedColumns: string[] = ['produto', 'valor_unitario', 'quantidade', 'subtotal', 'acoes'];
  dataSource;
  constructor() { }

  ngOnInit(): void {
    this.produtos_do_carrinho = [
      {
        id: 1,
        nome: 'PC Gamer',
        preco: '3654,00',
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg',
        favorito: true,
      },
      {
        id: 2,
        nome: 'Teclado',
        preco: '199,85',
        estoque: 4,
        imagem: 'https://images.tcdn.com.br/img/img_prod/740836/teclado_gamer_pcfort_especial_para_jogos_3449_6_20200812083308.jpg',
        favorito: false,
      },
      {
        id: 3,
        nome: 'Headset',
        preco: '186,15',
        estoque: 4,
        imagem: 'https://http2.mlstatic.com/fone-de-ouvido-pra-informatica-jogos-e-video-chamada-barato-D_NQ_NP_818473-MLB31672869742_082019-F.webp',
        favorito: true,
      }
    ]
    this.dataSource = this.produtos_do_carrinho;
  }

}
