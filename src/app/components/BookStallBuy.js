import React from 'react'

const BookStallBuy = (props) => {
  console.log(props)
  
  return (
    <div className="mt-10 px-32 shadow-xl ml-32 bg-[#FAFAF9] rounded-lg ">
            <h1 className="text-[1.4rem] py-7 ">Stall Booking Details</h1>

            <div className="flex items-center justify-between mt-5">
              <p className="flex items-center justify-between gap-2">
                <span className="font-semibold">Stall Number</span>
                <span>{props.selectedStallNumber}</span>
              </p>
              <p className="flex items-center justify-between gap-2">
                <span className="font-semibold">Stall Price</span>
                <span>{props.selectedPrice}</span>
              </p>
              <p className="flex items-center justify-between gap-2">
                <span className="font-semibold">Grand Total</span>
                <span>300</span>
              </p>
            </div>
            <div className="mt-7 h-96">
              <h1 className="text-[1.3rem] font-semibold">Basic Information</h1>
              <div className="mt-7 grid grid-cols-3 gap-10 ">
                <div className="flex flex-col gap-4 justify-center">
                  <span className="text-sm font-semibold">First Name</span>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    required
                    className="form-control text-xs border border-gray-300 outline-gray-300 focus:outline-[#41cfd1] rounded-md py-1.5 px-2 font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  <span className="text-sm font-semibold">Email</span>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    required
                    className="form-control text-xs border border-gray-300 outline-gray-300 focus:outline-[#41cfd1] rounded-md py-1.5 px-2 font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  <span className="text-sm font-semibold">Phone Number</span>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="form-control text-xs border border-gray-300 outline-gray-300 focus:outline-[#41cfd1] rounded-md py-1.5 px-2 font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  <span className="text-sm font-semibold">Instagram address(**)</span>
                  <input
                    type="text"
                    placeholder="Instagram"
                    className="form-control text-xs border border-gray-300 outline-gray-300 focus:outline-[#41cfd1] rounded-md py-1.5 px-2 font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  <span className="text-sm font-semibold">Home Address</span>
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control text-xs border border-gray-300 outline-gray-300 focus:outline-[#41cfd1] rounded-md py-1.5 px-2 font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  <span className="text-sm font-semibold">Bussiness Name</span>
                  <input
                    type="text"
                    placeholder="Bussiness Name"
                    className="form-control text-xs border border-gray-300 outline-gray-300 focus:outline-[#41cfd1] rounded-md py-1.5 px-2 font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>
  )
}

export default BookStallBuy