import burratImg from "@/assets/cardapio/burrata-morro-da-baleia.jpg";
import camaraoImg from "@/assets/cardapio/camarao-sao-jorge.jpg";
import carpaccioImg from "@/assets/cardapio/carpaccio-almecegas-trufado.jpg";
import maytreaImg from "@/assets/cardapio/maytrea-sandwich.jpg";
import fileCarroselImg from "@/assets/cardapio/file-carrosel.jpg";
import brownieImg from "@/assets/cardapio/brownie-cumbaru.jpg";
import crepeImg from "@/assets/cardapio/crepe-barroco.jpg";
import pastelImg from "@/assets/cardapio/pastel-santa-barbara.jpg";
import pescaImg from "@/assets/cardapio/pesca-da-lua.jpg";
import polvoImg from "@/assets/cardapio/polvo-aneci.jpg";
import queijinhoImg from "@/assets/cardapio/queijinho-candaru.jpg";
import ricotaImg from "@/assets/cardapio/ricota-edwalli.jpg";
import risotoImg from "@/assets/cardapio/risoto-veredas.jpg";
import saladaImg from "@/assets/cardapio/salada-amana.jpg";

export interface MenuItem {
  name: string;
  description?: string;
  price: number | string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "entradas",
    title: "Entradas",
    items: [
      { name: "Burrata Morro da Baleia", description: "Burrata cremosa, pesto de barú e tomates confitados na baunilha do cerrado.", price: 89, image: burratImg },
      { name: "Truffle Fries", description: "Batata frita trufada, queijo parmesão ralado e maionese trufada.", price: 50 },
      { name: "Spicy Fries", description: "Batata frita com páprica defumada e pimenta de macaco, acompanhada de molho aioli.", price: 48 },
      { name: "Queijinho Candarú", description: "Queijo gouda empanado acompanhado de chutney de frutas do cerrado levemente apimentado.", price: 68, image: queijinhoImg },
      { name: "Pastel Santa Bárbara", description: "Mini pastéis recheados de queijo Brie e servidos com melaço de cana infusionado na baunilha do cerrado.", price: 68, image: pastelImg },
      { name: "Carpaccio Almécegas Trufado", description: "Carpaccio de carne, molho de mostarda da casa trufado e queijo parmesão ralado.", price: 88, image: carpaccioImg },
      { name: "Camarão São Jorge", description: "Camarão flambado servido com aioli de limão cravo.", price: 118, image: camaraoImg },
      { name: "Isca do Vale", description: "Isca de pescada amarela empanada no panko com barú.", price: 89 },
      { name: "Filézinho Arandú", description: "Cubos de filé mignon grelhado, molho demi-glace, cogumelos e parmesão gratinado.", price: 98 },
      { name: "Ricota Edwalli", description: "Pasta de ricota, baunilha do cerrado e flocos de pimenta calabresa.", price: 69, image: ricotaImg },
      { name: "Torradas dos Altos", description: "Cesta com mix de pães temperados e tostados.", price: 25 },
    ],
  },
  {
    id: "saladas",
    title: "Saladas",
    items: [
      { name: "Salada Kalunga", description: "Alface, queijo parmesão ralado, molho de gergelim Kalunga e croutons.", price: 55 },
      { name: "Salada Amaná", description: "Mix de folhas, tomate, palmito, cenoura, parmesão, batata palha doce e molho de maionese e mostarda.", price: 79, image: saladaImg },
    ],
  },
  {
    id: "sanduiches",
    title: "Sanduíches",
    items: [
      { name: "Maytrea Sandwich", description: "Baguette, parma, brie, rúcula e molho balsâmico, acompanhado de fritas.", price: 69, image: maytreaImg },
      { name: "Cheese Filet", description: "Baguette, tiras de filé mignon grelhado, cebola refogada, queijo e mostarda, acompanhado de fritas.", price: 69 },
      { name: "Grilled Cheese", description: "Pão fatiado e mix de queijos, acompanhado de fritas.", price: 55 },
    ],
  },
  {
    id: "caldos",
    title: "Caldos",
    items: [
      { name: "Creme Abismo", description: "Creme de abóbora com gengibre, acompanhado de torradas temperadas.", price: 49 },
      { name: "Caldo Cordovil", description: "Creme de batata com couve e bacon crocante, acompanhado de torradas temperadas.", price: 49 },
    ],
  },
  {
    id: "pratos-principais",
    title: "Pratos Principais",
    items: [
      { name: "Filé Carrosel", description: "Filé mignon com molho demiglace de jatobá acompanhado de arroz e batata noisette.", price: 165, image: fileCarroselImg },
      { name: "Pesca da Lua", description: "Lombo de pescada amarela, legumes salteados e purê de batata Asterix.", price: 189, image: pescaImg },
      { name: "Camarão Paraíso", description: "Camarão trufado com arroz cremoso de limão siciliano.", price: 208 },
      { name: "Polvo Aneci", description: "Tentáculos de polvo acompanhado de mousseline de baroa e manteiga de ervas.", price: 208, image: polvoImg },
      { name: "Arroz Amaná", description: "Arroz selvagem, mix de cogumelos salteados, tomate cereja confitado, passas brancas, castanha de caju e alho assado.", price: 139 },
      { name: "Risoto Veredas", description: "Risoto ao funghi no creme de parmesão.", price: 120, image: risotoImg },
      { name: "Rigatoni Capri", description: "Rigatoni ao molho de tomates frescos, tomate confitado, burrata cremosa e pesto de barú.", price: 130 },
      { name: "Fetuccine Vale de Marte", description: "Fetuccine ao molho alfredo e lascas de parmesão.", price: 95 },
    ],
  },
  {
    id: "adicionais",
    title: "Adicionais",
    items: [
      { name: "Filé mignon grelhado", price: 69 },
      { name: "Pescada amarela", price: 75 },
      { name: "Camarão", price: 98 },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    items: [
      { name: "Brownie Cumbaru", description: "Brownie quente servido com calda de chocolate, farofa de barú e sorvete fior di latte.", price: 49, image: brownieImg },
      { name: "Crepe Barroco", description: "Crepe de doce de leite servido com sorvete fior di latte e raspas de limão siciliano.", price: 49, image: crepeImg },
      { name: "Flores do Segredo", description: "Mousse de queijo do cerrado com calda de goiabada quente.", price: 45 },
      { name: "Sorvete dos Altos", description: "Bola de sorvete acompanhado de calda de chocolate ou doce de leite. Consulte os sabores disponíveis.", price: 25 },
    ],
  },
  {
    id: "cafes-chas",
    title: "Cafés e Chás",
    items: [
      { name: "Café Expresso", description: "Ristretto, Voltesso ou Decaffeinato.", price: 15 },
      { name: "Capuccino", description: "Café, leite quente, chocolate e canela.", price: 15 },
      { name: "Chá", description: "Consulte os sabores disponíveis.", price: 9 },
    ],
  },
  {
    id: "licores",
    title: "Licores",
    items: [
      { name: "Amarula", price: 45 },
      { name: "Frangélico", price: 45 },
      { name: "Limoncello", price: 45 },
      { name: "Baileys", price: 45 },
      { name: "Licor 43", price: 55 },
      { name: "Cointreau", price: 55 },
      { name: "Carajillo", description: "Café expresso e licor 43.", price: 55 },
    ],
  },
  {
    id: "bebidas-sem-alcool",
    title: "Bebidas sem Álcool",
    items: [
      { name: "Água sem gás", price: 10 },
      { name: "Água com gás", price: 10 },
      { name: "Água com gás — San Pellegrino 500ml", price: 40 },
      { name: "Água de coco", price: 12 },
      { name: "Refrigerante", description: "Coca Cola, Coca Cola Zero, Guaraná e Guaraná Zero.", price: 12 },
      { name: "Schweppes", description: "Citrus, tônica e tônica zero.", price: 12 },
      { name: "Energético — Red Bull", description: "Normal ou Sugar Free.", price: 17 },
    ],
  },
  {
    id: "sucos-sodas",
    title: "Sucos e Sodas",
    items: [
      { name: "Suco Natural", description: "Limão, laranja, morango ou abacaxi.", price: 20 },
      { name: "Lemon Araras", description: "Limão taiti, limão siciliano e frutas vermelhas.", price: 25 },
      { name: "Soda Amaná", description: "Xarope de chá preto, xarope de gengibre, água com gás e limão taiti.", price: 28 },
      { name: "Soda Italiana", description: "Consulte os sabores disponíveis.", price: 25 },
    ],
  },
  {
    id: "cervejas",
    title: "Cervejas",
    items: [
      { name: "Heineken", price: 16 },
      { name: "Heineken Zero", price: 16 },
      { name: "Corona", price: 16 },
      { name: "Corona Zero", price: 16 },
      { name: "Stella Artois Gold (Sem Glúten)", price: 20 },
      { name: "Chapadeira — 600ml", description: "Session IPA, American Blonde, APA e Lager.", price: 40 },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { name: "Cozumel", description: "Cerveja, suco de limão e sal.", price: 29 },
      { name: "Caipirosca", description: "Vodka Absolut e frutas (abacaxi, limão taiti, limão siciliano ou morango).", price: 45 },
      { name: "Caipi do Engenho", description: "Vodka Absolut, limão taiti, limão siciliano e frutas vermelhas.", price: 48 },
      { name: "Caipirinha", description: "Cachaça e limão taiti.", price: 42 },
      { name: "Caipi do Vale", description: "Vodka Absolut, tangerina e canela.", price: 48 },
      { name: "Gin Tônica", description: "Gin, tônica, limão siciliano e alecrim.", price: 49 },
      { name: "Pink Tônica", description: "Gin, tônica, limão taiti, limão siciliano e morango.", price: 50 },
      { name: "Gin Amaná", description: "Gin, xarope de chá preto, xarope de gengibre, água com gás e limão taiti.", price: 49 },
      { name: "Negroni", description: "Campari, gin e Martini Rosso.", price: 46 },
      { name: "Whisky Sour", description: "Whisky, xarope de açúcar, suco de limão e casca de limão siciliano.", price: 45 },
      { name: "Dry Martini", description: "Gin e Martini seco.", price: 45 },
      { name: "Mojito", description: "Rum branco, limão e hortelã.", price: 45 },
      { name: "Aperol Spritz", description: "Aperol, espumante brut, água com gás e laranja.", price: 45 },
    ],
  },
  {
    id: "destilados",
    title: "Destilados",
    items: [
      { name: "Chivas 12 anos", price: 35 },
      { name: "Chivas 15 anos", price: 45 },
      { name: "Chivas 18 anos", price: 55 },
      { name: "Johnnie Walker Gold Label", price: 55 },
      { name: "Johnnie Walker Blue Label", price: 170 },
      { name: "Vodka Absolut", price: 25 },
      { name: "Vodka Grey Goose", price: 40 },
      { name: "Gin Tanqueray", price: 35 },
      { name: "Campari", price: 25 },
      { name: "Cachaça", price: 25 },
    ],
  },
];
