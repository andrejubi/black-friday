import "./App.css";
import { useState } from "react";
import GerarPromo from "./components/GerarPromo";
import ProductList from "./components/ProductList";
import Carrinho from "./components/Carrinho";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);
  const [sorteado, setSorteado] = useState([]);
  const [desconto, setDesconto] = useState();
  const [comprar, setComprar] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <GerarPromo
          setSorteado={setSorteado}
          setDesconto={setDesconto}
          products={products}
        />
        <ProductList
          comprar={comprar}
          setComprar={setComprar}
          sorteado={sorteado}
          desconto={desconto}
        />
        <Carrinho comprar={comprar} />
      </header>
    </div>
  );
}

export default App;
