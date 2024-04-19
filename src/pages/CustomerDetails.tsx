/* eslint-disable no-unused-expressions */
import React from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../services/customerService";
import { Footer } from "../components/Footer.component";
import { Header } from "../components/Header.component";
import './Pallete.css';
import './Page.css';
import { Customer } from "../types";

export function CustomerDetails() {
  const [customer, setCustomer] = React.useState<Customer>({
    id: "",
    fullName: "",
    email: "",
    cardType: "",
    cardNumber: "",
    ccv: 0,
    plans: {
      GUID:"",
      id:"",
      name: "",
      price: 0,
      deviceLimit: 0,
    },
    devices:{
      id: "",
      custId: "",
      name: "",
      number: ""
    }
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
      <a className='btn btn-info button rose_quartz btn-lg' href="/Device">Devices</a>
      </div>
      <dl>
      <br />
        <dt>ID: {customer.id}</dt>
        <dt>Email: {customer.email}</dt>
        <dt>Card Type: {customer.cardType}</dt>
        <dt>Card Number: {customer.cardNumber.replace(/^(\D*\d{12})/,"#".repeat(12))}</dt>
        <dt>Plan ID:{customer.plans?.id}</dt>
        <dt>Plan Name:{customer.plans?.name}</dt>
        <dt>Plan Price:{customer.plans?.price}</dt>
        <dt>Plan Device Limit:{customer.plans?.deviceLimit}</dt>
        <dt>Device Name:{customer.devices?.name}</dt>
        <dt>Device Number:{customer.devices?.number}</dt>
      </dl>
            {/* <tbody id="data-output"></tbody> */}
    </div>
    <Footer />
    </>
  );
}
