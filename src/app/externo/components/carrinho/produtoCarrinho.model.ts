export interface ProdutoCarrinho {
    id: number;
    nome: string;
    preco_unitario: string;
    quantidade: number;
    subtotal?: string;
}