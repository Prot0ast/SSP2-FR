/* eslint-disable no-unused-expressions */
import React from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../services/customerService";
import { Footer, Header } from "../components";
import './Page.css';

export function CustomerDetails() {
  // fetch("https://localhost:5001/api/Customer/${customerId}") // <- how to pass customer id???
  // .then(function(response){
  //   return response.json();
  // }).then(function(customer){
  //   let placeholder = document.querySelector("#data-output");
  //   let out = "";
  //   for(let c of customer){
  //     out += `
  //     <tr>
  //       <td>${c.id}</td>
  //       <td>${c.fullName}</td>
  //       <td>${c.email}</td>
  //       <td>${c.plans}</td>
  //       <td>${c.cardType}</td>
  //       <td>${c.devices}</td>
  //       <td>${c.fullName}</td>
  //     </tr>
  //     `;
  //   }
  //   placeholder!.innerHTML = out;
  // })
  const [customer, setCustomer] = React.useState({
    id: "",
    fullName: "",
    email: "",
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
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
    </head>
    <div>
      <Header />
      <h2 className="centerText">Customer Details</h2>
      <a className="btn-btn-primary btn-lg" href="/">Home</a>
      <a className='btn btn-info' href="/Customer/$:bill"></a>
      <dl>
        <dt className="centerText">ID</dt>
        <dd>{customer.id}</dd>
        <dt className="centerText">Full Name</dt>
        <dd>{customer.fullName}</dd>
        <dt className="centerText">Email</dt>
        <dd>{customer.email}</dd>
      </dl>
        
            {/* <tbody id="data-output"></tbody> */}
      
      <Footer />
    </div>
    </>
  );
}