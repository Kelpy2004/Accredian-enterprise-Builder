"use client";

import { useLeads, type Lead } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Download, Inbox, Loader2 } from "lucide-react";
import Link from "next/link";

function toCsv(leads: Lead[]): string {
  const headers = [
    "id",
    "createdAt",
    "name",
    "email",
    "company",
    "phone",
    "teamSize",
    "trainingArea",
    "message",
  ];
  const escape = (v: unknown) => {
    const s = v === undefined || v === null ? "" : String(v);
    if (s.includes(",") || s.includes("\"") || s.includes("\n")) {
      return `"${s.replace(/"/g, '""')}"`;
    }
    return s;
  };
  const rows = leads.map((l) =>
    [
      l.id,
      l.createdAt,
      l.name,
      l.email,
      l.company,
      l.phone ?? "",
      l.teamSize ?? "",
      l.trainingArea,
      l.message ?? "",
    ]
      .map(escape)
      .join(","),
  );
  return [headers.join(","), ...rows].join("\n");
}

function formatDate(input: string): string {
  const d = new Date(input);
  return d.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function AdminLeadsPage() {
  const { data: leads, isLoading, isError, error } = useLeads();

  function handleExport() {
    if (!leads || leads.length === 0) return;
    const csv = toCsv(leads);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `accredian-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Accredian Enterprise
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mt-1">
              Lead Inbox
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Captured demo requests from the landing page form.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Back to site
            </Link>
            <Button
              onClick={handleExport}
              disabled={!leads || leads.length === 0}
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            >
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8">
        {isLoading && (
          <div className="flex items-center justify-center py-24 text-slate-500">
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            Loading leads…
          </div>
        )}

        {isError && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
            Failed to load leads. {error instanceof Error ? error.message : ""}
          </div>
        )}

        {!isLoading && !isError && leads && leads.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <Inbox className="h-6 w-6 text-slate-400" />
            </div>
            <h2 className="text-lg font-semibold text-slate-900">
              No leads yet
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">
              Submissions from the landing page lead form will appear here in
              real time.
            </p>
          </div>
        )}

        {!isLoading && !isError && leads && leads.length > 0 && (
          <>
            <div className="mb-4 text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {leads.length}
              </span>{" "}
              lead{leads.length === 1 ? "" : "s"}.
            </div>

            <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="text-left font-medium px-5 py-3">
                        Submitted
                      </th>
                      <th className="text-left font-medium px-5 py-3">
                        Name
                      </th>
                      <th className="text-left font-medium px-5 py-3">
                        Company
                      </th>
                      <th className="text-left font-medium px-5 py-3">
                        Email
                      </th>
                      <th className="text-left font-medium px-5 py-3">
                        Training Area
                      </th>
                      <th className="text-left font-medium px-5 py-3">
                        Team Size
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50/60">
                        <td className="px-5 py-4 text-slate-500 whitespace-nowrap">
                          {formatDate(lead.createdAt)}
                        </td>
                        <td className="px-5 py-4 text-slate-900 font-medium">
                          {lead.name}
                          {lead.phone && (
                            <div className="text-xs text-slate-500 font-normal">
                              {lead.phone}
                            </div>
                          )}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {lead.company}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-blue-600 hover:underline"
                          >
                            {lead.email}
                          </a>
                        </td>
                        <td className="px-5 py-4">
                          <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2.5 py-0.5 text-xs font-medium">
                            {lead.trainingArea}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {lead.teamSize || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="md:hidden grid grid-cols-1 gap-3">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-slate-900">
                        {lead.name}
                      </div>
                      <div className="text-sm text-slate-500">
                        {lead.company}
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2.5 py-0.5 text-xs font-medium whitespace-nowrap">
                      {lead.trainingArea}
                    </span>
                  </div>
                  <div className="mt-3 space-y-1 text-sm">
                    <div className="text-slate-700">
                      <a
                        href={`mailto:${lead.email}`}
                        className="text-blue-600 hover:underline break-all"
                      >
                        {lead.email}
                      </a>
                    </div>
                    {lead.phone && (
                      <div className="text-slate-600">{lead.phone}</div>
                    )}
                    {lead.teamSize && (
                      <div className="text-slate-500 text-xs">
                        Team size: {lead.teamSize}
                      </div>
                    )}
                  </div>
                  {lead.message && (
                    <p className="mt-3 text-sm text-slate-600 border-t border-slate-100 pt-3 line-clamp-3">
                      {lead.message}
                    </p>
                  )}
                  <div className="mt-3 text-xs text-slate-400">
                    {formatDate(lead.createdAt)}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
