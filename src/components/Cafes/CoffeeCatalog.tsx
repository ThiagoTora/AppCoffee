import Tradicional from "../../assets/Expresso Tradicional.svg";
import Americano from "../../assets/Expresso Americano.svg";
import Cremoso from "../../assets/Expresso Cremoso.svg";
import Gelado from "../../assets/Expresso Gelado.svg";
import CaféCL from "../../assets/Café com Leite.svg";
import Latte from "../../assets/Latte.svg";
import Capuccino from "../../assets/Capuccino.svg";
import Macchiato from "../../assets/Macchiato.svg";
import Mocaccino from "../../assets/Macaccino.svg";
import ChocolateQ from "../../assets/Chocolate Quente.svg";
import Cubano from "../../assets/Cubano.svg";
import Havaiano from "../../assets/Havaiano.svg";
import Arabe from "../../assets/Arabe.svg";
import Irlandes from "../../assets/Irlandes.svg";

export type Cafe = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    tags: string[];
};

export const cafes: Cafe[] = [
    {
        id: 1,
        nome: "Expresso Tradicional",
        descricao: "O tradicional café feito com água quente e grãos moídos",
        preco: 9.9,
        imagem: Tradicional,
        tags: ["Tradicional"],
    },
    {
        id: 2,
        nome: "Expresso Americano",
        descricao: "Expresso diluído, menos intenso que o tradicional",
        preco: 9.9,
        imagem: Americano,
        tags: ["Tradicional"],
    },
    {
        id: 3,
        nome: "Expresso Cremoso",
        descricao: "Café expresso tradicional com espuma cremosa",
        preco: 9.9,
        imagem: Cremoso,
        tags: ["Tradicional"],
    },
    {
        id: 4,
        nome: "Expresso Gelado",
        descricao: "Bebida preparada com café expresso e cubos de gelo",
        preco: 9.9,
        imagem: Gelado,
        tags: ["Tradicional", "Gelado"],
    },
    {
        id: 5,
        nome: "Café com Leite",
        descricao: "Meio a meio de expresso tradicional com leite vaporizado",
        preco: 9.9,
        imagem: CaféCL,
        tags: ["Tradicional", "Com Leite"],
    },
    {
        id: 6,
        nome: "Latte",
        descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        preco: 9.9,
        imagem: Latte,
        tags: ["Tradicional", "Com Leite"],
    },
    {
        id: 7,
        nome: "Capuccino",
        descricao: "Bebida com canela feita de doses iguais de café, leite e espuma",
        preco: 9.9,
        imagem: Capuccino,
        tags: ["Tradicional", "Com Leite"],
    },
    {
        id: 8,
        nome: "Macchiato",
        descricao: "Café expresso misturado com um pouco de leite quente e espuma",
        preco: 9.9,
        imagem: Macchiato,
        tags: ["Tradicional", "Com Leite"],
    },
    {
        id: 9,
        nome: "Mocaccino",
        descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
        preco: 9.9,
        imagem: Mocaccino,
        tags: ["Tradicional", "Com Leite"],
    },
    {
        id: 10,
        nome: "Chocolate Quente",
        descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
        preco: 9.9,
        imagem: ChocolateQ,
        tags: ["Especial", "Com Leite"],
    },
    {
        id: 11,
        nome: "Cubano",
        descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        preco: 9.9,
        imagem: Cubano,
        tags: ["Especial", "Alcoólico", "Gelado"],
    },
    {
        id: 12,
        nome: "Havaiano",
        descricao: "Bebida adocicada preparada com café e leite de coco",
        preco: 9.9,
        imagem: Havaiano,
        tags: ["Especial"],
    },
    {
        id: 13,
        nome: "Árabe",
        descricao: "Bebida preparada com grãos de café árabe e especiarias",
        preco: 9.9,
        imagem: Arabe,
        tags: ["Especial"],
    },
    {
        id: 14,
        nome: "Irlandês",
        descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        preco: 9.9,
        imagem: Irlandes,
        tags: ["Especial", "Alcoólico"],
    },
];
