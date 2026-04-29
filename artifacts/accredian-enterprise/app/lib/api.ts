"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  Faq,
  Program,
  Solution,
  Stats,
  Testimonial,
} from "./data";

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  teamSize?: string;
  trainingArea: string;
  message?: string;
  createdAt: string;
};

export type CreateLeadInput = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  teamSize?: string;
  trainingArea: string;
  message?: string;
};

async function jsonFetch<T>(input: string, init?: RequestInit): Promise<T> {
  const res = await fetch(input, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
      ...(init?.headers || {}),
    },
  });

  if (!res.ok) {
    let message = `Request failed: ${res.status}`;
    try {
      const data = (await res.json()) as { message?: string };
      if (data?.message) message = data.message;
    } catch {
      // ignore parse errors
    }
    throw new Error(message);
  }

  if (res.status === 204) return null as T;
  return (await res.json()) as T;
}

export function usePrograms() {
  return useQuery({
    queryKey: ["catalog", "programs"],
    queryFn: () => jsonFetch<Program[]>("/api/catalog/programs"),
  });
}

export function useSolutions() {
  return useQuery({
    queryKey: ["catalog", "solutions"],
    queryFn: () => jsonFetch<Solution[]>("/api/catalog/solutions"),
  });
}

export function useStats() {
  return useQuery({
    queryKey: ["catalog", "stats"],
    queryFn: () => jsonFetch<Stats>("/api/catalog/stats"),
  });
}

export function useTestimonials() {
  return useQuery({
    queryKey: ["catalog", "testimonials"],
    queryFn: () => jsonFetch<Testimonial[]>("/api/catalog/testimonials"),
  });
}

export function useFaqs() {
  return useQuery({
    queryKey: ["catalog", "faqs"],
    queryFn: () => jsonFetch<Faq[]>("/api/catalog/faqs"),
  });
}

export function useLeads() {
  return useQuery({
    queryKey: ["leads"],
    queryFn: () => jsonFetch<Lead[]>("/api/leads"),
  });
}

export function useCreateLead() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateLeadInput) =>
      jsonFetch<{ message: string; lead: Lead }>("/api/leads", {
        method: "POST",
        body: JSON.stringify(input),
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}
