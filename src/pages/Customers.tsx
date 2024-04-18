import { useState, useEffect} from "react";
import { Footer, Header, CustomerTableRow } from "../components";
import {getAllCustomers } from '../services/customerService';
import { Customer, Plan } from "../types";
import './Page.css';

export function Customers(){
    const [customers, setCustomers] = useState(new Array<Customer>);

    let newCustomer = {id: "", fullName: "", email: ""}

    useEffect(() => {
        getAllCustomers().then(response => {
            setCustomers(response.data)
        });
    }, [setCustomers]);

    return (
        <>
        <Header />
        <div className = "container">
            <h2 className="centerText">Customers</h2>
            <a className="btn-btn-primary btn-lg" href="/">Home</a>
            <table className = 'table table-responsive table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        {/* <th>Plans</th> */}
                    </tr>
                </thead>
            {/* <tbody id="data-output">
                
            </tbody> */}
            <tbody>
            {customers.map((customer) => (<CustomerTableRow key={customer.id} customer={customer} />))}
            </tbody>
            </table>
        </div>
        <Footer />
        </>
    )
}