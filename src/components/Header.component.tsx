import React from "react";
import './Component.css'
import './QuantumCom.png'

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
        <header>
            <div>
            <img className="centerImg" src="QuantumCom.png" alt="QuantumCom logo" />
            <div className="night night_text">:)</div>
            <br />
            </div>
        </header>
      </div>
    );
  }
}