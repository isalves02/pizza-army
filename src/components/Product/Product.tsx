import { AboutProduct } from "./About/About";
import { OrderProduct } from "./Order/Order";
import { Reviews } from "./Reviews/Reviews";

export function Product() {

  return (
    <>
      <OrderProduct />
      <AboutProduct />
      <Reviews />
    </>
  )
}

