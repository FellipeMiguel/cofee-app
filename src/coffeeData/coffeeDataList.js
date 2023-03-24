import latte from "../assets/coffees/latte.png";
import arabe from "../assets/coffees/arabe.png";
import cubano from "../assets/coffees/cubano.png";
import irlandes from "../assets/coffees/irlandes.png";
import havaiano from "../assets/coffees/havaiano.png";
import tradicional from "../assets/coffees/tradicional.png";
import americano from "../assets/coffees/americano.png";
import capuccino from "../assets/coffees/capuccino.png";
import macchiato from "../assets/coffees/macchiato.png";
import mocaccino from "../assets/coffees/mocaccino.png";
import cafe_gelado from "../assets/coffees/gelado.png";
import cafe_com_leite from "../assets/coffees/leite.png";
import expresso_cremoso from "../assets/coffees/cremoso.png";
import chocolate_quente from "../assets/coffees/chocolate.png";

const CoffeeData = [
  {
    id: "1",
    title: "Expresso Tradicional",
    tags: ["Tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    srcImg: tradicional,
    price: "9,90",
  },
  {
    id: "2",
    title: "Expresso Americano",
    tags: ["Traditional"],
    description: "Diluted espresso, Expresso diluído, menos intenso que o tradicional",
    srcImg: americano,
    price: "9,90",
  },
  {
    id: "3",
    title: "Expresso Cremoso",
    tags: ["Traditional"],
    description: "Café expresso tradicional com espuma cremosa",
    srcImg: expresso_cremoso,
    price: "9,90",
  },
  {
    id: "4",
    title: "Expresso Gelado",
    tags: ["Traditional", "gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    srcImg: cafe_gelado,
    price: "9,90",
  },
  {
    id: "5",
    title: "Café com Leite",
    tags: ["Traditional", "com leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    srcImg: cafe_com_leite,
    price: "9,90",
  },
  {
    id: "6",
    title: "Latte",
    tags: ["Traditional", "com leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    srcImg: latte,
    price: "9,90",
  },
  {
    id: "7",
    title: "Capuccino",
    tags: ["Traditional", "com leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    srcImg: capuccino,
    price: "9,90",
  },
  {
    id: "8",
    title: "Macchiato",
    tags: ["Traditional", "With milk"],
    description:
      "Espresso coffee mixed with a little hot milk and foam",
    srcImg: macchiato,
    price: "9,90",
  },
  {
    id: "9",
    title: "Moccacino",
    tags: ["Traditional", "com leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    srcImg: mocaccino,
    price: "9,90",
  },
  {
    id: "10",
    title: "Chocolate Quente",
    tags: ["ESpecial", "com leite"],
    description: "Drink made with chocolate dissolved in hot milk and coffee",
    srcImg: chocolate_quente,
    price: "9,90",
  },
  {
    id: "11",
    title: "Cubano",
    tags: ["Especial", "alcoólico", "gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    srcImg: cubano,
    price: "9,90",
  },
  {
    id: "12",
    title: "Havaiano",
    tags: ["eSpecial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    srcImg: havaiano,
    price: "9,90",
  },
  {
    id: "13",
    title: "Árabe",
    tags: ["eSpecial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    srcImg: arabe,
    price: "9,90",
  },
  {
    id: "14",
    title: "Irlandês",
    tags: ["eSpecial", "alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    srcImg: irlandes,
    price: "9,90",
  },
];

export default CoffeeData;
