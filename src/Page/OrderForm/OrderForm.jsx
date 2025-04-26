import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import Swal from "sweetalert2";

const OrderForm = () => {
  const naviget =useNavigate()
  const {state} = useLocation([])
  console.log(state)
  const handleOrder =(evn)=>{
    evn.preventDefault();
    const form = evn.target;
    const name = form.c_name.value;
    const number = form.c_phone.value;
    const mail =form.c_mail.vale;
    const address = form.address.value;
    const product_id = form.product_id.value;
    const product_name = form.product_name.value;
    const product_price = form.product_price.value;
    const userOrderInfo = {name,number,mail,address,product_id,product_name,product_price}
    console.log(userOrderInfo)

    fetch("https://admin.refabry.com/api/public/order/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userOrderInfo),
    }).then((res) => res.json())
    .then((data)=>{
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        naviget('/')
      })
    })
  }
  return (
    <div className="mt-9">
      <h1 className="text-center text-4xl">Place Your Order</h1>
      <form
      onSubmit={handleOrder}
      className=" p-4 md:w-[40%] m-auto space-y-4 bg-blue-100 rounded-md shadow-md"
    >
      <input
        name="c_name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full p-2 border"
      />
      <input
        name="c_phone"
        typer='number'
        placeholder="Phone"
        required
        className="w-full p-2 border"
      />
      <input
        name="c_mail"
        type="mail"
        placeholder="E-mail"
        required
        className="w-full p-2 border"
      />
      <input
        name="address"
        placeholder="Address"
        required
        className="w-full p-2 border"
      />
      <div>
        <h1 className="font-semibold">product info</h1>
      </div>
      <label htmlFor="">Product name</label>
      <input
        name="product_name"
        placeholder=""
        value={state.product_name}
        required
        className="w-full p-2 border"
        readOnly
      />
        <label htmlFor="text">product code</label>
      <input
        name="product_id"
        placeholder=""
        value={state.product_code}
        required
        className="w-full p-2 border"
        readOnly
      />
        <label className="mt-4" htmlFor="text">product price</label>
      <input
        name="product_price"
        placeholder=""
        value={state.product_price}
        required
        className="w-full p-2 border"
        readOnly
      />
      
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </form>
    </div>
  );
};

export default OrderForm;
