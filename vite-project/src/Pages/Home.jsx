import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setPost(res.data.products); // MUHIM JOY !!!
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex gap-9 max-w-1000 flex-wrap items-center justify-center mt-3">
      {post.map((item) => (
        <div key={item.id} className="border rounded-[10px] p-3">
          <img src={item.images[0]} width={200} />
           <h1>{item.price}</h1>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
