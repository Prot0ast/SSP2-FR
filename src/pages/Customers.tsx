import { useState, useEffect} from "react";
import { Footer, Header, CustomerTableRow } from "../components";
import {getAllCustomers } from '../services/customerService';
import { Customer} from "../types";
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
        <div className = "rose_quartz centerText">
        <a className="btn button white btn-lg" href="/">Home</a>
        <h2 className="centerText">All Customers</h2>    
            <table className = 'table table-responsive table-striped table-hover rose_quartz'>
                <thead className = "rose_quartz">
                    <tr className = "rose_quartz">
                        <th className = "rose_quartz">ID</th>
                        <th className = "rose_quartz">Full Name</th>
                        <th className = "rose_quartz">Email</th>
                        <th>Details</th>
                    </tr>
                </thead>
            
            <tbody className = "rose_quartz">
            {customers.map((customer) => (<CustomerTableRow key={customer.id} customer={customer} />))}
            </tbody>
            </table>
            <p className="flexbox"></p>
        </div>
        <Footer />
        </>
    )
}