import prisma from "@/lib/prisma";

async function checkConnection(): Promise<{ ok: boolean; message: string }> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return { ok: true, message: "Connected" };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { ok: false, message };
  }
}

export default async function DbStatus() {
  // Only show in development
  if (process.env.NODE_ENV === "production") return null;

  const { ok, message } = await checkConnection();

  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 14px",
        borderRadius: "999px",
        fontSize: "12px",
        fontFamily: "monospace",
        fontWeight: 600,
        backdropFilter: "blur(8px)",
        border: `1px solid ${ok ? "#22c55e44" : "#ef444444"}`,
        background: ok ? "#052e1699" : "#450a0a99",
        color: ok ? "#4ade80" : "#f87171",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: ok ? "#4ade80" : "#f87171",
          boxShadow: ok
            ? "0 0 6px #4ade80"
            : "0 0 6px #f87171",
          flexShrink: 0,
        }}
      />
      DB: {ok ? message : `Error — ${message}`}
    </div>
  );
}
