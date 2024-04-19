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
    plans: [{
      GUID:"",
      id:"",
      name: "",
      price: 0,
      deviceLimit: 0,
    }],
    devices:[{
      id: "",
      custId: "",
      name: "",
      number: ""
    }]
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

 function registerPlans(){
  var printThis = "";
  for (var i = 0; customer.plans?.length; i++){
    printThis += "Plan Price: " + customer.plans[i].name + " Plan Device Limit: " + customer.plans[i].deviceLimit;
  }
  return printThis;
 } 

 function registerDevices(){
  var printThis = "";
  for (var i = 0; customer.devices?.length; i++){
    printThis += "Device Name: " + customer.devices[i].name + " Device Number: " + customer.devices[i].number;
  }
  return printThis;
 }

  return (
    <>
    <Header />
    <div>
      <div className="centerText rose_quartz">
      <a className="btn btn-info button white btn-lg" href="/">Home</a>
      <a className="btn btn-info button white btn-lg" href="/Customers">Customer View</a>
      <a className='btn btn-info button white btn-lg' href="/Device">Devices</a>
      <a className="btn btn-info button white btn-lg" href="/CustomerPlan">Plans</a>
      <h2 className="centerText">Customer Details for {customer.fullName}</h2>
      </div>
      <dl className="jet white_text leftText container">
      <br />
        <dt>Email: {customer.email}</dt>
        <dt>Card Type: {customer.cardType}</dt>
        <dt>Card Number: {customer.cardNumber.replace(/^(\D*\d{12})/,"#".repeat(12))}</dt>
        <dt>Plan Name:
          {/* {customer.plans?.name} */}
          </dt>
        <dt>Plan Price:
          {/* {customer.plans?.price} */}
          </dt>
        <dt>Plan Device Limit:
          {/* {customer.plans?.deviceLimit} */}
          </dt>
        <dt>Device Name:
          {/* {customer.devices?.name} */}
          </dt>
        <dt>Device Number:
          {/* {customer.devices?.number} */}
          </dt>
        {/* {registerPlans()} */}
        
        {/* {registerDevices()} */}
      </dl>
    </div>
    <p className="rose_quartz"></p>
    <Footer />
    </>
  );
}
