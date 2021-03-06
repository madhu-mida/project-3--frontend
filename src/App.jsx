import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import { getUser, logout } from "./services/signup";
import Footer from "./components/Footer";
import { cartFunction, clearCart } from "./services/cartFunction";

function App() {
  const [userState, setUserState] = useState({ user: getUser() });

  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
  }

  const [cartItem, setCartItem] = useState([])

  const handleClick = (product) => {
    setCartItem((prevState) => {
      let existing = prevState.find(element => element._id === product._id);
      if (existing) {
        existing.selectedQty += 1;
        return prevState;
      } else {
        product.selectedQty = 1;
        return [
          ...prevState,
          product
        ]
      }

    })
  }

  const handleRemove = (productId) => {
    setCartItem((prevState) => {
      let removedArray = prevState.filter(element => element._id !== productId);
      console.log(removedArray)
      return removedArray
    })
  }

  const handleClearCart = async () => {
    await clearCart(userState.user.email)
    setCartItem([])
  }





  useEffect(() => {
    const cartObject = {
      userId: userState.user ? userState.user.email : "",
      _id: userState.user ? userState.user.email : "",
      products: cartItem,
    }
    cartFunction(cartObject)
    console.log("UseEffect", cartItem)
  }, [cartItem, userState]);

  return (
    <div className="App">
      <Header
        user={userState.user}
        handleLogout={handleLogout}
      />
      <Main
        user={userState.user}
        handleSignupOrLogin={handleSignupOrLogin}
        handleClick={handleClick}
        handleRemove={handleRemove}
        cartItem={cartItem}
        handleClearCart={handleClearCart}
      />
      <Footer />
    </div>
  );
}

export default App;

