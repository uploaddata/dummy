import { NextResponse } from "next/server";

export async function GET() {
  const interval = setInterval(() => {
    console.log("Job executed at:", new Date().toISOString());
    // Your core job logic goes here, like database queries, calculations, etc.
  }, 10000); // 10 seconds in milliseconds

  // Optionally clear the interval after a set amount of time
  // For example, after 1 minute (60000 milliseconds)
  setTimeout(() => clearInterval(interval), 60000);

  return NextResponse.json({
    status: "OK",
    message: "Job started running every 10 seconds.",
  });
}
