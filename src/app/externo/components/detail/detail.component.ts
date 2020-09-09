import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { Produto } from '../../components/home/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  produto: Produto;
  produtos: Produto[];
  constructor(
    private route_active: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtos = [
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
      },
      {
        id: 4,
        nome: 'Processador',
        preco: '627,00',
        estoque: 4,
        imagem: 'https://www.oceanoinformatica.com.br/media/catalog/product/cache/1/thumbnail/2000x2000/9df78eab33525d08d6e5fb8d27136e95/2/0/20000000170707844AF.jpg',
        favorito: false,
      },
      {
        id: 5,
        nome: 'Monitor',
        preco: '199,85',
        estoque: 4,
        imagem: 'https://images7.kabum.com.br/produtos/fotos/103167/monitor-games-asus-49-super-ultrawide-curvo-hdmi-display-port-freesync-2-hdr-144-hz-xg49vq_monitor-games-asus-49-super-ultrawide-curvo-hdmi-display-port-freesync-2-hdr-144-hz-xg49vq_1565705826_g.jpg',
        favorito: false,
      },
      {
        id: 6,
        nome: 'Memória 8GB',
        preco: '399,85',
        estoque: 4,
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_663630-MLA32170094257_092019-O.jpg',
        favorito: false,
      },
      {
        id: 7,
        nome: 'SSD 240GB',
        preco: '175,00',
        estoque: 4,
        imagem: 'https://content.crucial.com/content/dam/crucial/ssd-products/p1/images/awards/product/crucial-p1-ssd-relaxedtech-highly-recommended-gallery-image.psd.transform/medium-png/image.png',
        favorito: false,
      },
      {
        id: 8,
        nome: 'HD 1TB',
        preco: '182,99',
        estoque: 4,
        imagem: 'https://img.terabyteshop.com.br/produto/g/hd-seagate-barracuda-st1000dm010-1tb-7200rpm-64mb-sata-iii_36317.jpg',
        favorito: false,
      },
    ]
    console.log(this.route_active.snapshot.paramMap.get('id'));
    for (let i = 0; i < this.produtos.length; i++){
      if (this.produtos[i].id === parseInt(this.route_active.snapshot.paramMap.get('id'))){
        this.produto = this.produtos[i];
      }
    }
  }
  
  voltar(): void {
    this .router.navigateByUrl('/');
  }

}
