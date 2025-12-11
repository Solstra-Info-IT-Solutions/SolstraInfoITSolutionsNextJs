import { NextResponse } from "next/server";
import { writeFileSync, existsSync, readFileSync } from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const filePath = path.join(process.cwd(), "/src/app/JsonData", "getquote.json");

    let existingData = [];

    if (existsSync(filePath)) {
      const content = readFileSync(filePath, "utf-8");
      existingData = JSON.parse(content);
    }

    existingData.push({
      ...body,
      submittedAt: new Date().toISOString(),
    });

    writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
