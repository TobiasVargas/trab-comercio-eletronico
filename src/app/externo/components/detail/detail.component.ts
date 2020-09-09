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
    this.produtos = [
      {
        id: 1,
        nome: 'PC Gamer',
        preco: '3152,76',
        estoque: 8,
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_687149-MLB31044647045_062019-O.webp',
        favorito: true,
        fotos: [
          'https://http2.mlstatic.com/D_NQ_NP_926618-MLB31044645131_062019-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_635033-MLB31044636491_062019-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_735902-MLB31044636990_062019-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_635033-MLB31044636491_062019-O.webp',
        ],
        marca: 'Pc Shopping',
        modelo: 'A6 7480',
        descricao: 'PC Gamer Completo, pronto para uso. Acompanha Monitor Led 20 Polegadas Teclado Mouse e Headset Gamer. Computador Gamer Montado e instalado por equipe técnica qualificada . Pronto para uso,produto acompanha todas as embalagens originais.'
      },
  
      {
        id: 2,
        nome: 'Mousepad',
        preco: '139,00',
        estoque:7,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/1540322/5/1540322588_1SZ.jpg',
        favorito: true,
        fotos: [
          'https://images-americanas.b2w.io/produtos/01/00/img/1540322/5/1540322588_2SZ.jpg',
          'https://images-americanas.b2w.io/produtos/01/00/img/1540322/5/1540322588_3SZ.jpg',
          'https://images-americanas.b2w.io/produtos/01/00/img/1540322/5/1540322588_4SZ.jpg',
        ],
        marca: 'Gshield',
        modelo: 'Tech Grip',
        descricao: 'Movimente o seu mouse com precisão e segurança sem perder a sensibilidade! O Tech Grip garante um meneio perfeito durante as partidas graças à superfície de tecido texturizado e a base de material antiderrapante.'
      },
  
      {
        id: 3,
        nome: 'Memória Ram',
        preco: '349,00',
        estoque: 9,
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/1869843/8/1869843899_1SZ.jpg',
        favorito: true,
        fotos: [
          'https://images-americanas.b2w.io/produtos/01/00/img/1869843/8/1869843899_2SZ.jpg',
          'https://images-americanas.b2w.io/produtos/01/00/img/1869843/8/1869843899_3SZ.jpg',
          'https://images-americanas.b2w.io/produtos/01/00/img/1869843/8/1869843899_4SZ.jpg',
        ],
        marca: 'Kingston ',
        modelo: 'HyperX',
        descricao: 'A Memória RAM HyperX FURY DDR4 apresenta um visual incrível com um dissipador de calor atualizado. '
      },
  
      {
        id: 4,
        nome: 'Processador',
        preco: '4095,00',
        estoque: 2,
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_856676-MLA43024199069_082020-O.webp',
        favorito: true,
        fotos: [
          'https://http2.mlstatic.com/D_NQ_NP_773633-MLA43024141227_082020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_795186-MLA43024199071_082020-O.webp',
          'https://t2.tudocdn.net/522737?w=1200&h=675',
        ],
        marca: 'Intel',
        modelo: 'Core i9 10900F',
        descricao: 'Executa com rapidez e eficiência cualquer tipo de programa sem afetar o funcionamento total do dispositivo, rendimento assegurado. Conta com Hyper-Threading que favorece a execução de programas em simultáneo, ao dividir o processador físico em dois processadores lógicos.'
      },
  
      {
        id: 5,
        nome: 'Placa de Vídeo',
        preco: '11998,00',
        estoque: 3,
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_952011-MLB43301443261_082020-O.webp',
        favorito: true,
        fotos: [
          'https://http2.mlstatic.com/D_NQ_NP_706836-MLB43301434538_082020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_919703-MLB43301429665_082020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_860902-MLB43301449143_082020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_615981-MLB43301438493_082020-O.webp',
        ],
        marca: 'NVidia',
        modelo: 'Asus Rog Strix',
        descricao: 'PLACA DE VÍDEO ASUS ROG STRIX GEFORCE RTX 2080 TI A GeForce® RTX 2080 Ti é equipada com a nova arquitetura NVIDIA Turing™ para oferecer a você novos e incríveis níveis de realismo, velocidade, eficiência energética e imersão nos games. Essa é a reinvenção dos gráficos.'
      },
  
      {
        id: 6,
        nome: 'HeadSet',
        preco: '158,89',
        estoque: 8,
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_714991-MLA42904705562_072020-O.webp',
        favorito: true,
        fotos: [
          'https://http2.mlstatic.com/D_NQ_NP_962193-MLA42904705563_072020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_875486-MLA42904705564_072020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_754334-MLA42904588779_072020-O.webp',
        ],
        marca: 'Warrior',
        modelo: 'Rama PH219',
        descricao: 'Experimente a adrenalina de mergulhar na cena de outra maneira! Ter fones de ouvido específicos para jogos muda completamente sua experiência em cada jogo. Com os Warrior Rama, você não perde nenhum detalhe e ouve o áudio como ele foi projetado pelos criadores. Sendo headset, você poderá ouvir suas músicas favoritas, manter ligações e jogar on-line sem perder nenhum detalhe.'
      },
  
      {
        id: 7,
        nome: 'Teclado',
        preco: '250,00',
        estoque: 2,
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_801873-MLA43295550634_082020-O.webp',
        favorito: true,
        fotos: [
          'https://http2.mlstatic.com/D_NQ_NP_903119-MLA43295532717_082020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_743108-MLA43295550636_082020-O.webp',
        ],
        marca: 'Philips',
        modelo: 'SPK8614',
        descricao: 'Este teclado Philips de alto desempenho permite que você desfrute de horas ilimitadas de jogos. Foi especialmente desenvolvido para que você possa expressar suas habilidades e seu estilo. Melhore a sua experiência de jogo, seja você só um amador ou todo um especialista, e faça que suas jogadas atingam outro nível.'
      },
  
      {
        id: 8,
        nome: 'Mouse',
        preco: '44,99',
        estoque: 4,
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_952334-MLB43155044491_082020-O.webp',
        favorito: true,
        fotos: [
          'https://http2.mlstatic.com/D_NQ_NP_760863-MLB43155038572_082020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_995825-MLB41473157742_042020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_767675-MLB41473150898_042020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_643521-MLB41473150981_042020-O.webp',
        ],
        marca: 'Evolut',
        modelo: 'Rayden EG-104RB',
        descricao: 'O Rayden possui iluminação LED com cores vibrantes que se alternam em um efeito fantástico. Formato projetado para ser totalmente anatômico, proporcionando muito conforto para longas horas de game e agradando até os jogadores mais exigentes!'
      },
  
      {
        id: 9,
        nome: 'Gabinete',
        preco: '270,13',
        estoque: 2,
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_982573-MLB40607882960_012020-O.webp',
        favorito: true,
        fotos: [
          'https://http2.mlstatic.com/D_NQ_NP_640526-MLB40607882958_012020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_682429-MLB40607882956_012020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_891563-MLB40607882954_012020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_919501-MLB40607882955_012020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_754924-MLB40607882957_012020-O.webp',
        ],
        marca: 'Pichau',
        modelo: 'Pichau Gaming PGK-01-RGB',
        descricao: 'O gabinete Komor foi inspirado na raça de pombos Komorn. O design deste gabinete foi pensado para agradar a todos os gamers, seja qual for seu estilo. Com traços minimalistas e cortes bem desenhados este gabinete fará a diferença no seu setup. Além de tampa lateral de vidro e aço de excelente qualidade.'
      },
  
      {
        id: 10,
        nome: 'PC Gamer',
        preco: '2999,99',
        estoque: 9,
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_993770-MLB43332407145_092020-O.webp',
        favorito: true,
        fotos: [
          'https://http2.mlstatic.com/D_NQ_NP_896902-MLB43332407144_092020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_899399-MLB43332377742_092020-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_618435-MLB31070526595_062019-O.webp',
        ],
        marca: 'Kalex',
        modelo: 'KLX GAMER',
        descricao: 'Computador Gamer Excelente para RODAR VÁRIOS OS GAMES ATUAIS. Games como Fortnite, CSGO, Overwatch, Minecraft'
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
