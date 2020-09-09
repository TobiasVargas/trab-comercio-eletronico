import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./externo/components/home/home.component";
import { DetailComponent } from './externo/components/detail/detail.component';
import { CarrinhoComponent } from './externo/components/carrinho/carrinho.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produto/:id",
    component: DetailComponent
  },
  {
    path: "carrinho",
    component: CarrinhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}