import connectMongoDB from "@/db/db";
import { Bookings } from "@/lib/model/bookingdata";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  await connectMongoDB();
  const { id } = params;

  const {
    newSelectedTypeStall: selectedTypeStall,
    newSelectedStallNumber: selectedStallNumber,
    newCartItems: cartItems,
  } = await request.json();

  await Bookings.findByIdAndUpdate(id, {
    selectedTypeStall,
    selectedStallNumber,
    cartItems,
  });
  return NextResponse.json(
    { message: "Successfully updated", succes: true },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const bookingOne = await Bookings.findOne({ _id: id });
  return NextResponse.json(
    { result: bookingOne, message: "done find one", success: true },
    { status: 200 }
  );
}
