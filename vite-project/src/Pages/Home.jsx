import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=7")
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <strong>Price: ${p.price}</strong>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
