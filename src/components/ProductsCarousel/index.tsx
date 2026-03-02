import "./products.scss";
import leftArrow from "../../assets/icons/left.svg";
import rightArrow from "../../assets/icons/right.svg";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { Product } from "../../types/product";
import { formatPrice } from "../../utils/formatPrice";

export default function ProductsWrapper() {
  const [products, setProducts] = useState<Product[]>([]);
  const cardWidth = 302;
  const gap = 18;
  const totalCardWidth = cardWidth + gap;
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  function handleNext() {
    if ((page + 1) * itemsPerPage < products.length) {
      setPage(page + 1);
    }
  }

  function handlePrev() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="products_wrapper">
      <button className="arrow_left" onClick={handlePrev}>
        <img
          src={leftArrow}
          alt="Seta para passar o carrossel para a esquerda"
        />
      </button>

      <div className="carousel_viewport">
        <div
          className="products_track"
          style={{
            transform: `translateX(-${page * itemsPerPage * totalCardWidth}px)`,
          }}
        >
          {products.map((product) => (
            <div key={product.productName} className="product_card">
              <div className="test">
                <img src={product.photo} alt={product.productName} />
                <h3>{product.productName}</h3>
                <div className="product_price">
                  <span className="old-price">
                    {formatPrice(product.price * 1.1)}
                  </span>{" "}
                  <span className="price">{formatPrice(product.price)}</span>
                </div>
                <span>
                  {`ou 2x de ${formatPrice(product.price / 2)}`} sem juros
                  <br />
                </span>
                <span className="free-shipping">Frete grátis</span>
                <button>COMPRAR</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="arrow_right" onClick={handleNext}>
        <img
          src={rightArrow}
          alt="Seta para passar o carrossel para a direita"
        />
      </button>
    </div>
  );
}
