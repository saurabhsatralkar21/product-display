import React, { useEffect, useState } from "react";

const Products = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]); // Never set the state to String. Always set to Array
  //  const [page, setPage] = useState(1);


    // Following useEffect is used for Products API call
  useEffect(() => {

    const productsApiUrl = "https://api.escuelajs.co/api/v1/products?offset=0&limit=8"; // GET method

    setLoading(true);
    const fetchData = async () => {
      try {
       const response = await fetch(productsApiUrl);
       const jsonFormatProducts = await response.json();
       setProducts(jsonFormatProducts);
       setLoading(false);
      } catch(error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);

    return(
        <div>
                <h1 className='heading'> Product list</h1>
                <div className='productList'>
                {loading && "Loading your products..."}
                {products.map((product) =>{
                return(
                    <div key={product.id} className="cardItem">
                    <div><img src={product.images} alt="#" /></div>
                        <div className='card-discription'>
                            <p className='productTitle'> {product.title} </p>
                            <p className='productPrice'> {`Price: $${product.price}`} </p>
                            <p className='productCategory'> {`Category: ${product.category.name}`} </p>
                            <p className='productDescription'> {product.description} </p>
                        </div>
                </div>
                )
                }) }
                </div>
        </div>
    )
}

export default Products