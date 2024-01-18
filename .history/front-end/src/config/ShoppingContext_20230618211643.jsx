const [products,setProducts] = useState([
    {
      id: 1, 
      name: 'Iphone 12',
      price: 700,
      image: 'https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202__480.jpg'
    },
    {
      id: 2, 
      name: 'Samsung s10',
      price: 400,
      image: 'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938__340.jpg'
    },
    {
      id: 3, 
      name: 'Samsung Tv',
      price: 350,
      image: 'https://cdn.pixabay.com/photo/2019/06/30/18/19/tv-4308538__480.jpg'
    },
    {
      id: 4, 
      name: 'Huwawei Mate',
      price: 550,
      image: 'https://cdn.pixabay.com/photo/2017/08/11/14/19/honor-2631271__340.jpg'
    }
  ]);
  const [cartItems,setCartItems] = useState([]);

  function addToCart(item){
    let productItem = cartItems.find(product=> product.id === item.id)
    let exists = cartItems.find(product => product.id === item.id);
    if(exists){
      productItem.quantity += 1;
      setCartItems([...cartItems]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      item.quantity = 1;
      setCartItems([item,...cartItems]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  function incrementQ(item){
    let productItem = cartItems.find(product=> product.id === item.id)
    let exists = cartItems.find(product => product.id === item.id);
    if(exists){
      productItem.quantity += 1;
      setCartItems([...cartItems]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  function decrementQ(item){
    let productItem = cartItems.find(product=> product.id === item.id)
    let exists = cartItems.find(product => product.id === item.id);
    if(exists){
      productItem.quantity -= 1;
      if(productItem.quantity === 0){
        setCartItems(cartItems.filter(product => product.id !== item.id));       
      }else{
        setCartItems([...cartItems]);
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  function removeFromCart(item){
    setCartItems(cartItems.filter(product => product.id !== item.id));  
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your item has been removed',
      showConfirmButton: false,
      timer: 1500
    });
  }