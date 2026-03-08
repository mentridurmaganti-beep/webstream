import { NextResponse } from 'next/server';

export async function GET() {
  // MASUKKAN API KEY BARU KAMU DI SINI
  const API_KEY = "559354bfltkgj0185bxl72"; 
  
  try {
    const res = await fetch(`https://doodapi.com/api/file/list?key=${API_KEY}`);
    const data = await res.json();
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 500, msg: error.message });
  }
}
