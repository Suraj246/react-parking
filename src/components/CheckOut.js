import React from 'react'

function CheckOut({ checkOutOwner, deleteOwner, setCheckOutOwner }) {
    return (
        <>
            <div className="check">
                <h3 style={{ marginLeft: "10px" }}>Check Out Vehicles: {checkOutOwner.
                    length}</h3>
                <span onClick={() => setCheckOutOwner([])} id="del-all">delete All</span>
            </div>
            <div className="store-parking">
                {checkOutOwner.map((item, idx) => {
                    return (
                        <div key={idx} className="owner-info">
                            <p>Owner : {item.elem.name}</p>
                            <p>Plate : {item.elem.plateNumber}</p>
                            <p className="owner-checkin">Check In : {item.elem.date}</p>
                            <p className="owner-checkout">Check Out : {item.dateOut}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CheckOut
