/* eslint-disable no-unused-expressions */
import React from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../services/customerService";
import { Footer } from "../components/Footer.component";
import { Header } from "../components/Header.component";
import './Pallete.css';
import './Page.css';

export function CustomerDetails() {
  const [customer, setCustomer] = React.useState({
    id: "",
    fullName: "",
    email: "",
    cardType: "",
    cardNumber: "",
    ccv: 0,
    // plans: {
    //   GUID:"",
    //   id:"",
    //   name: "",
    //   price:"",
    //   deviceLimit: ""
    // },
    // devices:{
    //   id: "",
    //   custId: "",
    //   name: "",
    //   number: ""
    // }
  });

  const { customerId } = useParams();

  React.useEffect(() => {
    if (!customerId) {
      return;
    }
    getCustomerById(customerId).then((response) => {
      setCustomer(response.data);
    });
  }, [setCustomer, customerId]);


  return (
    <>
    <Header />
    <div className="container">
      <div className="centerText">
      <h2 className="centerText">Customer Details for {customer.fullName}</h2>
      <a className="btn btn-info button rose_quartz btn-lg" href="/">Home</a>
      <a className='btn btn-info button rose_quartz btn-lg' href="/Customer/$:bill">Bill Breakdown</a>
      <a className='btn btn-info button rose_quartz btn-lg' href="/Device">Devices</a>
      </div>
      <dl>
      <br />
        <dt>ID: {customer.id}</dt>
        <dt>Email: {customer.email}</dt>
        <dt>Card Type: {customer.cardType}</dt>
        <dt>Card Number: {customer.cardNumber}</dt>
        <dt>CVV: {customer.ccv}</dt>

      </dl>
            {/* <tbody id="data-output"></tbody> */}
    </div>
    <Footer />
    </>
  );
}
