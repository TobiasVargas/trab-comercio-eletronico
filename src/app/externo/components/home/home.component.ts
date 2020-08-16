import { Component, OnInit } from '@angular/core';
import { Produto } from './product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jogos: string[];
  produtos: Produto[];

  constructor() {
    this.jogos = [
      'Minecraft',
      'Fortnite',
      'Counter Strike Global Offensive',
      'GTA IV',
      'GTA V',
      'Overwatch',
      'League of Legends',
      'Fifa 18',
      'Dota 2',
      'Dirt 3'
    ]

    this.produtos = [
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      },
      {
        nome: 'PC Gamer',
        preco: 200,
        estoque: 4,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/46289/5/46289505_1GG.jpg'
      }
    ]
  }

  ngOnInit(): void {
  }

}
