import React from "react";
import ItemCard from "./ItemCard";
import data from'./data';

const Home = () => {
  return (
    <div>
      <h1 className="text-center mt-3">ITEMS</h1>
      <section className="py-4 container ">
          {data.product.map((item) => {
            return (
              <ItemCard
                img={item.img}
                price={item.price}
                title={item.title}
                item={item}
                key={item.id}
              />
            );
          })}
      </section>  

    </div>
  );
};

export default Home;
