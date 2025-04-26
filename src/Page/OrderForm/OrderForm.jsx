const OrderForm = () => {
  return (
    <form
      onSubmit={handleOrder}
      className="p-4 space-y-4 bg-gray-100 rounded-md shadow-md"
    >
      <input
        name="c_name"
        placeholder="Your Name"
        onChange={handleChange}
        required
        className="w-full p-2 border"
      />
      <input
        name="c_phone"
        placeholder="Phone"
        onChange={handleChange}
        required
        className="w-full p-2 border"
      />
      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
        required
        className="w-full p-2 border"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
