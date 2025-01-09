import { NextResponse } from "next/server";

export async function GET() {
  setInterval(() => {
    console.log("Job executed at:", new Date().toISOString());
    // Your core job logic goes here, like database queries, calculations, etc.
  }, 10000); // 10 seconds in milliseconds

  return NextResponse.json({
    status: "OK",
    message: "Job started running every 10 seconds.",
  });
}
