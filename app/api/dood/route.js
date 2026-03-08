import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = "559354bfltkgj0185bxl72"; // API Key kamu
  try {
    const response = await fetch(`https://doodapi.com/api/file/list?key=${API_KEY}`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 500, msg: error.message });
  }
}
