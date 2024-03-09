import { useRecoilValue, useRecoilState } from "recoil";
import { cartAtom } from "../recoil/atom/cartAtom";
import DeleteCartItems from "../packages/DeleteCartItems";
import CartTotalPrice from "../packages/CartTotalPrice";
const Cart = () => {
  const show = useRecoilValue(cartAtom);
  const totalPrice = show.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [quantities, setQuantity] = useRecoilState(cartAtom);

  const increase = (index) => {
    const increases = quantities.findIndex((item) => item.id === index);

    if (increases !== -1) {
      const increas = [...quantities];

      increas[increases] = {
        ...increas[increases],
        quantity: increas[increases].quantity + 1,
      };
      setQuantity(increas);
    }
  };

  const decrease = (index) => {
    const decreases = quantities.findIndex((item) => item.id === index);

    const decreas = [...quantities]
    if(decreas[decreases].quantity === 0) {
     const remove = decreas.filter(item => item.id !== index)
    setQuantity(remove)

    }

    if (decreases !== -1) {
      const decreas = [...quantities];

      decreas[decreases] = {
        ...decreas[decreases],
        quantity: decreas[decreases].quantity - 1,
      };
      setQuantity(decreas);
    } 

    
  };
// row-cols-sm-1 row-cols-md-1 row-cols-lg-2 gx-3 my-3 mx-2 d-flex flex-row overflow-hidden


  return (
    <div className="container-fluid mb-5" style={{ marginTop: 100 }}>
        <div className="row mt- d-flex flex-row m-auto gx-lg-5 ms-md-5 ms-lg-5">
     
        
        {/* <div className="col-sm-12 col-md-6 col-lg-6 mb-3 d-flex flex-column"> */}
        <div className="col-sm-12 col-md-6 col-lg-6 mb-1" style={{}}>
        {show.length === 0 && <h2 className="col-12 border rounded overflow-hidden"
                  style={{
                    // background: "silver",
                    minHeight: 200,
                    // width: 500
                  }}>Cart Is Empty</h2>}
          {show.map((val) => {
            return (
                <div
                  key={val.id}
                  className="col-12 rounded overflow-hidden border"
                  style={{
                    // background: "silver",
                    minHeight: 300,
                    // width: 700
                  }}
                >
        
                  <div className="d-flex justify-content-end">
                    <DeleteCartItems key={val.id} item={val} />
                  </div>
                  <div className="d-flex align-item-center p-5">
                    <img
                      src={val?.img}
                      style={{ width: 100, height: 100 }}
                      alt=""
                      className="pb-5"
                    />
                    <div className="flex-column align-item-center justify-content-center ps-3">
                      <p>{val?.name}</p>
                      <p>{`₦${(val?.price).toLocaleString()}`}</p>
                      <button className="p-1 me-1 border-0 opacity-50" style={{width: 20}} disabled={val.quantity === 1} onClick={() => decrease(val.id)}>-</button>
                      <span className="m-2" style={{width: 10, display: 'inline-block',}}>{` ${val?.quantity}`}</span>
                      <button className="p-1 ms-2 border-0 opacity-50" style={{width: 20}} onClick={() => increase(val.id)}>+</button>
                      <p>{`Total Price Per Quantity: ₦${
                        (val?.quantity * val.price).toLocaleString()

                      }`}</p>
                    </div>
                   </div>

                 </div>
            );
          })}
          </div>
           <div className="col-sm-12 col-md-4 col-lg-6 border" style={{ maxWidth: 400, height: 150}}>
          <h3 className="p-2">CART SUMMARY</h3>
      
          <CartTotalPrice price={totalPrice} />
        </div>
          </div>
          

       
      </div>
    //  </div>
  );
};

export default Cart;
