import { NextResponse } from "next/server";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const handleTime = async () => {
  console.log("Call func");
  await delay(100000);
  console.log("Inside Timeout");
};

export async function GET() {
  console.log("Call API");
  await handleTime();
  return NextResponse.json({ status: "OK" });
}
