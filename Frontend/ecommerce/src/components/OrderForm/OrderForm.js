import React from "react";
import style from "./OrderForm.module.css"
import Input from "../Input /Input";

function OrderForm({ order, setOrder }) {
  return (
    <div>
      <div className={style.formContainer}>
        <Input
          value={order}
          setValue={setOrder}
          control="shippingAddress"
          label="shippingAddress"
          required
        />
         <Input
          value={order}
          setValue={setOrder}
          control="country"
          label="country"
          required
        />
      </div>
    </div>
  );
}

export default OrderForm;
