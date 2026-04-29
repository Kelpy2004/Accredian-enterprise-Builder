import { Router, type IRouter } from "express";
import { desc } from "drizzle-orm";
import { db, leadsTable } from "@workspace/db";
import { CreateLeadBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/leads", async (req, res) => {
  const parsed = CreateLeadBody.safeParse(req.body);

  if (!parsed.success) {
    req.log.warn({ issues: parsed.error.issues }, "Invalid lead payload");
    return res.status(400).json({
      message: "Please fill in all required fields with valid information.",
    });
  }

  const input = parsed.data;

  try {
    const [inserted] = await db
      .insert(leadsTable)
      .values({
        name: input.name,
        email: input.email,
        company: input.company,
        phone: input.phone ?? null,
        teamSize: input.teamSize ?? null,
        trainingArea: input.trainingArea,
        message: input.message ?? null,
      })
      .returning();

    if (!inserted) {
      throw new Error("Insert returned no row");
    }

    return res.status(201).json({
      message: "Thanks — our enterprise team will reach out within 1 business day.",
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
    });
  } catch (err) {
    req.log.error({ err }, "Failed to insert lead");
    return res.status(500).json({ message: "Something went wrong on our end." });
  }
});

router.get("/leads", async (req, res) => {
  try {
    const rows = await db
      .select()
      .from(leadsTable)
      .orderBy(desc(leadsTable.createdAt))
      .limit(100);

    return res.json(
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
    req.log.error({ err }, "Failed to list leads");
    return res.status(500).json({ message: "Something went wrong on our end." });
  }
});

export default router;
