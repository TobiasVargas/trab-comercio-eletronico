export interface Produto{
    id: number;
    nome: string;
    preco: string;
    estoque: number;
    imagem: string;
    favorito: boolean;
    fotos?: string[];
    marca?: string;
    modelo?: string;
    descricao?: string;
}