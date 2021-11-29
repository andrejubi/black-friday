const GerarPromo = ({ products, setSorteado, setDesconto }) => {
  const numberRandom = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    const sorteio = products.filter((prod) => prod.id === number);
    setSorteado(sorteio[0]);
    console.log(sorteio);
    setDesconto(Math.floor(Math.random() * 50) + 40);
  };

  return (
    <div>
      <button onClick={numberRandom}> Gerar Promoção </button>
    </div>
  );
};

export default GerarPromo;
