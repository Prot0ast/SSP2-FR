import React from "react";
import './Component.css'

export class Header extends React.Component {
  componentDidMount(): void {
    // Normally used to make API calls or fetch data
  }

  componentWillUnmount(): void {
    // Clean up code: remove event listeners, cancel network requests, etc.
  }

  render() {
    return (
      <div>
        <header className="jet">
            <div>
            <img className="centerImg white_text" src="QuantumCom.png" alt="QuantumCom logo" />
            <div className="night night_text">:)</div>
            <br />
            </div>
        </header>
      </div>
    );
  }
}