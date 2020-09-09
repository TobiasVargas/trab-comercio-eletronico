export interface ProdutoCarrinho {
    id: number;
    nome: string;
    preco_unitario: number;
    quantidade: number;
    subtotal?: number;
}