import { useState } from "react";
import { OrderItemType, OrderType } from "../../types";
import AdminSidebar from "../../components/AdminSidebar";
import { Link } from "react-router-dom";

const img: string =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";
const orderItems: OrderItemType[] = [
  {
    name: "puma shoes",
    photo: img,
    _id: "afasfag",
    quantity: 4,
    price: 2000,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Shashi",
    address: "77 8th ward",
    city: "nevada",
    state: "texas",
    pinCode: 2142132,
    status: "Processing",
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 41324,
    country: "USa",
    subTotal: 500,
    orderItems,
    _id: "sajkfhka",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subTotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

const updateHandler = ()=>{
  setOrder(prev=>({
    ...prev,
    status:prev.status==='Processing'? 'Shipped':'Delivered',
  }))
}

  return (
    <div className="adminContainer">
        <AdminSidebar />
      <main className="product-management">
            <section style={{
              padding:'2rem',
            }}>
              <h2>Order Items</h2>
              {
                order.orderItems.map(i=>(
                  <ProductCard key={i._id} name={i.name} photo={i.photo} _id={i._id} quantity={i.quantity} price={i.price} />
                ))
              }
            </section>
            <article className="Shipping-info-card">
              <h1>Order Info</h1>
              <h5>User Info</h5>
              <p>Name : {name}</p>
              <p>Address : {address}, {city}, {state}, {country}, {pinCode} </p>

              <h5>Amount Info</h5>
              <p>Subtotal :{subTotal}</p>
              <p>ShippingCharges :{shippingCharges}</p>
              <p>Tax :{tax}</p>
              <p>discount :{discount}</p>
              <p>Total :{total}</p>

              <h5>Status Info</h5>
              <p>status : <span className={status==='Delivered'?'purple':status==='Shipped'?'green':'red'}>{status}</span></p>
              <button onClick={updateHandler}>Process Status</button>
            </article>
      </main>
    </div>
  );
};


const ProductCard=({name,photo,price,quantity,_id,}:OrderItemType)=>{
 return <div className="transaction-product-card">
          <img src={photo} alt={name} />
          <Link to={`/product/${_id}`} >{name}</Link>
          <span>${price} X {quantity} = ${quantity*price}</span>
  </div>
}

export default TransactionManagement;
