export default function Home() {
  const phone = "9558959579";
  const wa = "https://wa.me/919558959579";
  const instagram = "https://www.instagram.com/jaydeep_talks?igsh=MTJ1M3JtN3E5djA2";
  const youtube = "https://youtube.com/@meeralogisticsjam?si=cLkcDQfjHA30WU3R";

  const card = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 24,
    padding: 26,
    boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  };

  const btn = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 800,
    margin: 6,
  };

  const loads = [
    {
      pickup: "Jamnagar",
      drop: "Ahmedabad",
      truck: "Tipper / Dumper",
      material: "Industrial Material",
      rate: "Best Rate",
    },
    {
      pickup: "Morbi",
      drop: "Surat",
      truck: "Body Truck",
      material: "Tiles / Ceramic",
      rate: "Full Load",
    },
    {
      pickup: "Dahej",
      drop: "All Gujarat",
      truck: "Truck / Dumper",
      material: "Industrial Goods",
      rate: "Contact Now",
    },
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#07111f", color: "white" }}>
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg,#07111f,#123c7c,#07111f)" }}>
        <div style={{ maxWidth: 1150, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 35, alignItems: "center" }}>
          <div>
            <p style={{ color: "#fde047", fontWeight: 700 }}>🚛 Trusted Gujarat Transport Service</p>

            <h1 style={{ fontSize: "clamp(45px,8vw,90px)", lineHeight: 1, margin: "15px 0" }}>
              MEERA <span style={{ color: "#fde047" }}>LOGISTICS</span>
            </h1>

            <p style={{ fontSize: 22, maxWidth: 750, color: "#dbeafe" }}>
              Reliable Tipper, Dumper & Truck Transport Service across Gujarat with fast and trusted logistics support.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }}>
              <a href={wa} style={{ ...btn, background: "#fde047", color: "#000" }}>WhatsApp Now</a>
              <a href={`tel:${phone}`} style={{ ...btn, border: "1px solid white", color: "white" }}>Call Now</a>
            </div>
          </div>

          <div style={{ ...card, background: "white", textAlign: "center" }}>
            <img
              src="/logo.png.jpeg"
              alt="Meera Logistics Logo"
              style={{ maxWidth: 260, width: "100%", borderRadius: 20 }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1150, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
          <div style={card}><h2 style={{ color: "#fde047" }}>24/7</h2><p>Transport Support</p></div>
          <div style={card}><h2 style={{ color: "#fde047" }}>All Gujarat</h2><p>Fast Route Service</p></div>
          <div style={card}><h2 style={{ color: "#fde047" }}>Jamnagar</h2><p>Office Location</p></div>
        </div>
      </section>

      <section style={{ padding: "70px 24px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1150, margin: "auto" }}>
          <h2 style={{ fontSize: 42 }}>Our Services</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22 }}>
            {[
              ["🚛", "Truck Service", "Reliable body truck transportation across Gujarat."],
              ["⛏️", "Tipper Service", "Construction and industrial material transport."],
              ["🏗️", "Dumper Service", "Heavy-duty dumper logistics solutions."],
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

      <section style={{ padding: "70px 24px", background: "#07111f" }}>
        <div style={{ maxWidth: 1150, margin: "auto" }}>
          <h2 style={{ fontSize: 42 }}>Today’s Available Loads</h2>
          <p style={{ color: "#cbd5e1", fontSize: 18 }}>Truck owners and drivers can apply directly on WhatsApp.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22, marginTop: 25 }}>
            {loads.map((load) => {
              const message = `Hello Meera Logistics,
I want to apply for this load.

Pickup: ${load.pickup}
Drop: ${load.drop}
Truck Type: ${load.truck}
Material: ${load.material}

My Details:
Name:
Mobile:
Vehicle Number:
Current Location:`;

              return (
                <div key={load.pickup + load.drop} style={card}>
                  <h3 style={{ color: "#fde047", fontSize: 24 }}>{load.pickup} → {load.drop}</h3>
                  <p>🚛 <b>Truck:</b> {load.truck}</p>
                  <p>📦 <b>Material:</b> {load.material}</p>
                  <p>💰 <b>Rate:</b> {load.rate}</p>

                  <a href={`https://wa.me/919558959579?text=${encodeURIComponent(message)}`} style={{ ...btn, background: "#fde047", color: "#000" }}>
                    Apply Now
                  </a>
                </div>
              );
            })}
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
            <a href={wa} style={{ ...btn, background: "#111", color: "white" }}>Send Enquiry</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1150, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          <div>
            <h2 style={{ fontSize: 40 }}>Post Your Truck</h2>
            <p style={{ color: "#cbd5e1" }}>Truck owner, driver or broker can send truck details for load matching.</p>
            <a
              href={`https://wa.me/919558959579?text=${encodeURIComponent(
                "Hello Meera Logistics,\nI want to post my truck.\n\nName:\nMobile:\nTruck Type:\nVehicle Number:\nCurrent Location:\nAvailable Route:"
              )}`}
              style={{ ...btn, background: "#fde047", color: "#000" }}
            >
              Post Truck on WhatsApp
            </a>
          </div>

          <div style={card}>
            <h2 style={{ color: "#fde047" }}>Follow Us</h2>
            <p style={{ color: "#cbd5e1" }}>Latest transport updates, loads and business posts.</p>
            <a href={instagram} target="_blank" style={{ ...btn, background: "#e1306c", color: "white" }}>Instagram</a>
            <a href={youtube} target="_blank" style={{ ...btn, background: "#ff0000", color: "white" }}>YouTube</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1150, margin: "auto" }}>
          <h2 style={{ fontSize: 40 }}>Service Areas</h2>
          <p style={{ color: "#cbd5e1", fontSize: 18 }}>
            Jamnagar, Kutch, Morbi, Ahmedabad, Vadodara, Surat, Vapi, Dahej, Limdi and all Gujarat.
          </p>
          <a href="https://www.google.com/maps/search/Jamnagar" target="_blank" style={{ ...btn, background: "#fde047", color: "#000" }}>
            View Office Location
          </a>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1150, margin: "auto" }}>
          <h2 style={{ fontSize: 40 }}>Customer Reviews</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 18 }}>
            {[
              "Fast service and professional drivers.",
              "Reliable support for industrial loads.",
              "Best tipper and dumper service in Gujarat.",
            ].map((r) => (
              <div key={r} style={card}>
                <h3 style={{ color: "#fde047" }}>★★★★★</h3>
                <p>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: 35, textAlign: "center", background: "#000" }}>
        <img src="/logo.png.jpeg" alt="Meera Logistics Logo" style={{ width: 90, borderRadius: 16, background: "white" }} />
        <h2>MEERA LOGISTICS</h2>
        <p>Trusted Transport Partner Across Gujarat 🚛</p>
        <a href={instagram} target="_blank" style={{ ...btn, background: "#e1306c", color: "white" }}>Instagram</a>
        <a href={youtube} target="_blank" style={{ ...btn, background: "#ff0000", color: "white" }}>YouTube</a>
        <a href={wa} style={{ ...btn, background: "#25d366", color: "#000" }}>WhatsApp</a>
        <p style={{ color: "#fde047", fontWeight: 800 }}>📞 {phone}</p>
      </footer>
    </main>
  );
}
