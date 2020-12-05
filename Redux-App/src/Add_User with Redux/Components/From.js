import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function From() {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const dispatch = useDispatch();

  const storeUser = (e) => {
    e.preventDefault();

    dispatch({ type: "ADD_USER", payload: { id: uuidv4(), name, address } });

    setname("");
    setaddress("");
  };
  return (
    <div>
      <form onSubmit={storeUser}>
        <div className="group">
          <input
            type="text"
            className="control"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="group">
          <input
            type="text"
            className="control"
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />
        </div>
        <div className="group">
          <input type="submit" className="btn btn-default" value="Add User" />
        </div>
      </form>
    </div>
  );
}

export default From;
