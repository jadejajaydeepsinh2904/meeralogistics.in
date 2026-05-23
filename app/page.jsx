export default function Home() {
  const services = [
    "Tipper Transport",
    "Dumper Service",
    "Truck Booking",
    "Return Load",
    "Fleet Management",
    "Gujarat Transport",
  ];

  const loads = [
    ["Jamnagar", "Ahmedabad", "Tipper", "આજ સાંજ 5 PM"],
    ["Ahmedabad", "Jamnagar", "Dumper", "કાલ સવારે 7 AM"],
    ["Jamnagar", "Surat", "Body Truck", "આજ રાત 9 PM"],
    ["Dahej", "Jamnagar", "Dumper", "કાલ સવારે 6 AM"],
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f4f7ff", color: "#0f172a" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg,#071a4f,#0d2a6b,#123c7c)",
        color: "white",
        padding: "55px 20px",
        textAlign: "center",
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45
      }}>
       <img
  src="/logo.png"
  alt="Meera Logistics"
  style={{
    width: 90,
    height: 90,
    objectFit: "contain",
    background: "white",
    borderRadius: 20,
    padding: 6,
    marginBottom: 18,
    border: "3px solid rgba(255,255,255,0.2)"
  }}
/>

        <div style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.12)",
          padding: "7px 18px",
          borderRadius: 25,
          fontWeight: 800,
          fontSize: 13,
          marginBottom: 18
        }}>
          🚛 Trusted Gujarat Transport Service
        </div>

        <h1 style={{ fontSize: "clamp(36px,8vw,72px)", margin: 0, fontWeight: 900 }}>
          MEERA <span style={{ color: "#ffd84d" }}>LOGISTICS</span>
        </h1>

        <p style={{ fontSize: 20, color: "#c8d9ff", maxWidth: 700, margin: "18px auto" }}>
          Reliable Tipper, Dumper & Truck Transport Service across Gujarat with fast and trusted logistics support.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
          <a href="tel:9558959579" style={btnBlue}>📞 Call Now</a>
          <a href="#return-load" style={btnGreen}>🔄 Return Load Board</a>
          <a href="https://wa.me/919558959579" target="_blank" style={btnWhite}>📲 WhatsApp</a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <p style={badge}>OUR SERVICES</p>
        <h2 style={title}>Transport Solutions</h2>

        <div style={grid}>
          {services.map((s, i) => (
            <div key={i} style={card}>
              <div style={{ fontSize: 34 }}>🚛</div>
              <h3>{s}</h3>
              <p style={muted}>Professional logistics service for daily transport and business loads.</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section style={{ ...section, background: "#e8f0fe" }}>
        <p style={badge}>BOOKING</p>
        <h2 style={title}>Book Your Truck</h2>

        <div style={{
          maxWidth: 700,
          margin: "auto",
          background: "white",
          padding: 25,
          borderRadius: 24,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}>
          <input style={input} placeholder="Loading Point" />
          <input style={input} placeholder="Unloading Point" />
          <input style={input} placeholder="Goods Details" />
          <select style={input}>
            <option>Select Truck</option>
            <option>Tipper</option>
            <option>Dumper</option>
            <option>Body Truck</option>
          </select>

          <a
            href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20Mane%20Truck%20Book%20Karvu%20Chhe"
            target="_blank"
            style={{ ...btnGreen, display: "block", textAlign: "center", marginTop: 10 }}
          >
            📲 Send Booking on WhatsApp
          </a>
        </div>
      </section>

      {/* RETURN LOAD */}
      <section id="return-load" style={section}>
        <p style={badge}>NEW SERVICE — FREE</p>
        <h2 style={title}>Return Load Board</h2>
        <p style={{ ...muted, textAlign: "center", maxWidth: 650, margin: "0 auto 28px" }}>
          Delivery complete? ખાલી ન જાવ — Gujarat ભરમાં Return Load instantly મેળવો.
        </p>

        <div style={grid}>
          {loads.map((l, i) => (
            <div key={i} style={{ ...card, border: "2px solid #d4e0f7" }}>
              <div style={{ background: "#e8f0fe", color: "#1341b0", padding: "6px 12px", borderRadius: 20, display: "inline-block", fontWeight: 800 }}>
                🔄 Return Load Available
              </div>

              <h3 style={{ fontSize: 24 }}>
                {l[0]} <span style={{ color: "#1a56db" }}>→</span> {l[1]}
              </h3>

              <p>🚛 Truck Type: <b>{l[2]}</b></p>
              <p>⏰ Available: <b>{l[3]}</b></p>
              <p>💰 Rate: <b>Best / Negotiate</b></p>

              <a
                href={`https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20Return%20Load%20Book%20Karvu%20Chhe%0ARoute%3A%20${l[0]}%20to%20${l[1]}%0ATruck%3A%20${l[2]}`}
                target="_blank"
                style={{ ...btnGreen, display: "inline-block", marginTop: 12 }}
              >
                📲 Book Now
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 30 }}>
          <a
            href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20Mare%20Return%20Truck%20Post%20Karvu%20Chhe"
            target="_blank"
            style={btnBlue}
          >
            🚛 Return Truck Post કરો — Free
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{
        background: "#071a4f",
        color: "white",
        padding: "45px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: 34 }}>Contact Meera Logistics</h2>
        <p>📍 Jamnagar, Gujarat</p>
        <p>📞 9558959579</p>
        <p>🌐 meeralogistics.in</p>

        <a href="https://wa.me/919558959579" target="_blank" style={btnGreen}>
          📲 WhatsApp Contact
        </a>
      </section>

      <footer style={{ background: "#020617", color: "#94a3b8", textAlign: "center", padding: 18 }}>
        © 2026 Meera Logistics. All Rights Reserved.
      </footer>
    </main>
  );
}

const section = {
  padding: "55px 20px",
  maxWidth: 1150,
  margin: "auto"
};

const title = {
  fontSize: "clamp(30px,6vw,46px)",
  textAlign: "center",
  color: "#0d2a6b",
  marginTop: 0
};

const badge = {
  textAlign: "center",
  color: "#1a56db",
  fontWeight: 900,
  letterSpacing: 1.5
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 18
};

const card = {
  background: "white",
  padding: 24,
  borderRadius: 24,
  boxShadow: "0 8px 28px rgba(26,86,219,0.10)"
};

const muted = {
  color: "#64748b",
  lineHeight: 1.6
};

const input = {
  width: "100%",
  padding: 15,
  marginBottom: 12,
  borderRadius: 14,
  border: "2px solid #d4e0f7",
  fontSize: 16
};

const btnBlue = {
  background: "#1a56db",
  color: "white",
  padding: "14px 26px",
  borderRadius: 16,
  textDecoration: "none",
  fontWeight: 900
};

const btnGreen = {
  background: "#16a34a",
  color: "white",
  padding: "14px 26px",
  borderRadius: 16,
  textDecoration: "none",
  fontWeight: 900
};

const btnWhite = {
  background: "white",
  color: "#0d2a6b",
  padding: "14px 26px",
  borderRadius: 16,
  textDecoration: "none",
  fontWeight: 900
};
