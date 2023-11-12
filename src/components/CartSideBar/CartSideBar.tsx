import React, { useState, useMemo, useEffect } from "react";

import * as C from "./styles";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  getCartTotal,
  initialState,
  clear,
} from "../../store/reducers/cartReducer";

interface ButtonProps {
  cartopen: boolean;
}

const CartSideBar: React.FC<ButtonProps> = ({ cartopen }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: initialState) => state.cart);
  const cart = useSelector((state: initialState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const handleCLick = () => setIsOpen(!isOpen);

  useEffect(() => {
    dispatch(getCartTotal(cart));
  }, [cart]);

  return (
    <>
      <C.CartButton onClick={handleCLick}>
        <FaShoppingCart />
        <span>{cart.totalQuantity.toString()}</span>
      </C.CartButton>
      <C.SideContainer cartopen={isOpen}>
        <C.Content className="content">
          <C.SideHeader>
            <div>
              <h2>
                Carrinho<br></br> de compras
              </h2>
            </div>
            <span onClick={handleCLick}>x</span>
          </C.SideHeader>
          <div className="overflow-container">
            <C.SideProducts>
              {cartItems.map((product) => (
                <C.CartProducts key={product.id}>
                  <img src={product.photo} width={75} height={70} />
                  <span>{product.name}</span>
                  <div className="quantity-container">
                    <C.ProductQuantity>
                      <button
                        className="minor"
                        onClick={() => dispatch(decrease(product))}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="plus"
                        onClick={() => dispatch(increase(product))}
                      >
                        +
                      </button>
                    </C.ProductQuantity>

                    <C.ProductPrice>
                      R${product.price * product.quantity}
                    </C.ProductPrice>
                  </div>
                  <button
                    className="remove"
                    onClick={() => dispatch(clear(product.id))}
                  >
                    x
                  </button>
                </C.CartProducts>
              ))}
            </C.SideProducts>
          </div>

          <C.ButtonArea>
            <C.TotalContainer>
              <span>Total:</span>
              <span>R${cart.totalPrice}</span>
            </C.TotalContainer>
            <C.BottomButton>Finalizar Compra</C.BottomButton>
          </C.ButtonArea>
        </C.Content>
      </C.SideContainer>
    </>
  );
};

export default CartSideBar;
