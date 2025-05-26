import { createContext, useContext, useEffect, useState } from "react";

const CardContext = createContext(null);
export const SelectContext = () => {
  const Context = useContext(CardContext);
  return Context;
};

export const CardProvider = ({ children }) => {
  const savedCard = JSON.parse(localStorage.getItem("Product")) || [];
  const [Card, SetCard] = useState(savedCard);

  useEffect(() => {
    localStorage.setItem("Product", JSON.stringify(Card));
  }, [Card]);

  const AddToCard = (product) => {
    const ExistProduct = Card.find((item) => item.id === product.id);
    if (ExistProduct) {
      const NewCard = Card.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      SetCard(NewCard);
    } else {
      SetCard((prev) => [...prev, { ...product, quantity: 1 }]);
      localStorage.setItem(
        "Product",
        JSON.stringify([...Card, { ...product, quantity: 1 }])
      );
    }
  };
  const RemoveProduct = (ProductId) => {
    const NewCard = Card.map((item) =>
      item.id === ProductId ? { ...item, quantity: item.quantity - 1 } : item
    ).filter((item) => item.quantity > 0);

    SetCard(NewCard);
  };

  const ClearCard = () => {
    SetCard([]);
  };
  const IncreaseProduct = (ProductId) => {
    const NewCard = Card.map((item) => {
      if (item.id === ProductId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    SetCard(NewCard);
  };
  const TotalPrice = () => {
    return Card.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };
  return (
    <CardContext.Provider
      value={{
        AddToCard,
        RemoveProduct,
        ClearCard,
        IncreaseProduct,
        TotalPrice,
        Card,
        SetCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
