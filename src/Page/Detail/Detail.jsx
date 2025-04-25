import { Link, useLocation, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Detail = () => {
  const { state } = useLocation([]);
  console.log(state);
  const { id } = useParams();
  console.log(id);

  if (!state) return <p><img src="https://cdn.dribbble.com/userupload/24238262/file/original-6b12fd6ca7a8dd70a94af6e0f14956d7.gif" alt="" /></p>;
  return (
    <div>
      <button className=" px-4 py-2 rounded-xl bg-slate-400 ml-3 mt-5">
        <Link className="flex items-center gap-3" to="/">
          <FaArrowLeft />
          Home
        </Link>
      </button>
      <div className="flex justify-center items-start gap-6  mt-10">
        <div className="w-[40%]">
          <img src={state.picture} alt="" />
        </div>
        <div className="w-[40%] flex flex-col items-start">
          <p className="font-bold text-6xl">{state.name}</p>
          <p className="text-2xl mt-2 border-t-4 border-blue-300">
            {state.category}
          </p>
          <div className="mt-6 border-b-2 border-gray-300 w-full pb-2 flex justify-between items-center">
            <div>
              <div className=" flex items-end gap-3">
                <p className="text-red-600 font-bold text-3xl">
                  ${state.price}
                </p>
                <p className="font-bold text-gray-700">${state.discount}</p>
              </div>
              <p className="text-green-500">Online Exclusive</p>
            </div>
            <div>
              <span className="text-green-600">InStock:</span> {state.stock}
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
          <div className="my-4">
            <label
              htmlFor="size"
              className="block text-gray-700 font-semibold mb-2"
            >
              Select Size
            </label>
            <select
              id="size"
              name="size"
              className="w-full md:w-1/2 border border-blue-400 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option disabled selected>
                -- Choose a size --
              </option>
              <option value="M">M (Chest 40", Length 28")</option>
              <option value="L">L (Chest 42", Length 29")</option>
              <option value="XL">XL (Chest 44", Length 30")</option>
              <option value="XXL">XXL (Chest 46", Length 31")</option>
            </select>
          </div>
          <div>
            <button>
                place order
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
