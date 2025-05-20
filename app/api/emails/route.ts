import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = body.email;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const saved = await prisma.email.create({ data: { address: email } });
    return NextResponse.json({ message: "Email saved", email: saved.address });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'email :", error);
    return NextResponse.json({ error: "Email already exists or DB error" }, { status: 500 });
  }
}
