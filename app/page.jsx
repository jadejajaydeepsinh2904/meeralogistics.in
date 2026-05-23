"use client";
import { useState, useEffect } from "react";



const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Noto+Sans+Gujarati:wght@400;700&display=swap');

  :root {
    --navy: #071a4f;
    --navy2: #0d2a6b;
    --blue: #1a56db;
    --blue2: #1341b0;
    --gold: #f5b500;
    --gold2: #ffd84d;
    --green: #16a34a;
    --green2: #15803d;
    --white: #ffffff;
    --bg: #f0f4ff;
    --bg2: #e4ecfe;
    --text: #0f172a;
    --muted: #475569;
    --border: #c7d9f8;
    --card-shadow: 0 4px 24px rgba(26,86,219,0.10);
  }

  html { scroll-behavior: smooth; }

  .ml-body {
    font-family: 'Rajdhani', 'Noto Sans Gujarati', sans-serif;
    background: var(--bg);
    color: var(--text);
    font-size: 16px;
    line-height: 1.6;
  }

  .ml-nav {
    background: var(--white);
    border-bottom: 2px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    box-shadow: 0 2px 12px rgba(26,86,219,0.08);
  }
  .ml-nav-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    text-decoration: none;
  }
  .ml-nav-logo {
    width: 48px; height: 48px;
    object-fit: contain;
    border-radius: 10px;
    border: 2px solid var(--border);
    background: var(--white);
  }
  .ml-nav-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 26px;
    color: var(--navy);
    letter-spacing: 2px;
  }
  .ml-nav-title span { color: var(--blue); }
  .ml-nav-links {
    display: flex;
    gap: 6px;
    align-items: center;
    flex-wrap: wrap;
  }
  .ml-nav-links a {
    color: var(--navy2);
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    padding: 8px 14px;
    border-radius: 8px;
    transition: background 0.2s, color 0.2s;
  }
  .ml-nav-links a:hover { background: var(--bg2); color: var(--blue); }

  .ml-hero {
    background: linear-gradient(135deg, #020d2e 0%, #071a4f 40%, #0e2e72 70%, #123c7c 100%);
    color: white;
    padding: 64px 20px 72px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .ml-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 50%, rgba(26,86,219,0.18) 0%, transparent 55%),
      radial-gradient(circle at 80% 20%, rgba(245,181,0,0.10) 0%, transparent 50%);
    pointer-events: none;
  }
  .ml-hero-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
  }
  .ml-hero-inner { position: relative; z-index: 1; max-width: 900px; margin: auto; }
  .ml-hero-logo {
    width: 100px; height: 100px;
    object-fit: contain;
    background: white;
    border-radius: 22px;
    padding: 8px;
    margin-bottom: 22px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  }
  .ml-hero-badge {
    display: inline-block;
    background: rgba(245,181,0,0.18);
    border: 1px solid rgba(245,181,0,0.4);
    color: var(--gold2);
    padding: 6px 18px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .ml-hero h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(52px, 12vw, 96px);
    letter-spacing: 4px;
    line-height: 1;
    margin-bottom: 8px;
    color: white;
  }
  .ml-hero h1 span { color: var(--gold2); }
  .ml-hero-sub {
    font-size: clamp(15px, 3vw, 20px);
    color: #bdd0ff;
    max-width: 680px;
    margin: 18px auto 32px;
    font-weight: 500;
  }
  .ml-hero-stats {
    display: flex;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
    margin-bottom: 36px;
  }
  .ml-hero-stat { text-align: center; }
  .ml-hero-stat-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 38px;
    color: var(--gold2);
    line-height: 1;
  }
  .ml-hero-stat-label { font-size: 12px; color: #8aaee0; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
  .ml-hero-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

  .ml-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 26px;
    border-radius: 12px;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: transform 0.15s, opacity 0.15s;
    white-space: nowrap;
  }
  .ml-btn:hover { transform: translateY(-2px); opacity: 0.93; }
  .ml-btn:active { transform: scale(0.97); }
  .ml-btn-blue { background: var(--blue); color: white; box-shadow: 0 4px 16px rgba(26,86,219,0.35); }
  .ml-btn-green { background: var(--green); color: white; box-shadow: 0 4px 16px rgba(22,163,74,0.35); }
  .ml-btn-gold { background: var(--gold); color: var(--navy); box-shadow: 0 4px 16px rgba(245,181,0,0.30); font-weight: 800; }
  .ml-btn-outline { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.4); }
  .ml-btn-full { width: 100%; justify-content: center; font-size: 18px; padding: 16px; }

  .ml-section { padding: 64px 20px; }
  .ml-section-inner { max-width: 1150px; margin: auto; }
  .ml-sec-badge {
    text-align: center;
    color: var(--blue);
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .ml-sec-title {
    text-align: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(32px, 6vw, 52px);
    color: var(--navy);
    letter-spacing: 2px;
    margin-bottom: 12px;
  }
  .ml-sec-sub {
    text-align: center;
    color: var(--muted);
    max-width: 600px;
    margin: 0 auto 40px;
    font-size: 16px;
  }

  .ml-services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }
  .ml-svc-card {
    background: white;
    border-radius: 20px;
    padding: 28px 22px;
    box-shadow: var(--card-shadow);
    border: 1.5px solid var(--border);
    transition: transform 0.2s, box-shadow 0.2s;
    text-align: center;
  }
  .ml-svc-card:hover { transform: translateY(-5px); box-shadow: 0 12px 36px rgba(26,86,219,0.16); }
  .ml-svc-icon {
    width: 60px; height: 60px;
    background: var(--bg2);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin: 0 auto 16px;
    border: 1.5px solid var(--border);
  }
  .ml-svc-card h3 { font-size: 18px; font-weight: 700; color: var(--navy2); margin-bottom: 8px; }
  .ml-svc-card p { font-size: 14px; color: var(--muted); line-height: 1.6; }

  .ml-whyus { background: var(--navy); color: white; }
  .ml-whyus .ml-sec-title { color: white; }
  .ml-whyus .ml-sec-sub { color: #8aaee0; }
  .ml-whyus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }
  .ml-why-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 18px;
    padding: 26px 20px;
    text-align: center;
  }
  .ml-why-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 48px;
    color: var(--gold2);
    line-height: 1;
    margin-bottom: 6px;
  }
  .ml-why-card h3 { font-size: 17px; font-weight: 700; color: white; margin-bottom: 8px; }
  .ml-why-card p { font-size: 14px; color: #8aaee0; }

  .ml-booking-bg { background: linear-gradient(135deg, var(--bg2) 0%, #d6e6ff 100%); }
  .ml-booking-card {
    max-width: 680px;
    margin: auto;
    background: white;
    border-radius: 28px;
    padding: 36px 32px;
    box-shadow: 0 12px 48px rgba(26,86,219,0.13);
    border: 1.5px solid var(--border);
  }
  .ml-form-group { margin-bottom: 16px; }
  .ml-form-group label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    color: var(--navy2);
    margin-bottom: 6px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .ml-form-group input,
  .ml-form-group select {
    width: 100%;
    padding: 13px 16px;
    border-radius: 12px;
    border: 2px solid var(--border);
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    color: var(--text);
    background: var(--bg);
    transition: border-color 0.2s;
    outline: none;
  }
  .ml-form-group input:focus,
  .ml-form-group select:focus { border-color: var(--blue); background: white; }
  .ml-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  .ml-loads-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 22px;
  }
  .ml-load-card {
    background: white;
    border-radius: 22px;
    padding: 26px 22px;
    box-shadow: var(--card-shadow);
    border: 2px solid var(--border);
    transition: transform 0.2s, border-color 0.2s;
  }
  .ml-load-card:hover { transform: translateY(-4px); border-color: var(--blue); }
  .ml-load-badge {
    display: inline-block;
    background: #dbeafe;
    color: var(--blue2);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 20px;
    margin-bottom: 14px;
  }
  .ml-load-route {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 26px;
    color: var(--navy);
    letter-spacing: 1px;
    margin-bottom: 14px;
    line-height: 1.1;
  }
  .ml-load-route span { color: var(--blue); }
  .ml-load-info { font-size: 15px; color: var(--text); margin-bottom: 6px; font-weight: 500; }
  .ml-load-info strong { color: var(--navy2); }
  .ml-load-rate {
    display: inline-block;
    background: #dcfce7;
    color: var(--green2);
    font-size: 13px;
    font-weight: 700;
    padding: 5px 14px;
    border-radius: 20px;
    margin: 8px 0 16px;
  }

  .ml-post-truck-banner {
    background: linear-gradient(135deg, var(--blue), var(--navy2));
    color: white;
    border-radius: 24px;
    padding: 36px 32px;
    text-align: center;
    margin-top: 48px;
    box-shadow: 0 8px 32px rgba(26,86,219,0.25);
  }
  .ml-post-truck-banner h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 32px;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
  .ml-post-truck-banner p { color: #c8d9ff; margin-bottom: 22px; }

  .ml-areas-bg { background: var(--bg2); }
  .ml-areas-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 32px;
  }
  .ml-area-pill {
    background: white;
    border: 2px solid var(--border);
    color: var(--navy2);
    font-weight: 700;
    font-size: 15px;
    padding: 9px 20px;
    border-radius: 50px;
    box-shadow: 0 2px 8px rgba(26,86,219,0.07);
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    cursor: default;
  }
  .ml-area-pill:hover { background: var(--blue); color: white; border-color: var(--blue); }

  .ml-reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }
  .ml-review-card {
    background: white;
    border-radius: 20px;
    padding: 26px 22px;
    box-shadow: var(--card-shadow);
    border: 1.5px solid var(--border);
  }
  .ml-review-stars { color: var(--gold); font-size: 20px; margin-bottom: 12px; }
  .ml-review-text { color: var(--muted); font-size: 15px; line-height: 1.6; margin-bottom: 14px; font-style: italic; }
  .ml-review-author { font-weight: 700; color: var(--navy2); font-size: 15px; }

  .ml-contact-section {
    background: linear-gradient(135deg, #020d2e 0%, #071a4f 60%, #0e2e72 100%);
    color: white;
    padding: 64px 20px;
  }
  .ml-contact-section .ml-sec-title { color: white; }
  .ml-contact-section .ml-sec-sub { color: #8aaee0; }
  .ml-contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 36px;
  }
  .ml-contact-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 18px;
    padding: 26px 22px;
    text-align: center;
  }
  .ml-contact-icon { font-size: 36px; margin-bottom: 10px; }
  .ml-contact-card h3 { font-size: 14px; color: #8aaee0; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
  .ml-contact-card p, .ml-contact-card a {
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-decoration: none;
  }
  .ml-contact-card a:hover { color: var(--gold2); }
  .ml-contact-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

  .ml-footer {
    background: #020617;
    color: #475569;
    text-align: center;
    padding: 22px 20px;
    font-size: 14px;
  }
  .ml-footer a { color: #64748b; text-decoration: none; }
  .ml-footer a:hover { color: var(--gold2); }

  .ml-wa-float {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 999;
    width: 58px; height: 58px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 28px;
    box-shadow: 0 4px 20px rgba(37,211,102,0.45);
    transition: transform 0.2s;
  }
  .ml-wa-float:hover { transform: scale(1.12); }

  .ml-truck-divider {
    text-align: center;
    padding: 10px 0;
    color: var(--border);
    font-size: 32px;
    letter-spacing: 8px;
    overflow: hidden;
    white-space: nowrap;
  }

  @media (max-width: 560px) {
    .ml-form-row { grid-template-columns: 1fr; }
    .ml-nav-links { display: none; }
  }
`;

const services = [
  { icon: "🚛", title: "Tipper Transport", desc: "Construction material, sand, gravel transport with tipper trucks across Gujarat." },
  { icon: "⛏️", title: "Dumper Service", desc: "Heavy-duty dumper trucks for industrial and bulk material logistics solutions." },
  { icon: "🏗️", title: "Truck Booking", desc: "Body truck and full-load transport booking for all types of goods and routes." },
  { icon: "🔄", title: "Return Load", desc: "ખાલી ન જાવ — Free return load matching service for truck owners and drivers." },
  { icon: "📦", title: "Fleet Management", desc: "Multi-truck fleet coordination for big industrial and commercial transport projects." },
  { icon: "🗺️", title: "Gujarat Network", desc: "Jamnagar, Dahej, Morbi, Surat, Ahmedabad, Kutch — all major industrial zones." },
];

const whyUs = [
  { num: "24/7", title: "Round the Clock", desc: "Day or night, anytime support for truck booking and load matching." },
  { num: "Fast", title: "Quick Dispatch", desc: "Same day truck allocation for urgent transport requirements." },
  { num: "Free", title: "Return Load Board", desc: "Post your truck or find return load completely free of charge." },
  { num: "All", title: "Gujarat Coverage", desc: "All major cities and industrial areas covered in the Gujarat network." },
];



const areas = ["🏭 Jamnagar","🏗️ Kutch","🏺 Morbi","🌆 Ahmedabad","🏛️ Vadodara","🌊 Surat","⚓ Vapi","⚗️ Dahej","🏘️ Limdi","🌾 Rajkot","🏭 Bhavnagar","🚢 Mundra"];

const reviews = [
  { text: "Fast service and professional drivers. Industrial load was delivered on time. Highly recommended for Jamnagar routes.", author: "Transport Contractor, Jamnagar" },
  { text: "Reliable support for industrial loads from Dahej. Return load service is very helpful and saves money.", author: "Fleet Owner, Dahej" },
  { text: "Best tipper and dumper service in Gujarat. Responsive on WhatsApp and honest rates. Will use again.", author: "Builder, Morbi" },
];

export default function Home() {
  const [form, setForm] = useState({ from: "", to: "", goods: "", truck: "", datetime: "", mobile: "" });
  const [loads, setLoads] = useState([]);
  const [loadingLoads, setLoadingLoads] = useState(true);

  useEffect(() => {
    fetch("/api/loads")
      .then((r) => r.json())
      .then((data) => {
        setLoads(data.loads || []);
        setLoadingLoads(false);
      })
      .catch(() => setLoadingLoads(false));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendBooking = () => {
    if (!form.from || !form.to) {
      alert("Please fill in Loading and Unloading Point.");
      return;
    }
    const msg = encodeURIComponent(
      `Hello Meera Logistics,\nMane Truck Book Karvu Chhe.\n\n` +
      `📍 Loading: ${form.from || "-"}\n` +
      `📍 Unloading: ${form.to || "-"}\n` +
      `📦 Goods: ${form.goods || "-"}\n` +
      `🚛 Truck: ${form.truck || "-"}\n` +
      `📅 Time: ${form.datetime || "-"}\n` +
      `📞 Mobile: ${form.mobile || "-"}`
    );
    window.open("https://wa.me/919558959579?text=" + msg, "_blank");
  };

  return (
    <>
      <style>{styles}</style>
      <div className="ml-body">

        {/* NAV */}
        <nav className="ml-nav">
          <a href="#" className="ml-nav-brand">
            <img src="/logo.png.jpeg" alt="Meera Logistics" className="ml-nav-logo" />
            <span className="ml-nav-title">MEERA <span>LOGISTICS</span></span>
          </a>
          <div className="ml-nav-links">
            <a href="#services">Services</a>
            <a href="#loads">Return Load</a>
            <a href="#booking">Book Truck</a>
            <a href="#contact">Contact</a>
            <a href="https://wa.me/919558959579" target="_blank" className="ml-btn ml-btn-green" style={{ borderRadius: 10, padding: "9px 18px" }}>📲 WhatsApp</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="ml-hero">
          <div className="ml-hero-dots" />
          <div className="ml-hero-inner">
            <div className="ml-hero-badge">🚛 Trusted Gujarat Transport Service</div>
            <h1>MEERA <span>LOGISTICS</span></h1>
            <p className="ml-hero-sub">Reliable Tipper, Dumper &amp; Truck Transport Service across Gujarat. Fast, trusted and professional logistics from Jamnagar.</p>
            <div className="ml-hero-stats">
              {[["24/7","Support"],["ALL","Gujarat"],["100%","Trusted"]].map(([num,label]) => (
                <div key={label} className="ml-hero-stat">
                  <div className="ml-hero-stat-num">{num}</div>
                  <div className="ml-hero-stat-label">{label}</div>
                </div>
              ))}
            </div>
            <div className="ml-hero-btns">
              <a href="tel:9558959579" className="ml-btn ml-btn-gold">📞 Call Now</a>
              <a href="#loads" className="ml-btn ml-btn-blue">🔄 Return Load Board</a>
              <a href="https://wa.me/919558959579" target="_blank" className="ml-btn ml-btn-outline">📲 WhatsApp</a>
            </div>
          </div>
        </section>

        <div className="ml-truck-divider">🚛 🚛 🚛 🚛 🚛</div>

        {/* SERVICES */}
        <section className="ml-section" id="services">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">Our Services</p>
            <h2 className="ml-sec-title">Transport Solutions</h2>
            <p className="ml-sec-sub">Gujarat ભરમાં professional logistics સેવા. Industrial, construction અને commercial transport.</p>
            <div className="ml-services-grid">
              {services.map((s) => (
                <div key={s.title} className="ml-svc-card">
                  <div className="ml-svc-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className={`ml-section ml-whyus`}>
          <div className="ml-section-inner">
            <p className="ml-sec-badge" style={{ color: "#ffd84d" }}>Why Choose Us</p>
            <h2 className="ml-sec-title">Gujarat&apos;s Trusted Transport Partner</h2>
            <p className="ml-sec-sub">અમે ઝડપ, ભરોસો અને professionalism સાથે Gujarat transport industry serve કરીએ છીએ.</p>
            <div className="ml-whyus-grid">
              {whyUs.map((w) => (
                <div key={w.title} className="ml-why-card">
                  <div className="ml-why-num">{w.num}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RETURN LOAD BOARD */}
        <section className="ml-section" id="loads">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">Live Load Board</p>
            <h2 className="ml-sec-title">Return Load Board</h2>
            <p className="ml-sec-sub">Delivery complete? ખાલી ન જાવ — Gujarat ભરમાં Return Load instantly મેળવો. Free service for truck owners.</p>
            {loadingLoads ? (
              <div style={{ textAlign: "center", padding: "40px", color: "var(--muted)", fontSize: 18 }}>
                🔄 Loads load થઈ રહ્યા છે...
              </div>
            ) : loads.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px", color: "var(--muted)", fontSize: 18 }}>
                અત્યારે કોઈ load available નથી. થોડીવારમાં check કરો.
              </div>
            ) : (
              <div className="ml-loads-grid">
                {loads.map((l, i) => (
                  <div key={i} className="ml-load-card">
                    <div className="ml-load-badge">🔄 Return Load</div>
                    <div className="ml-load-route">{l.from} <span>→</span> {l.to}</div>
                    <div className="ml-load-info">🚛 Truck: <strong>{l.truck}</strong></div>
                    <div className="ml-load-info">📦 Material: <strong>{l.material}</strong></div>
                    <div className="ml-load-info">⏰ Available: <strong>{l.time}</strong></div>
                    <div className="ml-load-rate">💰 {l.rate}</div>
                    <a
                      href={`https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20Return%20Load%20Book%20Karvu%20Chhe%0ARoute%3A%20${encodeURIComponent(l.from)}%20to%20${encodeURIComponent(l.to)}%0ATruck%3A%20${encodeURIComponent(l.truck)}`}
                      target="_blank"
                      className="ml-btn ml-btn-green ml-btn-full"
                    >
                      📲 Book Now
                    </a>
                  </div>
                ))}
              </div>
            )}
            <div className="ml-post-truck-banner">
              <h3>🚛 Return Truck Post કરો — Free</h3>
              <p>Truck owner, driver or broker — ખાલી truck ની details send કરો. Load matching free service.</p>
              <a
                href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%0AMare%20Return%20Truck%20Post%20Karvu%20Chhe.%0A%0AName%3A%0AMobile%3A%0ATruck%20Type%3A%0AVehicle%20Number%3A%0ACurrent%20Location%3A%0AAvailable%20Route%3A"
                target="_blank"
                className="ml-btn ml-btn-gold"
              >
                📲 WhatsApp પર Post કરો
              </a>
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="ml-section ml-booking-bg" id="booking">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">Book Transport</p>
            <h2 className="ml-sec-title">Truck Book કરો</h2>
            <p className="ml-sec-sub">Details ભરો અને WhatsApp પર booking confirm કરો.</p>
            <div className="ml-booking-card">
              <div className="ml-form-row">
                <div className="ml-form-group">
                  <label>📍 Loading Point</label>
                  <input name="from" value={form.from} onChange={handleChange} placeholder="e.g. Jamnagar" />
                </div>
                <div className="ml-form-group">
                  <label>📍 Unloading Point</label>
                  <input name="to" value={form.to} onChange={handleChange} placeholder="e.g. Ahmedabad" />
                </div>
              </div>
              <div className="ml-form-group">
                <label>📦 Goods / Material Details</label>
                <input name="goods" value={form.goods} onChange={handleChange} placeholder="e.g. Industrial Material, Sand, Tiles" />
              </div>
              <div className="ml-form-row">
                <div className="ml-form-group">
                  <label>🚛 Select Truck Type</label>
                  <select name="truck" value={form.truck} onChange={handleChange}>
                    <option value="">Select Truck</option>
                    <option>Tipper</option>
                    <option>Dumper</option>
                    <option>Body Truck</option>
                    <option>Trailer</option>
                  </select>
                </div>
                <div className="ml-form-group">
                  <label>📅 Date / Time</label>
                  <input name="datetime" value={form.datetime} onChange={handleChange} placeholder="e.g. Aaj / Kal Savare 7 AM" />
                </div>
              </div>
              <div className="ml-form-group">
                <label>📞 Your Mobile Number</label>
                <input name="mobile" type="tel" value={form.mobile} onChange={handleChange} placeholder="Your mobile number" />
              </div>
              <button onClick={sendBooking} className="ml-btn ml-btn-green ml-btn-full">
                📲 Send Booking on WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* COVERAGE AREAS */}
        <section className="ml-section ml-areas-bg">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">Coverage</p>
            <h2 className="ml-sec-title">Serving All Over Gujarat</h2>
            <p className="ml-sec-sub">All major cities, ports and industrial zones covered.</p>
            <div className="ml-areas-list">
              {areas.map((a) => <div key={a} className="ml-area-pill">{a}</div>)}
            </div>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <a href="https://www.google.com/maps/search/Jamnagar" target="_blank" className="ml-btn ml-btn-blue">📍 View Office Location</a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="ml-section">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">Customer Reviews</p>
            <h2 className="ml-sec-title">What Clients Say</h2>
            <p className="ml-sec-sub">Gujarat ભરના truck owners અને businesses ની feedback.</p>
            <div className="ml-reviews-grid">
              {reviews.map((r) => (
                <div key={r.author} className="ml-review-card">
                  <div className="ml-review-stars">★★★★★</div>
                  <p className="ml-review-text">&ldquo;{r.text}&rdquo;</p>
                  <div className="ml-review-author">— {r.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="ml-contact-section" id="contact">
          <div className="ml-section-inner">
            <p className="ml-sec-badge" style={{ color: "#ffd84d" }}>Contact Us</p>
            <h2 className="ml-sec-title">Contact Meera Logistics</h2>
            <p className="ml-sec-sub">Truck booking, return load, fleet inquiry — ગમે ત્યારે contact કરો.</p>
            <div className="ml-contact-grid">
              {[
                { icon: "📞", title: "Phone / Call", content: <a href="tel:9558959579">9558959579</a> },
                { icon: "📲", title: "WhatsApp", content: <a href="https://wa.me/919558959579" target="_blank">+91 9558959579</a> },
                { icon: "📍", title: "Office Location", content: <p>Jamnagar, Gujarat</p> },
                { icon: "🌐", title: "Website", content: <a href="https://meeralogistics.in" target="_blank">meeralogistics.in</a> },
              ].map((c) => (
                <div key={c.title} className="ml-contact-card">
                  <div className="ml-contact-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  {c.content}
                </div>
              ))}
            </div>
            <div className="ml-contact-btns">
              <a href="tel:9558959579" className="ml-btn ml-btn-gold">📞 Call Now</a>
              <a href="https://wa.me/919558959579" target="_blank" className="ml-btn ml-btn-green">📲 WhatsApp Contact</a>
              <a href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20I%20want%20to%20book%20a%20truck." target="_blank" className="ml-btn ml-btn-blue">🚛 Book Truck Now</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="ml-footer">
          <p style={{ marginBottom: 8 }}>
            <strong style={{ color: "#94a3b8" }}>MEERA LOGISTICS</strong> — Trusted Transport Partner Across Gujarat 🚛
          </p>
          <p>
            <a href="https://meeralogistics.in">meeralogistics.in</a>
            {" | "}
            <a href="tel:9558959579">9558959579</a>
            {" | "}
            Jamnagar, Gujarat
          </p>
          <p style={{ marginTop: 10 }}>© 2026 Meera Logistics. All Rights Reserved.</p>
        </footer>

        {/* FLOATING WA */}
        <a href="https://wa.me/919558959579" target="_blank" className="ml-wa-float" title="WhatsApp">📲</a>
      </div>
    </>
  );
}
