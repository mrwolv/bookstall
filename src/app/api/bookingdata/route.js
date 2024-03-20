import connectMongoDB from "@/db/db";
import { Bookings } from "@/lib/model/bookingdata";

import { NextResponse } from "next/server";

export async function POST(request) {
  const { selectedTypeStall, selectedStallNumber, cartItems } =
    await request.json();
  await connectMongoDB();

  await Bookings.create({ selectedTypeStall, selectedStallNumber, cartItems });
  return NextResponse.json(
    { message: "Bookings Created", success: true },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const booking = await Bookings.find();
  return NextResponse.json({ result: booking, success: true }, { status: 200 });
}


export async function DELETE(request){
  await connectMongoDB()
  const id = request.nextUrl.searchParams.get("id")
  await Bookings.findByIdAndDelete(id)
  return NextResponse.json({message:"Booking deleted",success:true},{staus:200})
} 
