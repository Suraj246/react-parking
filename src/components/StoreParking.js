import React from 'react'

function StoreParking({ data, deleteOwner, delOwenr }) {

    return (
        <>
            <h3 style={{ marginLeft: "10px" }}>Vehicles Available In Parking : {data.length}</h3>
            <div className="store-parking">
                {data.map((item, idx) => {
                    return (
                        <div key={idx} className="owner-info">
                            <p>Owner : {item.name}</p>
                            <p>Plate : {item.plateNumber}</p>
                            <p>Check In : {item.date}</p>
                            <button
                                onClick={() => {
                                    deleteOwner(item);
                                    // delOwenr(item);
                                }}
                                id="delete"
                            >Check Out</button>
                        </div>
                    )
                })}
            </div>
            <hr />
        </>
    )
}

export default StoreParking
