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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

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
      {selectedProduct && (
        <div className="modal_overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal_close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <div className="content_1">
              <img
                src={selectedProduct.photo}
                alt={selectedProduct.productName}
              />
            </div>

            <div className="content_2">
              <h2>{selectedProduct.productName}</h2>

              <p className="content_2_price">
                {formatPrice(selectedProduct.price)}
              </p>

              <p className="content_2_description">
                {selectedProduct.descriptionShort}
              </p>
              <span>Veja mais detalhes do produto &gt;</span>

              <div className="content_2_buttons">
                <div className="quantity_control">
                  <button
                    className="button_minus"
                    onClick={() =>
                      setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                  >
                    -
                  </button>

                  <span className="content_2_quantity">
                    {quantity < 10 ? `0${quantity}` : quantity}
                  </span>

                  <button
                    className="button_plus"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>

                <button className="modal_buy_button">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      )}
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
              <div className="product_all">
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
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setQuantity(1);
                  }}
                >
                  COMPRAR
                </button>
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
