export async function GET() {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkd_xAI950g4oK8T-ffX5foU2bk4KTcFqCHAoUtiQ8cx_bakYxWEyQkr_VBxHflm2seVpLsop4Wx51/pub?gid=0&single=true&output=csv";

  try {
    const res = await fetch(SHEET_URL, { next: { revalidate: 60 } });
    const csv = await res.text();

    const parseCSV = (text) => {
      const rows = [];
      const lines = text.trim().split("\n");
      for (const line of lines) {
        const cols = [];
        let cur = "";
        let inQuote = false;
        for (let i = 0; i < line.length; i++) {
          const ch = line[i];
          if (ch === '"') { inQuote = !inQuote; }
          else if (ch === "," && !inQuote) { cols.push(cur.trim()); cur = ""; }
          else { cur += ch; }
        }
        cols.push(cur.trim());
        rows.push(cols);
      }
      return rows;
    };

    const rows = parseCSV(csv);
    const safeMapUrl = (value) => {
      const url = (value || "").trim();
      return /^https:\/\/(maps\.app\.goo\.gl|www\.google\.com\/maps|maps\.google\.com)\//i.test(url)
        ? url
        : "";
    };

    const loads = rows.slice(1)
      .filter((cols) => cols[0] && cols[1])
      .map((cols) => ({
        from: cols[0] || "",
        to: cols[1] || "",
        truck: cols[2] || "",
        material: cols[3] || "",
        time: cols[4] || "",
        rate: cols[5] || "",
        loadingMap: safeMapUrl(cols[6]),
        unloadingMap: safeMapUrl(cols[7]),
      }));

    return Response.json({ loads });
  } catch (err) {
    return Response.json({ loads: [], error: err.message }, { status: 500 });
  }
}
