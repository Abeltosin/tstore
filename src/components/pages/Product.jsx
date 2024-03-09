import { useParams } from "react-router-dom";
import { Products } from "../assets/Products";
import { useEffect, useState } from "react";
import { cartAtom } from "../recoil/atom/cartAtom";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const product = Products.find((item) => String(item.id) === id);
  const relatedProducts = Products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const [triggerDesc, setTriggerDesc] = useState(true);
  const [triggerReview, setTriggerReview] = useState(false);

  const handleClick = () => {
    setTriggerDesc(!triggerDesc);
    setTriggerReview(!triggerReview);
  };

  const [quantity, setQuantity] = useState(1);

  const handleChange = (input) => {
    setQuantity(parseInt(input.target.value));
  };

  const [cart, setCart] = useRecoilState(cartAtom);

  const handleAdd = (id) => {
    const verifiedId = cart.findIndex((item) => item.id === id);

    if (verifiedId !== -1) {
      const updatedCart = [...cart];

      updatedCart[verifiedId] = {
        ...updatedCart[verifiedId],
        quantity: updatedCart[verifiedId].quantity + quantity,
      };
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          img: product.cover,
          name: product.name,
          price: product.price,
          quantity: quantity,
        },
      ]);
    }
    toast.success("Product added to cart successfull!");
  };

  const handleAdd2 = (ids) => {
    const relatedIndex = cart.findIndex((item) => item.id === ids);

    if (relatedIndex !== -1) {
      const update = [...cart];
      update[relatedIndex] = {
        ...update[relatedIndex],
        quantity: update[relatedIndex].quantity + 1,
      };
      setCart(update);
    } else {
      const gotten = relatedProducts.find((item) => item.id === ids);
      setCart([
        ...cart,
        {
          id: gotten.id,
          img: gotten.cover,
          name: gotten.name,
          price: gotten.price,
          quantity: 1,
        },
      ]);
    }
    toast.success("Product added to cart successfull!");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <div
        className=" pt-3 text-light fs-1 d-flex align-item-center justify-content-center"
        style={{
          width: "100%",
          backgroundImage:
            "linear-gradient( 35deg, hsl(240deg 100% 20%) 0%, hsl(284deg 40% 28%) 14%, hsl(350deg 21% 43%) 26%, hsl(33deg 35% 51%) 36%, hsl(47deg 65% 55%) 45%, hsl(55deg 100% 50%) 52%, hsl(39deg 80% 67%) 60%, hsl(2deg 47% 71%) 67%, hsl(300deg 36% 57%) 74%, hsl(269deg 69% 55%) 84%, hsl(245deg 100% 50%) 100%)",
          marginTop: 50,
          height: 140,
          width: "100%",
        }}
      >
        {product.name}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 my-3">
            <img
              style={{ width: 300, height: 400 }}
              src={product?.cover}
              alt=""
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 my-5">
            <h3>{product?.name}</h3>
            <div>
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              <span>{product?.reviews.map(item => {
                  return (
                    <div key={item.id}>
                    <span>&nbsp;&nbsp;{item?.rating}</span>
                    </div>
                  )
                })}</span>
            </div>
            <p>{`₦${product?.price.toLocaleString()}`}</p>
            <p>{`Category: ${product?.category}`}</p>
            <p>{product?.shortdesc}</p>
            <input
              className="ps-2 pe-2"
              style={{ width: 70 }}
              value={quantity}
              type="number"
              onChange={handleChange}
            />
            <br />
            <br />{" "}
            <button
              className="border rounded-pill ps-3 pe-3 pt-2 pb-2 bg-primary"
              onClick={() => handleAdd(product.id)}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-8 d-flex style={{ width: '200px' }}">
            <span>
              <button
                className="border-0"
                disabled={triggerDesc}
                style={{
                  opacity: triggerDesc ? 1 : 0.5,
                  cursor: "pointer",
                  width: 100,
                  boxShadow: "none",
                  background: "transparent",
                  color: "black",
                }}
                onClick={handleClick}
              >
                <div className="" style={{ color: "black", height: 40 }}>
                  Description
                </div>
              </button>
              
              <button
                disabled={triggerReview}
                className="ms-3 border-0"
                style={{
                  cursor: "pointer",
                  color: "black",
                  boxShadow: "none",
                  background: "transparent",
                  width: 10,
                  opacity: triggerReview ? 1 : 0.5,
                  height: 20,
                }}
                onClick={handleClick}
              >
                <span style={{ color: "black" }}>Review</span>
              </button>
              {/* <p>{triggerReview && <div>Hello</div>}</p> */}
            
              
                {triggerDesc ? (
                  <p>{product.longdesc}</p>
                ) : (
                  <div>
                    {product?.reviews.map((item) => {
                      return (
                        <div key={item.id}>
                        <h4>John</h4>
                      <p>{item.comment}</p>;
                      </div>
                      )
                    })}
                  </div>
                )}
              
            </span>
            
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center my-5">
          <h3 className="my-5">Related Products</h3>
          {relatedProducts.map((val) => (
            <div
              className="col-sm-4 col-md-4 col-lg-3 d-flex flex-column align-item-center justify-content-center my-2 mx-2 border"
              key={val.id}
            >
          <Link to={`/product/${val?.id}`}>
              <img
                src={val?.cover}
                style={{ width: 180, height: 170, margin: "auto" }}
                alt=""
              />
              </Link>
              <p className="" style={{ margin: "auto" }}>
                {val?.name}
              </p>
              <div style={{margin: 'auto'}}>
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              </div>
              <p
                style={{ margin: "auto" }}
              >{`₦${val?.price.toLocaleString()}`}</p>
              <br />
              <button
                className="border rounded-pill ps-3 pe-3 pt-2 pb-2 bg-primary"
                onClick={() => handleAdd2(val.id)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
