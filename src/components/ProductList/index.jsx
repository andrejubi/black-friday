const ProductList = ({ comprar, setComprar, sorteado, desconto }) => {
  const handleClick = () => {
    setComprar([...comprar, card]);
    console.log(card);
  };

  const card = {
    name: sorteado.name,
    price: sorteado.price,
    desconto: desconto,
    vlrDesconto: sorteado.price * (desconto / 100),
    final: sorteado.price - sorteado.price * (desconto / 100),
  };

  console.log(sorteado);
  return (
    <div>
      <div>{card.name}</div>
      <div>Preço original: R$ {card.price}</div>
      <div>Porcentagem do desconto: {card.desconto}% </div>
      <div>Valor do desconto: {card.vlrDesconto.toFixed(2)}</div>
      <div>Preço final: R$ {card.final.toFixed(2)}</div>
      <button onClick={() => handleClick()}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductList;
