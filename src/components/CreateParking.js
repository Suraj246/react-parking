import React from "react";

function CreateParking({ inputHandler, input, createOwners }) {
  return (
    <div className="Parking">
      <div className="create-owner">
        <img
          src="images\pg.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="form-table">
        <form>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Driver Name"
            value={input.name}
            onChange={inputHandler}
          />
          <input
            type="text"
            name="plateNumber"
            id="pn"
            placeholder="Plate Number"
            value={input.plateNumber}
            onChange={inputHandler}
          />
          <button onClick={createOwners} id="btn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateParking;
