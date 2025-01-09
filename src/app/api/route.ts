import { NextResponse } from "next/server";

// const handleTime = async () => {
//   console.log("call func");
//   setTimeout(() => {
//     console.log("Inside TimeOut");
//   }, 100000);
// };

// export async function GET() {
//   console.log("call API");
//   await handleTime();
//   return NextResponse.json({ status: "OK" });
// }

const handleTimeoput = async () => {
  console.log("Call func");
  setInterval(() => {
    console.log("Called every 100 seconds");
  }, 100000); // 100
};

export async function GET() {
  console.log("Call API");
  handleTimeoput();
  return NextResponse.json({ status: "OK" });
}
