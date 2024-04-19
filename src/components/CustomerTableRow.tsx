import React from "react";
import { Customer } from "../types";
import '../pages/Pallete.css';

interface CustomerTableRowProps {
  customer: Customer;
}

export function CustomerTableRow({
  customer,
}: CustomerTableRowProps): JSX.Element {
  let customerLink = `/Customers/${customer.id}`;
  return (
    <tr>
      <td>{customer.id}</td>
      <td>{customer.fullName}</td>
      <td>{customer.email}</td>
      <td>
        <a className="btn btn-info button rose_quartz" href={customerLink}>
          Click Here
        </a>
      </td>
    </tr>
  );
}
