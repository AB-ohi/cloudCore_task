import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://admin.refabry.com/api/all/product/get")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
if(products.length === 0)return<p><img className="w-[600px]" src="https://cdn.dribbble.com/userupload/24238262/file/original-6b12fd6ca7a8dd70a94af6e0f14956d7.gif" alt="" /></p>
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product</h2>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] gap-7">
          {products.map((product) => (
            <div className="bg-blue-100 w-[100%] rounded-xl" key={product.id}>
              <div className="flex justify-center  items-center">
                <img
                  className="hover:scale-110 object-contain duration-300 w-[70%]"
                  src="https://admin.refabry.com/storage/product/7681_1734110373.webp"
                  alt=""
                />
              </div>
              <div className="mt-9 ms-4 mb-4">
                <p className="font-semibold ">{product.name}</p>
                <p className="my-3">Price: {product.price}$</p>
                <button className="px-6 py-3 border-solid border-2 border-blue-400 bg-blue-50 text-blue-400 hover:text-white border-spacing-1 rounded-md hover:bg-blue-400 transition-colors text-2xl ">
                  <Link state={{
                    name: product.name,
                    price: product.price,
                    buying_price: product.buying_price,
                    product_code: product.code,
                    desc: product.short_desc,
                    category: product.category.name,
                    stock: product.stock,
                    discount: product.discount_amount ? product.discount_amount : null,
                    discount_date: product.discount_date,
                    picture: 'https://admin.refabry.com/storage/product/7681_1734110373.webp'
                  }}
                   to={`/detail/${product.unique_id}`}>Detail</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
