const Carrinho = ({ comprar }) => {
  return (
    <div>
      {comprar.map((comp, index) => (
        <div>
          <div key={index}>
            <div>{comp.name}</div>
            <div>Preço original: R$ {comp.price}</div>
            <div>Porcentagem do desconto: {comp.desconto}% </div>
            <div>Valor do desconto: {comp.vlrDesconto.toFixed(2)}</div>
            <div>Preço final: R$ {comp.final.toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrinho;
