'use client';

import { useState } from 'react';

const TRUCK_TYPES = ['ડમ્પર', 'ટિપર', 'બોડી', 'ટ્રેલર', 'કન્ટેઈનર', 'ટેન્કર'];

function getTodayStr() {
  const d = new Date();
  const days = ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'];
  const months = ['જાન્યુ', 'ફેબ્રુ', 'માર્ચ', 'એપ્રિ', 'મે', 'જૂન', 'જુલા', 'ઓગ', 'સપ્ટ', 'ઓક્ટ', 'નવે', 'ડિસે'];
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function buildMessage(loads) {
  if (loads.length === 0) return '';
  const today = getTodayStr();

  let msg = `🚛 *Meera Logistics*\n`;
  msg += `📅 ${today}\n`;
  msg += `──────────────────────\n\n`;
  msg += `*આજના Available Loads:*\n\n`;

  loads.forEach((l, i) => {
    msg += `*${i + 1}. ${l.from} ➜ ${l.to}*\n`;
    msg += `   🚛 Truck: ${l.truck}\n`;
    if (l.material) msg += `   📦 Material: ${l.material}\n`;
    if (l.rate) msg += `   💰 Rate: ${l.rate}\n`;
    msg += `\n`;
  });

  msg += `──────────────────────\n`;
  msg += `📞 Contact: Meera Logistics\n`;
  msg += `_Interested hoy to reply karo_ 🙏`;

  return msg;
}

function DailyLoadTool() {
  const [loads, setLoads] = useState([]);
  const [form, setForm] = useState({
    from: '',
    to: '',
    truck: 'ડમ્પર',
    material: '',
    rate: '',
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addLoad = () => {
    if (!form.from.trim() || !form.to.trim()) {
      alert('From અને To ભરો');
      return;
    }

    setLoads((prev) => [...prev, { ...form, id: Date.now() }]);

    setForm({
      from: '',
      to: '',
      truck: 'ડમ્પર',
      material: '',
      rate: '',
    });
  };

  const removeLoad = (id) => {
    setLoads((prev) => prev.filter((l) => l.id !== id));
  };

  const copyMessage = async () => {
    const msg = buildMessage(loads);

    if (!msg) {
      alert('પહેલા loads ઉમેરો!');
      return;
    }

    await navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const message = buildMessage(loads);

  return (
    <section style={section}>
      <p style={badge}>DAILY LOAD TOOL</p>
      <h2 style={title}>Daily Load Broadcast</h2>

      <div className="ml-tool">
        <div className="ml-header">
          <div className="ml-logo">🚛</div>
          <div>
            <h1>Meera Logistics</h1>
            <p>Daily Load Broadcast Tool</p>
          </div>
        </div>

        <p className="ml-date">📅 {getTodayStr()}</p>

        <div className="ml-card">
          <div className="ml-card-title">➕ નવો Load ઉમેરો</div>

          <div className="ml-grid2">
            <div className="ml-field">
              <label>From (ક્યાંથી)</label>
              <input name="from" value={form.from} onChange={handleChange} placeholder="દા.ત. દહેજ" />
            </div>

            <div className="ml-field">
              <label>To (ક્યાં)</label>
              <input name="to" value={form.to} onChange={handleChange} placeholder="દા.ત. કંડલા" />
            </div>
          </div>

          <div className="ml-grid3">
            <div className="ml-field">
              <label>Truck type</label>
              <select name="truck" value={form.truck} onChange={handleChange}>
                {TRUCK_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="ml-field">
              <label>Material</label>
              <input name="material" value={form.material} onChange={handleChange} placeholder="દા.ત. ચૂનો" />
            </div>

            <div className="ml-field">
              <label>Rate</label>
              <input name="rate" value={form.rate} onChange={handleChange} placeholder="દા.ત. ₹18/km" />
            </div>
          </div>

          <button className="ml-add-btn" onClick={addLoad}>
            + Load ઉમેરો
          </button>
        </div>

        <div className="ml-card">
          <div className="ml-card-title">📋 આજના Loads ({loads.length})</div>

          {loads.length === 0 ? (
            <p className="ml-empty">હજુ કોઈ load ઉમેર્યો નથી</p>
          ) : (
            loads.map((l) => (
              <div key={l.id} className="ml-load-item">
                <button className="ml-remove" onClick={() => removeLoad(l.id)}>
                  ✕
                </button>

                <div className="ml-route">
                  📍 {l.from} → {l.to}
                </div>

                <div className="ml-badges">
                  <span className="ml-badge">🚛 {l.truck}</span>
                  {l.material && <span className="ml-badge">📦 {l.material}</span>}
                  {l.rate && <span className="ml-badge">💰 {l.rate}</span>}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="ml-card">
          <div className="ml-card-title">📱 WhatsApp Message Preview</div>

          <div className="ml-preview">
            {message || <span style={{ opacity: 0.5 }}>Loads ઉમેર્યા પછી message અહીં દેખાશે...</span>}
          </div>

          <button className="ml-copy-btn" onClick={copyMessage}>
            {copied ? '✅ Copied! WhatsApp માં Paste કરો' : '📋 Message Copy કરો'}
          </button>
        </div>
      </div>

      <style>{`
        .ml-tool {
          max-width: 720px;
          margin: 0 auto;
          padding: 16px;
        }

        .ml-header {
          background: #1a7a4a;
          color: #fff;
          border-radius: 18px;
          padding: 18px 22px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ml-logo {
          width: 48px;
          height: 48px;
          background: rgba(255,255,255,0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .ml-header h1 {
          font-size: 19px;
          margin: 0;
        }

        .ml-header p {
          font-size: 13px;
          opacity: 0.85;
          margin: 2px 0 0;
        }

        .ml-date {
          text-align: center;
          color: #64748b;
          font-size: 14px;
        }

        .ml-card {
          background: white;
          border: 1px solid #d4e0f7;
          border-radius: 18px;
          padding: 18px;
          margin-bottom: 14px;
          box-shadow: 0 8px 28px rgba(26,86,219,0.08);
        }

        .ml-card-title {
          font-weight: 800;
          color: #1a7a4a;
          margin-bottom: 14px;
        }

        .ml-grid2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 10px;
        }

        .ml-grid3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
          margin-bottom: 12px;
        }

        .ml-field label {
          display: block;
          font-size: 13px;
          color: #64748b;
          margin-bottom: 5px;
        }

        .ml-field input,
        .ml-field select {
          width: 100%;
          padding: 11px 13px;
          border: 1px solid #d4e0f7;
          border-radius: 10px;
          font-size: 14px;
          outline: none;
          background: #f8fafc;
        }

        .ml-add-btn {
          width: 100%;
          padding: 12px;
          background: #e8f5ee;
          border: 2px dashed #7ec4a0;
          border-radius: 12px;
          color: #1a7a4a;
          font-weight: 800;
          cursor: pointer;
        }

        .ml-empty {
          text-align: center;
          color: #64748b;
        }

        .ml-load-item {
          background: #e8f5ee;
          border: 1px solid #b8dfc8;
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 10px;
          position: relative;
        }

        .ml-remove {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }

        .ml-route {
          font-weight: 800;
          color: #1a7a4a;
        }

        .ml-badges {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .ml-badge {
          background: white;
          border: 1px solid #d4e0f7;
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 12px;
        }

        .ml-preview {
          background: #075E54;
          border-radius: 14px;
          padding: 18px;
          color: white;
          font-size: 14px;
          line-height: 1.8;
          white-space: pre-wrap;
          min-height: 90px;
        }

        .ml-copy-btn {
          width: 100%;
          margin-top: 12px;
          padding: 14px;
          background: #25D366;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 900;
          cursor: pointer;
        }

        @media (max-width: 520px) {
          .ml-grid2,
          .ml-grid3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default function Home() {
  const services = [
    'Tipper Transport',
    'Dumper Service',
    'Truck Booking',
    'Return Load',
    'Fleet Management',
    'All Gujarat Service',
  ];

  const loads = [
    ['Jamnagar', 'Ahmedabad', 'Tipper', 'આજ સાંજ 5 PM'],
    ['Ahmedabad', 'Jamnagar', 'Dumper', 'કાલ સવારે 7 AM'],
    ['Jamnagar', 'Surat', 'Body Truck', 'આજ રાત 9 PM'],
    ['Dahej', 'Jamnagar', 'Dumper', 'કાલ સવારે 6 AM'],
  ];

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', background: '#f4f7ff', color: '#0f172a' }}>
      <section style={hero}>
        <img src="/logo.png" alt="Meera Logistics" style={logoStyle} />

        <div style={topBadge}>🚛 Trusted Gujarat Transport Service</div>

        <h1 style={heroTitle}>
          MEERA <span style={{ color: '#ffd84d' }}>LOGISTICS</span>
        </h1>

        <p style={heroText}>
          Reliable Tipper, Dumper & Truck Transport Service across Gujarat with fast and trusted logistics support.
        </p>

        <div style={heroButtons}>
          <a href="tel:9558959579" style={btnBlue}>
            📞 Call Now
          </a>

          <a href="#return-load" style={btnGreen}>
            🔄 Return Load Board
          </a>

          <a href="https://wa.me/919558959579" target="_blank" style={btnWhite}>
            📲 WhatsApp
          </a>
        </div>
      </section>

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

      <section style={{ ...section, background: '#e8f0fe', borderRadius: 30 }}>
        <p style={badge}>BOOKING</p>
        <h2 style={title}>Book Your Truck</h2>

        <div style={formBox}>
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
            style={{ ...btnGreen, display: 'block', textAlign: 'center', marginTop: 10 }}
          >
            📲 Send Booking on WhatsApp
          </a>
        </div>
      </section>

      <section id="return-load" style={section}>
        <p style={badge}>NEW SERVICE — FREE</p>
        <h2 style={title}>Return Load Board</h2>

        <p style={{ ...muted, textAlign: 'center', maxWidth: 650, margin: '0 auto 28px' }}>
          Delivery complete? ખાલી ન જાવ — Gujarat ભરમાં Return Load instantly મેળવો.
        </p>

        <div style={grid}>
          {loads.map((l, i) => (
            <div key={i} style={{ ...card, border: '2px solid #d4e0f7' }}>
              <div style={returnTag}>🔄 Return Load Available</div>

              <h3 style={{ fontSize: 24 }}>
                {l[0]} <span style={{ color: '#1a56db' }}>→</span> {l[1]}
              </h3>

              <p>
                🚛 Truck Type: <b>{l[2]}</b>
              </p>

              <p>
                ⏰ Available: <b>{l[3]}</b>
              </p>

              <p>
                💰 Rate: <b>Best / Negotiate</b>
              </p>

              <a
                href={`https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20Return%20Load%20Book%20Karvu%20Chhe%0ARoute%3A%20${l[0]}%20to%20${l[1]}%0ATruck%3A%20${l[2]}`}
                target="_blank"
                style={{ ...btnGreen, display: 'inline-block', marginTop: 12 }}
              >
                📲 Book Now
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <a
            href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20Mare%20Return%20Truck%20Post%20Karvu%20Chhe"
            target="_blank"
            style={btnBlue}
          >
            🚛 Return Truck Post કરો — Free
          </a>
        </div>
      </section>

      <DailyLoadTool />

      <section style={contactSection}>
        <h2 style={{ fontSize: 34 }}>Contact Meera Logistics</h2>
        <p>📍 Jamnagar, Gujarat</p>
        <p>📞 9558959579</p>
        <p>🌐 meeralogistics.in</p>

        <a href="https://wa.me/919558959579" target="_blank" style={btnGreen}>
          📲 WhatsApp Contact
        </a>
      </section>

      <footer style={footer}>
        © 2026 Meera Logistics. All Rights Reserved.
      </footer>
    </main>
  );
}

const hero = {
  background: 'linear-gradient(135deg,#071a4f,#0d2a6b,#123c7c)',
  color: 'white',
  padding: '55px 20px',
  textAlign: 'center',
  borderBottomLeftRadius: 45,
  borderBottomRightRadius: 45,
};

const logoStyle = {
  width: 110,
  height: 110,
  objectFit: 'contain',
  background: 'white',
  borderRadius: 22,
  padding: 8,
  marginBottom: 18,
};

const heroTitle = {
  fontSize: 'clamp(36px,8vw,72px)',
  margin: 0,
  fontWeight: 900,
};

const heroText = {
  fontSize: 20,
  color: '#c8d9ff',
  maxWidth: 700,
  margin: '18px auto',
};

const heroButtons = {
  display: 'flex',
  justifyContent: 'center',
  gap: 14,
  flexWrap: 'wrap',
  marginTop: 28,
};

const section = {
  padding: '55px 20px',
  maxWidth: 1150,
  margin: 'auto',
};

const title = {
  fontSize: 'clamp(30px,6vw,46px)',
  textAlign: 'center',
  color: '#0d2a6b',
  marginTop: 0,
};

const badge = {
  textAlign: 'center',
  color: '#1a56db',
  fontWeight: 900,
  letterSpacing: 1.5,
};

const topBadge = {
  display: 'inline-block',
  background: 'rgba(255,255,255,0.12)',
  padding: '7px 18px',
  borderRadius: 25,
  fontWeight: 800,
  fontSize: 13,
  marginBottom: 18,
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: 18,
};

const card = {
  background: 'white',
  padding: 24,
  borderRadius: 24,
  boxShadow: '0 8px 28px rgba(26,86,219,0.10)',
};

const muted = {
  color: '#64748b',
  lineHeight: 1.6,
};

const input = {
  width: '100%',
  padding: 15,
  marginBottom: 12,
  borderRadius: 14,
  border: '2px solid #d4e0f7',
  fontSize: 16,
};

const formBox = {
  maxWidth: 700,
  margin: 'auto',
  background: 'white',
  padding: 25,
  borderRadius: 24,
  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
};

const btnBlue = {
  background: '#1a56db',
  color: 'white',
  padding: '14px 26px',
  borderRadius: 16,
  textDecoration: 'none',
  fontWeight: 900,
};

const btnGreen = {
  background: '#16a34a',
  color: 'white',
  padding: '14px 26px',
  borderRadius: 16,
  textDecoration: 'none',
  fontWeight: 900,
};

const btnWhite = {
  background: 'white',
  color: '#0d2a6b',
  padding: '14px 26px',
  borderRadius: 16,
  textDecoration: 'none',
  fontWeight: 900,
};

const returnTag = {
  background: '#e8f0fe',
  color: '#1341b0',
  padding: '6px 12px',
  borderRadius: 20,
  display: 'inline-block',
  fontWeight: 800,
};

const contactSection = {
  background: '#071a4f',
  color: 'white',
  padding: '45px 20px',
  textAlign: 'center',
};

const footer = {
  background: '#020617',
  color: '#94a3b8',
  textAlign: 'center',
  padding: 18,
};
