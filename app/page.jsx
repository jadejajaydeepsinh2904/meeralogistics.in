export default function Home() {
  const phone = "9558959579";
  const whatsapp = "https://wa.me/919558959579";
  const instagram = "https://www.instagram.com/jaydeep_talks?igsh=MTJ1M3JtN3E5djA2";
  const youtube = "https://youtube.com/@meeralogisticsjam?si=cLkcDQfjHA30WU3R";

  const btn = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 800,
    margin: 6,
  };

  const card = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 22,
    padding: 26,
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  };

  const loads = [
    ["Jamnagar", "Ahmedabad", "Tipper / Dumper", "Industrial Material"],
    ["Morbi", "Surat", "Body Truck", "Tiles / Ceramic"],
    ["Dahej", "All Gujarat", "Truck / Dumper", "Industrial Goods"],
  ];

  return (
    <main style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#06111f", color: "white" }}>
      <header style={{ padding: "18px 24px", background: "#020617", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1200, margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 15 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/logo.jpg" alt="Meera Logistics Logo" style={{ width: 54, height: 54, borderRadius: 12, objectFit: "cover", background: "white" }} />
            <b style={{ fontSize: 22 }}>MEERA LOGISTICS</b>
          </div>
          <a href={whatsapp} style={{ ...btn, background: "#facc15", color: "#000" }}>WhatsApp</a>
        </div>
      </header>

      <section style={{ padding: "90px 24px", background: "linear-gradient(135deg,#020617,#0f3b73,#06111f)" }}>
        <div style={{ maxWidth: 1200, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 35, alignItems: "center" }}>
          <div>
            <p style={{ color: "#facc15", fontWeight: 900 }}>GUJARAT TRANSPORT NETWORK</p>
            <h1 style={{ fontSize: "clamp(46px,8vw,88px)", lineHeight: 1, margin: 0 }}>
              Fast Transport. <br />
              <span style={{ color: "#facc15" }}>Reliable Loads.</span>
            </h1>
            <p style={{ color: "#dbeafe", fontSize: 21, maxWidth: 760 }}>
              Meera Logistics provides Tipper, Dumper and Truck service all over Gujarat from Jamnagar.
              Industrial, construction and bulk load movement with quick response.
            </p>
            <a href={whatsapp} style={{ ...btn, background: "#facc15", color: "#000" }}>Get Transport Quote</a>
            <a href={`tel:${phone}`} style={{ ...btn, border: "1px solid white", color: "white" }}>Call Now</a>
          </div>

          <div style={{ ...card, background: "white", color: "#111", textAlign: "center" }}>
            <img src="/logo.jpg" alt="Meera Logistics" style={{ maxWidth: 230, width: "100%", borderRadius: 18 }} />
            <h2 style={{ color: "#0f3b73" }}>MEERA LOGISTICS</h2>
            <p><b>Tipper • Dumper • Truck</b></p>
            <p>📍 Jamnagar | 🌍 All Gujarat</p>
            <p>📞 {phone}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 24px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1200, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 18 }}>
          {["24/7 Response", "All Gujarat Service", "Bulk Load Support", "Trusted Network"].map((x) => (
            <div key={x} style={card}><h3 style={{ color: "#facc15" }}>✅ {x}</h3></div>
          ))}
        </div>
      </section>

      <section style={{ padding: "70px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "auto" }}>
          <h2 style={{ fontSize: 42 }}>Our Transport Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22 }}>
            {[
              ["🚛", "Truck Service", "Body truck transport for commercial and industrial routes."],
              ["⛏️", "Tipper Service", "Sand, stone, construction material and industrial loads."],
              ["🏗️", "Dumper Service", "Heavy bulk movement for Gujarat industrial areas."],
            ].map(([icon, title, text]) => (
              <div key={title} style={card}>
                <div style={{ fontSize: 48 }}>{icon}</div>
                <h3>{title}</h3>
                <p style={{ color: "#cbd5e1" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1200, margin: "auto" }}>
          <h2 style={{ fontSize: 42 }}>Today’s Available Loads</h2>
          <p style={{ color: "#cbd5e1" }}>Truck owners can apply directly on WhatsApp.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
            {loads.map(([pickup, drop, truck, material]) => {
              const msg = `Hello Meera Logistics,
I want to apply for this load.

Pickup: ${pickup}
Drop: ${drop}
Truck Type: ${truck}
Material: ${material}

My Details:
Name:
Mobile:
Vehicle Number:
Current Location:`;

              return (
                <div key={pickup + drop} style={card}>
                  <h3 style={{ color: "#facc15", fontSize: 24 }}>{pickup} → {drop}</h3>
                  <p>🚛 <b>Truck:</b> {truck}</p>
                  <p>📦 <b>Material:</b> {material}</p>
                  <p>💰 <b>Rate:</b> Contact Now</p>
                  <a href={`https://wa.me/919558959579?text=${encodeURIComponent(msg)}`} style={{ ...btn, background: "#facc15", color: "#000" }}>
                    Apply Now
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: "75px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 28 }}>
          <div>
            <h2 style={{ fontSize: 42 }}>Post Your Truck</h2>
            <p style={{ color: "#cbd5e1", fontSize: 18 }}>
              Truck owner, driver or broker can send truck details for load matching.
            </p>
            <a
              href={`https://wa.me/919558959579?text=${encodeURIComponent(
                "Hello Meera Logistics,\nI want to post my truck.\n\nName:\nMobile:\nTruck Type:\nVehicle Number:\nCurrent Location:\nAvailable Route:"
              )}`}
              style={{ ...btn, background: "#facc15", color: "#000" }}
            >
              Post Truck on WhatsApp
            </a>
          </div>

          <div style={{ background: "linear-gradient(135deg,#facc15,#f59e0b)", color: "#111", borderRadius: 26, padding: 32 }}>
            <h2>Contact Meera Logistics</h2>
            <p><b>📍 Office:</b> Jamnagar</p>
            <p><b>📞 Mobile:</b> {phone}</p>
            <p><b>🚛 Service:</b> Tipper / Dumper / Truck</p>
            <p><b>🌍 Coverage:</b> All Gujarat</p>
            <a href={whatsapp} style={{ ...btn, background: "#111", color: "white" }}>Send Enquiry</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1200, margin: "auto" }}>
          <h2 style={{ fontSize: 42 }}>Service Areas</h2>
          <p style={{ color: "#cbd5e1", fontSize: 18 }}>
            Jamnagar, Kutch, Morbi, Ahmedabad, Vadodara, Surat, Vapi, Dahej, Limdi and all Gujarat industrial routes.
          </p>
          <a href="https://www.google.com/maps/search/Jamnagar" target="_blank" style={{ ...btn, background: "#facc15", color: "#000" }}>
            View Location
          </a>
        </div>
      </section>

      <section style={{ padding: "70px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "auto" }}>
          <h2 style={{ fontSize: 42 }}>Why Choose Us?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22 }}>
            {[
              "Fast response for urgent loads",
              "Tipper, dumper and truck network",
              "All Gujarat transport coverage",
              "Direct WhatsApp apply system",
            ].map((x) => (
              <div key={x} style={card}>
                <h3 style={{ color: "#facc15" }}>★ {x}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: 40, textAlign: "center", background: "#020617" }}>
        <h2>MEERA LOGISTICS</h2>
        <p>Trusted Transport Partner Across Gujarat 🚛</p>

        <div style={{ margin: "18px 0" }}>
          <a href={instagram} target="_blank" style={{ ...btn, background: "#e1306c", color: "white" }}>Instagram</a>
          <a href={youtube} target="_blank" style={{ ...btn, background: "#ff0000", color: "white" }}>YouTube</a>
          <a href={whatsapp} style={{ ...btn, background: "#25d366", color: "#000" }}>WhatsApp</a>
        </div>

        <p style={{ color: "#facc15", fontWeight: 800 }}>📞 {phone}</p>
      </footer>
    </main>
  );
}
