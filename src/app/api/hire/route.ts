import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const data = await req.json();

  const filePath = path.join(process.cwd(),"/src/app/JsonData", "hire.json");

  let existingData = [];

  try {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8");
      existingData = JSON.parse(fileContent || "[]");
    }
  } catch (err) {
    console.error("Read error:", err);
  }

  existingData.push({
    ...data,
    date: new Date().toISOString(),
  });

  try {
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
  } catch (err) {
    console.error("Write error:", err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
