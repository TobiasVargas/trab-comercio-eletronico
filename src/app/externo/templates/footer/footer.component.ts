import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  ano_atual: number;
  constructor() {
    this.ano_atual = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
