export default function Home() {
  const phone = "9558959579";
  const wa = "https://wa.me/919558959579";

  const card = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 24,
    padding: 26,
    boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#07111f", color: "white" }}>
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg,#07111f,#123c7c,#07111f)" }}>
        <div style={{ maxWidth: 1150, margin: "auto", display: "grid", gap: 35 }}>
          <p style={{ color: "#fde047", fontWeight: 700 }}>🚛 Trusted Gujarat Transport Service</p>
          <h1 style={{ fontSize: "clamp(44px,8vw,86px)", lineHeight: 1, margin: 0 }}>
            MEERA <span style={{ color: "#fde047" }}>LOGISTICS</span>
          </h1>
          <p style={{ fontSize: 22, maxWidth: 760, color: "#dbeafe" }}>
            Reliable Tipper, Dumper & Truck Transport Service across Gujarat. Fast delivery,
            industrial transport, bulk movement and trusted logistics support.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={wa} style={{ background: "#fde047", color: "#000", padding: "15px 24px", borderRadius: 16, textDecoration: "none", fontWeight: 800 }}>WhatsApp Now</a>
            <a href={`tel:${phone}`} style={{ border: "1px solid white", color: "white", padding: "15px 24px", borderRadius: 16, textDecoration: "none", fontWeight: 800 }}>Call Now</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "55px 24px" }}>
        <div style={{ maxWidth: 1150, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
          <div style={card}><h2 style={{ color: "#fde047" }}>24/7</h2><p>Transport Support</p></div>
          <div style={card}><h2 style={{ color: "#fde047" }}>All Gujarat</h2><p>Fast Route Service</p></div>
          <div style={card}><h2 style={{ color: "#fde047" }}>Jamnagar</h2><p>Office Location</p></div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1150, margin: "auto" }}>
          <h2 style={{ fontSize: 42 }}>Our Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22 }}>
            {[
              ["🚛", "Truck Service", "Reliable body truck transportation for all types of goods across Gujarat."],
              ["⛏️", "Tipper Service", "Construction material transport including sand, stone and industrial loads."],
              ["🏗️", "Dumper Service", "Heavy-duty dumper logistics solutions for bulk and industrial transport."],
            ].map(([icon, title, text]) => (
              <div key={title} style={card}>
                <div style={{ fontSize: 46 }}>{icon}</div>
                <h3 style={{ fontSize: 25 }}>{title}</h3>
                <p style={{ color: "#cbd5e1" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px" }}>
        <div style={{ maxWidth: 1150, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 25 }}>
          <div>
            <h2 style={{ fontSize: 42 }}>Serving All Over Gujarat</h2>
            <p style={{ color: "#cbd5e1", fontSize: 18 }}>
              Jamnagar, Kutch, Morbi, Ahmedabad, Vadodara, Surat, Vapi, Dahej and all major industrial areas.
            </p>
            <p>✅ Fast Industrial Transport</p>
            <p>✅ Bulk Load Movement</p>
            <p>✅ Experienced Drivers</p>
            <p>✅ On-Time Delivery</p>
          </div>

          <div style={{ background: "linear-gradient(135deg,#fde047,#f59e0b)", color: "#111", borderRadius: 28, padding: 32 }}>
            <h2>Book Transport</h2>
            <p><b>📍 Office:</b> Jamnagar</p>
            <p><b>📞 Mobile:</b> {phone}</p>
            <p><b>🚛 Service:</b> Tipper / Dumper / Truck</p>
            <p><b>🌍 Coverage:</b> All Gujarat</p>
            <a href={wa} style={{ display: "inline-block", marginTop: 18, background: "#111", color: "white", padding: "14px 22px", borderRadius: 14, textDecoration: "none", fontWeight: 800 }}>Send Enquiry</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1150, margin: "auto" }}>
          <h2 style={{ fontSize: 40 }}>Customer Reviews</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 18 }}>
            {["Fast service and professional drivers.", "Reliable support for industrial loads.", "Best tipper and dumper service in Gujarat."].map((r) => (
              <div key={r} style={card}>
                <h3 style={{ color: "#fde047" }}>★★★★★</h3>
                <p>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: 35, textAlign: "center", background: "#000" }}>
        <h2>MEERA LOGISTICS</h2>
        <p>Trusted Transport Partner Across Gujarat 🚛</p>
        <a href={wa} style={{ color: "#fde047", fontWeight: 800 }}>WhatsApp: {phone}</a>
      </footer>
    </main>
  );
}
