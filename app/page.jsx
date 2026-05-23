<!DOCTYPE html>
<html lang="gu">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="description" content="Meera Logistics - Tipper, Dumper & Truck Transport Service across Gujarat from Jamnagar"/>
<title>Meera Logistics | Tipper Dumper Truck Transport Gujarat</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Noto+Sans+Gujarati:wght@400;700&display=swap" rel="stylesheet"/>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

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

  body {
    font-family: 'Rajdhani', 'Noto Sans Gujarati', sans-serif;
    background: var(--bg);
    color: var(--text);
    font-size: 16px;
    line-height: 1.6;
  }

  /* ---- TOP BAR ---- */
  .topbar {
    background: var(--navy);
    color: #a8c0ff;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 8px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .topbar a { color: var(--gold2); text-decoration: none; }
  .topbar a:hover { text-decoration: underline; }

  /* ---- NAV ---- */
  nav {
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
  .nav-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    text-decoration: none;
  }
  .nav-logo {
    width: 48px; height: 48px;
    object-fit: contain;
    border-radius: 10px;
    border: 2px solid var(--border);
    background: var(--white);
  }
  .nav-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 26px;
    color: var(--navy);
    letter-spacing: 2px;
  }
  .nav-title span { color: var(--blue); }
  .nav-links {
    display: flex;
    gap: 6px;
    align-items: center;
    flex-wrap: wrap;
  }
  .nav-links a {
    color: var(--navy2);
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    padding: 8px 14px;
    border-radius: 8px;
    transition: background 0.2s, color 0.2s;
  }
  .nav-links a:hover { background: var(--bg2); color: var(--blue); }
  .nav-cta {
    background: var(--blue);
    color: white !important;
    border-radius: 10px !important;
    padding: 9px 18px !important;
  }
  .nav-cta:hover { background: var(--navy2) !important; color: white !important; }

  /* ---- HERO ---- */
  .hero {
    background: linear-gradient(135deg, #020d2e 0%, #071a4f 40%, #0e2e72 70%, #123c7c 100%);
    color: white;
    padding: 64px 20px 72px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 50%, rgba(26,86,219,0.18) 0%, transparent 55%),
      radial-gradient(circle at 80% 20%, rgba(245,181,0,0.10) 0%, transparent 50%);
    pointer-events: none;
  }
  .hero-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
  }
  .hero-inner { position: relative; z-index: 1; max-width: 900px; margin: auto; }

  .hero-logo {
    width: 100px; height: 100px;
    object-fit: contain;
    background: white;
    border-radius: 22px;
    padding: 8px;
    margin-bottom: 22px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  }

  .hero-badge {
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

  .hero h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(52px, 12vw, 96px);
    letter-spacing: 4px;
    line-height: 1;
    margin-bottom: 8px;
  }
  .hero h1 span { color: var(--gold2); }

  .hero-sub {
    font-size: clamp(15px, 3vw, 20px);
    color: #bdd0ff;
    max-width: 680px;
    margin: 18px auto 32px;
    font-weight: 500;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
    margin-bottom: 36px;
  }
  .hero-stat { text-align: center; }
  .hero-stat-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 38px;
    color: var(--gold2);
    line-height: 1;
  }
  .hero-stat-label { font-size: 12px; color: #8aaee0; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }

  .hero-btns {
    display: flex;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  /* ---- BUTTONS ---- */
  .btn {
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
    transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
    white-space: nowrap;
  }
  .btn:hover { transform: translateY(-2px); opacity: 0.93; }
  .btn:active { transform: scale(0.97); }

  .btn-blue { background: var(--blue); color: white; box-shadow: 0 4px 16px rgba(26,86,219,0.35); }
  .btn-green { background: var(--green); color: white; box-shadow: 0 4px 16px rgba(22,163,74,0.35); }
  .btn-gold { background: var(--gold); color: var(--navy); box-shadow: 0 4px 16px rgba(245,181,0,0.30); font-weight: 800; }
  .btn-outline { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.4); }
  .btn-outline:hover { background: rgba(255,255,255,0.1); }

  /* ---- SECTION BASE ---- */
  .section { padding: 64px 20px; }
  .section-inner { max-width: 1150px; margin: auto; }

  .sec-badge {
    text-align: center;
    color: var(--blue);
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .sec-title {
    text-align: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(32px, 6vw, 52px);
    color: var(--navy);
    letter-spacing: 2px;
    margin-bottom: 12px;
  }
  .sec-sub {
    text-align: center;
    color: var(--muted);
    max-width: 600px;
    margin: 0 auto 40px;
    font-size: 16px;
  }

  /* ---- SERVICES ---- */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }
  .svc-card {
    background: white;
    border-radius: 20px;
    padding: 28px 22px;
    box-shadow: var(--card-shadow);
    border: 1.5px solid var(--border);
    transition: transform 0.2s, box-shadow 0.2s;
    text-align: center;
  }
  .svc-card:hover { transform: translateY(-5px); box-shadow: 0 12px 36px rgba(26,86,219,0.16); }
  .svc-icon {
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
  .svc-card h3 { font-size: 18px; font-weight: 700; color: var(--navy2); margin-bottom: 8px; }
  .svc-card p { font-size: 14px; color: var(--muted); line-height: 1.6; }

  /* ---- WHY US ---- */
  .whyus { background: var(--navy); color: white; }
  .whyus .sec-title { color: white; }
  .whyus .sec-sub { color: #8aaee0; }
  .whyus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }
  .why-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 18px;
    padding: 26px 20px;
    text-align: center;
  }
  .why-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 48px;
    color: var(--gold2);
    line-height: 1;
    margin-bottom: 6px;
  }
  .why-card h3 { font-size: 17px; font-weight: 700; color: white; margin-bottom: 8px; }
  .why-card p { font-size: 14px; color: #8aaee0; }

  /* ---- BOOKING ---- */
  .booking-bg { background: linear-gradient(135deg, var(--bg2) 0%, #d6e6ff 100%); }
  .booking-card {
    max-width: 680px;
    margin: auto;
    background: white;
    border-radius: 28px;
    padding: 36px 32px;
    box-shadow: 0 12px 48px rgba(26,86,219,0.13);
    border: 1.5px solid var(--border);
  }
  .form-group { margin-bottom: 16px; }
  .form-group label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    color: var(--navy2);
    margin-bottom: 6px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .form-group input,
  .form-group select,
  .form-group textarea {
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
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus { border-color: var(--blue); background: white; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 560px) { .form-row { grid-template-columns: 1fr; } }

  /* ---- LOADS BOARD ---- */
  .loads-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 22px;
  }
  .load-card {
    background: white;
    border-radius: 22px;
    padding: 26px 22px;
    box-shadow: var(--card-shadow);
    border: 2px solid var(--border);
    transition: transform 0.2s, border-color 0.2s;
  }
  .load-card:hover { transform: translateY(-4px); border-color: var(--blue); }
  .load-badge {
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
  .load-route {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 26px;
    color: var(--navy);
    letter-spacing: 1px;
    margin-bottom: 14px;
    line-height: 1.1;
  }
  .load-route span { color: var(--blue); }
  .load-info { font-size: 15px; color: var(--text); margin-bottom: 6px; font-weight: 500; }
  .load-info strong { color: var(--navy2); }
  .load-rate {
    display: inline-block;
    background: #dcfce7;
    color: var(--green2);
    font-size: 13px;
    font-weight: 700;
    padding: 5px 14px;
    border-radius: 20px;
    margin: 8px 0 16px;
  }

  /* ---- POST TRUCK ---- */
  .post-truck-banner {
    background: linear-gradient(135deg, var(--blue), var(--navy2));
    color: white;
    border-radius: 24px;
    padding: 36px 32px;
    text-align: center;
    margin-top: 48px;
    box-shadow: 0 8px 32px rgba(26,86,219,0.25);
  }
  .post-truck-banner h3 { font-family: 'Bebas Neue', sans-serif; font-size: 32px; letter-spacing: 2px; margin-bottom: 10px; }
  .post-truck-banner p { color: #c8d9ff; margin-bottom: 22px; }

  /* ---- COVERAGE AREAS ---- */
  .areas-bg { background: var(--bg2); }
  .areas-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 32px;
  }
  .area-pill {
    background: white;
    border: 2px solid var(--border);
    color: var(--navy2);
    font-weight: 700;
    font-size: 15px;
    padding: 9px 20px;
    border-radius: 50px;
    box-shadow: 0 2px 8px rgba(26,86,219,0.07);
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .area-pill:hover { background: var(--blue); color: white; border-color: var(--blue); }

  /* ---- REVIEWS ---- */
  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }
  .review-card {
    background: white;
    border-radius: 20px;
    padding: 26px 22px;
    box-shadow: var(--card-shadow);
    border: 1.5px solid var(--border);
  }
  .review-stars { color: var(--gold); font-size: 20px; margin-bottom: 12px; }
  .review-text { color: var(--muted); font-size: 15px; line-height: 1.6; margin-bottom: 14px; font-style: italic; }
  .review-author { font-weight: 700; color: var(--navy2); font-size: 15px; }

  /* ---- CONTACT ---- */
  .contact-section {
    background: linear-gradient(135deg, #020d2e 0%, #071a4f 60%, #0e2e72 100%);
    color: white;
  }
  .contact-section .sec-title { color: white; }
  .contact-section .sec-sub { color: #8aaee0; }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin-bottom: 36px;
  }
  .contact-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 18px;
    padding: 26px 22px;
    text-align: center;
  }
  .contact-icon { font-size: 36px; margin-bottom: 10px; }
  .contact-card h3 { font-size: 14px; color: #8aaee0; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
  .contact-card p, .contact-card a {
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-decoration: none;
  }
  .contact-card a:hover { color: var(--gold2); }
  .contact-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

  /* ---- FOOTER ---- */
  footer {
    background: #020617;
    color: #475569;
    text-align: center;
    padding: 22px 20px;
    font-size: 14px;
  }
  footer a { color: #64748b; text-decoration: none; }
  footer a:hover { color: var(--gold2); }

  /* ---- FLOATING WA ---- */
  .wa-float {
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
  .wa-float:hover { transform: scale(1.12); }

  /* ---- DIVIDER ---- */
  .truck-divider {
    text-align: center;
    padding: 10px 0;
    color: var(--border);
    font-size: 32px;
    letter-spacing: 8px;
    overflow: hidden;
    white-space: nowrap;
  }

  @media (max-width: 640px) {
    .nav-links { display: none; }
    .topbar { font-size: 12px; gap: 6px; }
    .booking-card { padding: 24px 18px; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <a href="#" class="nav-brand">
    <img src="https://www.meeralogistics.in/logo.png.jpeg" alt="Meera Logistics" class="nav-logo" onerror="this.style.display='none'"/>
    <span class="nav-title">MEERA <span>LOGISTICS</span></span>
  </a>
  <div class="nav-links">
    <a href="#services">Services</a>
    <a href="#loads">Return Load</a>
    <a href="#booking">Book Truck</a>
    <a href="#contact">Contact</a>
    <a href="https://wa.me/919558959579" target="_blank" class="btn btn-green nav-cta">📲 WhatsApp</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-dots"></div>
  <div class="hero-inner">
    <img src="https://www.meeralogistics.in/logo.png.jpeg" alt="Meera Logistics Logo" class="hero-logo" onerror="this.style.display='none'"/>
    <div class="hero-badge">🚛 Trusted Gujarat Transport Service</div>
    <h1>MEERA <span>LOGISTICS</span></h1>
    <p class="hero-sub">Reliable Tipper, Dumper &amp; Truck Transport Service across Gujarat. Fast, trusted and professional logistics from Jamnagar.</p>

    <div class="hero-stats">
      <div class="hero-stat">
        <div class="hero-stat-num">24/7</div>
        <div class="hero-stat-label">Support</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">ALL</div>
        <div class="hero-stat-label">Gujarat</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">100%</div>
        <div class="hero-stat-label">Trusted</div>
      </div>
    </div>

    <div class="hero-btns">
      <a href="tel:9558959579" class="btn btn-gold">📞 Call Now</a>
      <a href="#loads" class="btn btn-blue">🔄 Return Load Board</a>
      <a href="https://wa.me/919558959579" target="_blank" class="btn btn-outline">📲 WhatsApp</a>
    </div>
  </div>
</section>

<div class="truck-divider">🚛 🚛 🚛 🚛 🚛</div>

<!-- SERVICES -->
<section class="section" id="services">
  <div class="section-inner">
    <p class="sec-badge">Our Services</p>
    <h2 class="sec-title">Transport Solutions</h2>
    <p class="sec-sub">Gujarat ભરમાં professional logistics સેવા. Industrial, construction અને commercial transport.</p>

    <div class="services-grid">
      <div class="svc-card">
        <div class="svc-icon">🚛</div>
        <h3>Tipper Transport</h3>
        <p>Construction material, sand, gravel transport with tipper trucks across Gujarat.</p>
      </div>
      <div class="svc-card">
        <div class="svc-icon">⛏️</div>
        <h3>Dumper Service</h3>
        <p>Heavy-duty dumper trucks for industrial and bulk material logistics solutions.</p>
      </div>
      <div class="svc-card">
        <div class="svc-icon">🏗️</div>
        <h3>Truck Booking</h3>
        <p>Body truck and full-load transport booking for all types of goods and routes.</p>
      </div>
      <div class="svc-card">
        <div class="svc-icon">🔄</div>
        <h3>Return Load</h3>
        <p>ખાલી ન જાવ — Free return load matching service for truck owners and drivers.</p>
      </div>
      <div class="svc-card">
        <div class="svc-icon">📦</div>
        <h3>Fleet Management</h3>
        <p>Multi-truck fleet coordination for big industrial and commercial transport projects.</p>
      </div>
      <div class="svc-card">
        <div class="svc-icon">🗺️</div>
        <h3>Gujarat Network</h3>
        <p>Jamnagar, Dahej, Morbi, Surat, Ahmedabad, Kutch — all major industrial zones.</p>
      </div>
    </div>
  </div>
</section>

<!-- WHY US -->
<section class="section whyus">
  <div class="section-inner">
    <p class="sec-badge" style="color:#ffd84d;">Why Choose Us</p>
    <h2 class="sec-title">Gujarat's Trusted Transport Partner</h2>
    <p class="sec-sub">અમે ઝડપ, ભરોસો અને professionalism સાથે Gujarat transport industry serve કરીએ છીએ.</p>

    <div class="whyus-grid">
      <div class="why-card">
        <div class="why-num">24/7</div>
        <h3>Round the Clock</h3>
        <p>Day or night, anytime support for truck booking and load matching.</p>
      </div>
      <div class="why-card">
        <div class="why-num">Fast</div>
        <h3>Quick Dispatch</h3>
        <p>Same day truck allocation for urgent transport requirements.</p>
      </div>
      <div class="why-card">
        <div class="why-num">Free</div>
        <h3>Return Load Board</h3>
        <p>Post your truck or find return load completely free of charge.</p>
      </div>
      <div class="why-card">
        <div class="why-num">All</div>
        <h3>Gujarat Coverage</h3>
        <p>All major cities and industrial areas covered in the Gujarat network.</p>
      </div>
    </div>
  </div>
</section>

<!-- TODAY'S LOADS / RETURN LOAD BOARD -->
<section class="section" id="loads">
  <div class="section-inner">
    <p class="sec-badge">Live Load Board</p>
    <h2 class="sec-title">Return Load Board</h2>
    <p class="sec-sub">Delivery complete? ખાલી ન જાવ — Gujarat ભરમાં Return Load instantly મેળવો. Free service for truck owners.</p>

    <div class="loads-grid">
      <div class="load-card">
        <div class="load-badge">🔄 Return Load</div>
        <div class="load-route">Jamnagar <span>→</span> Ahmedabad</div>
        <div class="load-info">🚛 Truck: <strong>Tipper / Dumper</strong></div>
        <div class="load-info">📦 Material: <strong>Industrial Material</strong></div>
        <div class="load-info">⏰ Available: <strong>આજ સાંજ 5 PM</strong></div>
        <div class="load-rate">💰 Best Rate / Negotiate</div>
        <a href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20Return%20Load%20Book%20Karvu%20Chhe%0ARoute%3A%20Jamnagar%20to%20Ahmedabad%0ATruck%3A%20Tipper%2FDumper" target="_blank" class="btn btn-green" style="width:100%;justify-content:center;">📲 Book Now</a>
      </div>

      <div class="load-card">
        <div class="load-badge">🔄 Return Load</div>
        <div class="load-route">Morbi <span>→</span> Surat</div>
        <div class="load-info">🚛 Truck: <strong>Body Truck</strong></div>
        <div class="load-info">📦 Material: <strong>Tiles / Ceramic</strong></div>
        <div class="load-info">⏰ Available: <strong>કાલ સવારે 7 AM</strong></div>
        <div class="load-rate">💰 Full Load</div>
        <a href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20Return%20Load%20Book%20Karvu%20Chhe%0ARoute%3A%20Morbi%20to%20Surat%0ATruck%3A%20Body%20Truck" target="_blank" class="btn btn-green" style="width:100%;justify-content:center;">📲 Book Now</a>
      </div>

      <div class="load-card">
        <div class="load-badge">🔄 Return Load</div>
        <div class="load-route">Jamnagar <span>→</span> Surat</div>
        <div class="load-info">🚛 Truck: <strong>Dumper</strong></div>
        <div class="load-info">📦 Material: <strong>Industrial Goods</strong></div>
        <div class="load-info">⏰ Available: <strong>આજ રાત 9 PM</strong></div>
        <div class="load-rate">💰 Best Rate / Negotiate</div>
        <a href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20Return%20Load%20Book%20Karvu%20Chhe%0ARoute%3A%20Jamnagar%20to%20Surat%0ATruck%3A%20Dumper" target="_blank" class="btn btn-green" style="width:100%;justify-content:center;">📲 Book Now</a>
      </div>

      <div class="load-card">
        <div class="load-badge">🔄 Return Load</div>
        <div class="load-route">Dahej <span>→</span> All Gujarat</div>
        <div class="load-info">🚛 Truck: <strong>Truck / Dumper</strong></div>
        <div class="load-info">📦 Material: <strong>Industrial Goods</strong></div>
        <div class="load-info">⏰ Available: <strong>કાલ સવારે 6 AM</strong></div>
        <div class="load-rate">💰 Contact Now</div>
        <a href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20Return%20Load%20Book%20Karvu%20Chhe%0ARoute%3A%20Dahej%20to%20Gujarat%0ATruck%3A%20Dumper" target="_blank" class="btn btn-green" style="width:100%;justify-content:center;">📲 Book Now</a>
      </div>
    </div>

    <div class="post-truck-banner">
      <h3>🚛 Return Truck Post કરો — Free</h3>
      <p>Truck owner, driver or broker — ખાલી truck ની details send કરો. Load matching free service.</p>
      <a href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%0AMare%20Return%20Truck%20Post%20Karvu%20Chhe.%0A%0AName%3A%0AMobile%3A%0ATruck%20Type%3A%0AVehicle%20Number%3A%0ACurrent%20Location%3A%0AAvailable%20Route%3A" target="_blank" class="btn btn-gold">📲 WhatsApp પર Post કરો</a>
    </div>
  </div>
</section>

<!-- BOOKING -->
<section class="section booking-bg" id="booking">
  <div class="section-inner">
    <p class="sec-badge">Book Transport</p>
    <h2 class="sec-title">Truck Book કરો</h2>
    <p class="sec-sub">Details ભરો અને WhatsApp પર booking confirm કરો.</p>

    <div class="booking-card">
      <div class="form-row">
        <div class="form-group">
          <label>📍 Loading Point</label>
          <input type="text" id="from" placeholder="e.g. Jamnagar"/>
        </div>
        <div class="form-group">
          <label>📍 Unloading Point</label>
          <input type="text" id="to" placeholder="e.g. Ahmedabad"/>
        </div>
      </div>
      <div class="form-group">
        <label>📦 Goods / Material Details</label>
        <input type="text" id="goods" placeholder="e.g. Industrial Material, Sand, Tiles"/>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>🚛 Select Truck Type</label>
          <select id="truck">
            <option value="">Select Truck</option>
            <option>Tipper</option>
            <option>Dumper</option>
            <option>Body Truck</option>
            <option>Trailer</option>
          </select>
        </div>
        <div class="form-group">
          <label>📅 Date / Time</label>
          <input type="text" id="datetime" placeholder="e.g. Aaj / Kal Savare 7 AM"/>
        </div>
      </div>
      <div class="form-group">
        <label>📞 Your Mobile Number</label>
        <input type="tel" id="mobile" placeholder="Your mobile number"/>
      </div>
      <button onclick="sendBooking()" class="btn btn-green" style="width:100%;justify-content:center;font-size:18px;padding:16px;">
        📲 Send Booking on WhatsApp
      </button>
    </div>
  </div>
</section>

<!-- COVERAGE AREAS -->
<section class="section areas-bg">
  <div class="section-inner">
    <p class="sec-badge">Coverage</p>
    <h2 class="sec-title">Serving All Over Gujarat</h2>
    <p class="sec-sub">All major cities, ports and industrial zones covered.</p>

    <div class="areas-list">
      <div class="area-pill">🏭 Jamnagar</div>
      <div class="area-pill">🏗️ Kutch</div>
      <div class="area-pill">🏺 Morbi</div>
      <div class="area-pill">🌆 Ahmedabad</div>
      <div class="area-pill">🏛️ Vadodara</div>
      <div class="area-pill">🌊 Surat</div>
      <div class="area-pill">⚓ Vapi</div>
      <div class="area-pill">⚗️ Dahej</div>
      <div class="area-pill">🏘️ Limdi</div>
      <div class="area-pill">🌾 Rajkot</div>
      <div class="area-pill">🏭 Bhavnagar</div>
      <div class="area-pill">🚢 Mundra</div>
    </div>

    <div style="text-align:center;margin-top:28px;">
      <a href="https://www.google.com/maps/search/Jamnagar" target="_blank" class="btn btn-blue">📍 View Office Location</a>
    </div>
  </div>
</section>

<!-- REVIEWS -->
<section class="section">
  <div class="section-inner">
    <p class="sec-badge">Customer Reviews</p>
    <h2 class="sec-title">What Clients Say</h2>
    <p class="sec-sub">Gujarat ભરના truck owners અને businesses ની feedback.</p>

    <div class="reviews-grid">
      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <p class="review-text">"Fast service and professional drivers. Industrial load was delivered on time. Highly recommended for Jamnagar routes."</p>
        <div class="review-author">— Transport Contractor, Jamnagar</div>
      </div>
      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <p class="review-text">"Reliable support for industrial loads from Dahej. Return load service is very helpful and saves money."</p>
        <div class="review-author">— Fleet Owner, Dahej</div>
      </div>
      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <p class="review-text">"Best tipper and dumper service in Gujarat. Responsive on WhatsApp and honest rates. Will use again."</p>
        <div class="review-author">— Builder, Morbi</div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="section contact-section" id="contact">
  <div class="section-inner">
    <p class="sec-badge" style="color:#ffd84d;">Contact Us</p>
    <h2 class="sec-title">Contact Meera Logistics</h2>
    <p class="sec-sub">Truck booking, return load, fleet inquiry — ગમે ત્યારે contact કરો.</p>

    <div class="contact-grid">
      <div class="contact-card">
        <div class="contact-icon">📞</div>
        <h3>Phone / Call</h3>
        <a href="tel:9558959579">9558959579</a>
      </div>
      <div class="contact-card">
        <div class="contact-icon">📲</div>
        <h3>WhatsApp</h3>
        <a href="https://wa.me/919558959579" target="_blank">+91 9558959579</a>
      </div>
      <div class="contact-card">
        <div class="contact-icon">📍</div>
        <h3>Office Location</h3>
        <p>Jamnagar, Gujarat</p>
      </div>
      <div class="contact-card">
        <div class="contact-icon">🌐</div>
        <h3>Website</h3>
        <a href="https://meeralogistics.in" target="_blank">meeralogistics.in</a>
      </div>
    </div>

    <div class="contact-btns">
      <a href="tel:9558959579" class="btn btn-gold">📞 Call Now</a>
      <a href="https://wa.me/919558959579" target="_blank" class="btn btn-green">📲 WhatsApp Contact</a>
      <a href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20I%20want%20to%20book%20a%20truck." target="_blank" class="btn btn-blue">🚛 Book Truck Now</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <p style="margin-bottom:8px;">
    <strong style="color:#94a3b8;">MEERA LOGISTICS</strong> — Trusted Transport Partner Across Gujarat 🚛
  </p>
  <p>
    <a href="https://meeralogistics.in">meeralogistics.in</a> &nbsp;|&nbsp;
    <a href="tel:9558959579">9558959579</a> &nbsp;|&nbsp;
    Jamnagar, Gujarat
  </p>
  <p style="margin-top:10px;">© 2026 Meera Logistics. All Rights Reserved.</p>
</footer>

<!-- FLOATING WHATSAPP -->
<a href="https://wa.me/919558959579" target="_blank" class="wa-float" title="WhatsApp">📲</a>

<script>
function sendBooking() {
  const from = document.getElementById('from').value.trim();
  const to = document.getElementById('to').value.trim();
  const goods = document.getElementById('goods').value.trim();
  const truck = document.getElementById('truck').value.trim();
  const dt = document.getElementById('datetime').value.trim();
  const mob = document.getElementById('mobile').value.trim();

  if (!from || !to) {
    alert('Please fill in Loading and Unloading Point.');
    return;
  }

  const msg = encodeURIComponent(
    `Hello Meera Logistics,\nMane Truck Book Karvu Chhe.\n\n` +
    `📍 Loading: ${from || '-'}\n` +
    `📍 Unloading: ${to || '-'}\n` +
    `📦 Goods: ${goods || '-'}\n` +
    `🚛 Truck: ${truck || '-'}\n` +
    `📅 Time: ${dt || '-'}\n` +
    `📞 Mobile: ${mob || '-'}`
  );

  window.open('https://wa.me/919558959579?text=' + msg, '_blank');
}
</script>
</body>
</html>
