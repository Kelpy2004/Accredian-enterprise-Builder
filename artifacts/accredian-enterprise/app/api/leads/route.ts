import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { db, leadsTable } from "@/lib/db";
import { CreateLeadSchema } from "@/lib/validators";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function emptyToNull(v: string | undefined | null): string | null {
  if (!v) return null;
  const t = v.trim();
  return t === "" ? null : t;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const parsed = CreateLeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Please fill in all required fields with valid information.",
      },
      { status: 400 },
    );
  }

  const input = parsed.data;
  const hasDatabase = Boolean(process.env.DATABASE_URL);

  if (!hasDatabase) {
    return NextResponse.json(
      {
        message:
          "Thanks - our enterprise team will reach out within 1 business day.",
        lead: {
          id: crypto.randomUUID(),
          name: input.name,
          email: input.email,
          company: input.company,
          phone: emptyToNull(input.phone) ?? undefined,
          teamSize: emptyToNull(input.teamSize) ?? undefined,
          trainingArea: input.trainingArea,
          message: emptyToNull(input.message) ?? undefined,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 },
    );
  }

  try {
    const [inserted] = await db
      .insert(leadsTable)
      .values({
        name: input.name,
        email: input.email,
        company: input.company,
        phone: emptyToNull(input.phone),
        teamSize: emptyToNull(input.teamSize),
        trainingArea: input.trainingArea,
        message: emptyToNull(input.message),
      })
      .returning();

    if (!inserted) throw new Error("Insert returned no row");

    return NextResponse.json(
      {
        message:
          "Thanks - our enterprise team will reach out within 1 business day.",
        lead: {
          id: inserted.id,
          name: inserted.name,
          email: inserted.email,
          company: inserted.company,
          phone: inserted.phone ?? undefined,
          teamSize: inserted.teamSize ?? undefined,
          trainingArea: inserted.trainingArea,
          message: inserted.message ?? undefined,
          createdAt: inserted.createdAt.toISOString(),
        },
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("Failed to insert lead", err);
    return NextResponse.json(
      { message: "Something went wrong on our end." },
      { status: 500 },
    );
  }
}

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json([]);
  }

  try {
    const rows = await db
      .select()
      .from(leadsTable)
      .orderBy(desc(leadsTable.createdAt))
      .limit(100);

    return NextResponse.json(
      rows.map((row) => ({
        id: row.id,
        name: row.name,
        email: row.email,
        company: row.company,
        phone: row.phone ?? undefined,
        teamSize: row.teamSize ?? undefined,
        trainingArea: row.trainingArea,
        message: row.message ?? undefined,
        createdAt: row.createdAt.toISOString(),
      })),
    );
  } catch (err) {
    console.error("Failed to list leads", err);
    return NextResponse.json(
      { message: "Something went wrong on our end." },
      { status: 500 },
    );
  }
}
