import "./App.css";
import React, { useState, useEffect } from "react";

import CreateParking from "./components/CreateParking";
import StoreParking from "./components/StoreParking";
import CheckOut from "./components/CheckOut";

const getLocalStorageData = () => {
  let savedData = localStorage.getItem("parkingList");
  if (savedData) {
    return JSON.parse(localStorage.getItem("parkingList"));
  }
  return [];
};
const getCheckOutList = () => {
  let savedDataList = localStorage.getItem("parkingCheckOutList");
  if (savedDataList) {
    return JSON.parse(localStorage.getItem("parkingCheckOutList"));
  }
  return [];
};
function App() {
  const [input, setInput] = useState({
    name: "",
    plateNumber: "",
  });
  const [data, setData] = useState(getLocalStorageData);
  const [checkOutOwner, setCheckOutOwner] = useState(getCheckOutList);
  const [history, setHistory] = useState(false);

  useEffect(() => {
    localStorage.setItem("parkingList", JSON.stringify(data));
    localStorage.setItem("parkingCheckOutList", JSON.stringify(checkOutOwner));
  }, [data, checkOutOwner]);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const createOwners = (e) => {
    e.preventDefault();
    if (!input.name || !input.plateNumber) {
      alert("Please enter box");
      return;
    }
    const owner = {
      id: new Date().getTime(),
      // ownerData: input,
      name: input.name,
      plateNumber: input.plateNumber,
      date:
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    };
    setData([...data, owner]);
    input.name = "";
    input.plateNumber = "";
    // console.log(owner);
  };

  // deleteOwner
  const deleteOwner = (elem) => {
    const del = data.filter((item) => {
      return item.id !== elem.id;
    });

    const cheOut = {
      // id: new Date().getTime(),
      elem,
      dateOut:
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    };

    setData(del);

    setCheckOutOwner([...checkOutOwner, cheOut]);
  };
  // console.log(checkOutOwner);

  return (
    <div>
      <CreateParking
        input={input}
        inputHandler={inputHandler}
        createOwners={createOwners}
      />
      <StoreParking data={data} deleteOwner={deleteOwner} />
      <CheckOut
        checkOutOwner={checkOutOwner}
        setCheckOutOwner={setCheckOutOwner}
      />
    </div>
  );
}

export default App;
