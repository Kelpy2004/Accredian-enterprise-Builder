import { Router, type IRouter } from "express";
import {
  FAQS,
  PROGRAMS,
  SOLUTIONS,
  STATS,
  TESTIMONIALS,
} from "../data/catalog";

const router: IRouter = Router();

router.get("/catalog/programs", (_req, res) => {
  res.json(PROGRAMS);
});

router.get("/catalog/solutions", (_req, res) => {
  res.json(SOLUTIONS);
});

router.get("/catalog/stats", (_req, res) => {
  res.json(STATS);
});

router.get("/catalog/testimonials", (_req, res) => {
  res.json(TESTIMONIALS);
});

router.get("/catalog/faqs", (_req, res) => {
  res.json(FAQS);
});

export default router;
