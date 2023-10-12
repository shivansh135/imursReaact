import React from "react";
import "./corporate.css";

export const Corporate = () => {
    return (
        <div className="corporate">
          <div className="corporate-wrapper">Corporate Plans</div>
         <div class="dropdown">
  <button class="btn dropdown-toggle corporate-div" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <div className="corporate-wrapper-2">Select the No Magazine</div>
  </button>
  <ul class="dropdown-menu " style={{width:"100%"}}>
    <li><a class="dropdown-item " href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            <p className="bundle">( Select a Bundle to view pricing )</p>
        </div>
    );
};
