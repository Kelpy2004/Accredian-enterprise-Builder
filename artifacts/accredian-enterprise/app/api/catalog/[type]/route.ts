import { NextResponse } from "next/server";
import {
  FAQS,
  PROGRAMS,
  SOLUTIONS,
  STATS,
  TESTIMONIALS,
} from "@/lib/data";

const MAP: Record<string, unknown> = {
  programs: PROGRAMS,
  solutions: SOLUTIONS,
  stats: STATS,
  testimonials: TESTIMONIALS,
  faqs: FAQS,
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ type: string }> },
) {
  const { type } = await params;
  const data = MAP[type];
  if (!data) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(data);
}
