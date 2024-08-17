import React from "react";
import ProductCard from "./components/ProductCard";

export default async function Home()  {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  console.log(data);
  return (
    <div className="container my-3">
      <div>
        <div className="row ">
          <ProductCard data={data} />
        </div>
      </div>
      </div>
  );
};