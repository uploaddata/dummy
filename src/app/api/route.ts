import { NextResponse } from "next/server";

const handleTime = async () => {
  console.log("call func");
  setTimeout(() => {
    console.log("Inside TimeOut");
  }, 100000);
};

export async function GET() {
  console.log("call API");
  handleTime();
  return NextResponse.json({ status: "OK" });
}
