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
    width: 48px;
    height: 48px;
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

  .ml-nav-links a:hover {
    background: var(--bg2);
    color: var(--blue);
  }

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

  .ml-hero-inner {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: auto;
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

  .ml-hero h1 span {
    color: var(--gold2);
  }

  .ml-hero-keyword {
    color: #dbe7ff;
    font-size: clamp(22px, 4vw, 34px);
    line-height: 1.2;
    margin: 16px auto 0;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .ml-hero-sub {
    font-size: clamp(15px, 3vw, 20px);
    color: #bdd0ff;
    max-width: 760px;
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

  .ml-hero-stat {
    text-align: center;
  }

  .ml-hero-stat-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 38px;
    color: var(--gold2);
    line-height: 1;
  }

  .ml-hero-stat-label {
    font-size: 12px;
    color: #8aaee0;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .ml-hero-btns {
    display: flex;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
  }

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

  .ml-btn:hover {
    transform: translateY(-2px);
    opacity: 0.93;
  }

  .ml-btn:active {
    transform: scale(0.97);
  }

  .ml-btn-blue {
    background: var(--blue);
    color: white;
    box-shadow: 0 4px 16px rgba(26,86,219,0.35);
  }

  .ml-btn-green {
    background: var(--green);
    color: white;
    box-shadow: 0 4px 16px rgba(22,163,74,0.35);
  }

  .ml-btn-gold {
    background: var(--gold);
    color: var(--navy);
    box-shadow: 0 4px 16px rgba(245,181,0,0.30);
    font-weight: 800;
  }

  .ml-btn-outline {
    background: transparent;
    color: white;
    border: 2px solid rgba(255,255,255,0.4);
  }

  .ml-btn-full {
    width: 100%;
    justify-content: center;
    font-size: 18px;
    padding: 16px;
  }

  .ml-section {
    padding: 64px 20px;
  }

  .ml-section-inner {
    max-width: 1150px;
    margin: auto;
  }

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
    max-width: 720px;
    margin: 0 auto 40px;
    font-size: 16px;
  }

  .ml-services-grid,
  .ml-whyus-grid,
  .ml-loads-grid,
  .ml-reviews-grid,
  .ml-contact-grid {
    display: grid;
    gap: 20px;
  }

  .ml-services-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .ml-svc-card,
  .ml-load-card,
  .ml-review-card {
    background: white;
    border-radius: 20px;
    padding: 28px 22px;
    box-shadow: var(--card-shadow);
    border: 1.5px solid var(--border);
  }

  .ml-svc-card {
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .ml-svc-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 36px rgba(26,86,219,0.16);
  }

  .ml-svc-icon {
    width: 60px;
    height: 60px;
    background: var(--bg2);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin: 0 auto 16px;
    border: 1.5px solid var(--border);
  }

  .ml-svc-card h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--navy2);
    margin-bottom: 8px;
  }

  .ml-svc-card p {
    font-size: 14px;
    color: var(--muted);
    line-height: 1.6;
  }

  .ml-seo-box {
    margin-top: 30px;
    background: #ffffff;
    border: 1.5px solid var(--border);
    box-shadow: var(--card-shadow);
    border-radius: 22px;
    padding: 24px;
    color: var(--muted);
    font-size: 15px;
  }

  .ml-seo-box strong {
    color: var(--navy2);
  }

  .ml-materials-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .ml-material-card {
    overflow: hidden;
    margin: 0;
    background: white;
    border: 1.5px solid var(--border);
    border-radius: 18px;
    box-shadow: var(--card-shadow);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .ml-material-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(26,86,219,0.16);
  }

  .ml-material-card img {
    width: 100%;
    aspect-ratio: 1 / 1;
    display: block;
    object-fit: cover;
    background: #e7ecf6;
  }

  .ml-material-name {
    padding: 14px 10px;
    text-align: center;
    color: var(--navy);
    font-size: 17px;
    font-weight: 800;
    line-height: 1.25;
  }

  .ml-fleet-bg {
    background: linear-gradient(180deg, #e9f0ff 0%, #f7f9ff 100%);
  }

  .ml-fleet-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .ml-fleet-card {
    position: relative;
    min-height: 260px;
    overflow: hidden;
    border-radius: 20px;
    background: var(--navy);
    border: 2px solid white;
    box-shadow: var(--card-shadow);
  }

  .ml-fleet-card img {
    width: 100%;
    height: 100%;
    min-height: 260px;
    display: block;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  .ml-fleet-card:hover img {
    transform: scale(1.04);
  }

  .ml-fleet-caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 34px 16px 15px;
    background: linear-gradient(transparent, rgba(2, 13, 46, 0.92));
    color: white;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.2px;
  }

  .ml-fleet-note {
    margin: 26px auto 0;
    max-width: 850px;
    padding: 16px 20px;
    text-align: center;
    border-radius: 14px;
    background: white;
    border: 1.5px solid var(--border);
    color: var(--muted);
    font-weight: 600;
  }

  .ml-whyus {
    background: var(--navy);
    color: white;
  }

  .ml-whyus .ml-sec-title {
    color: white;
  }

  .ml-whyus .ml-sec-sub {
    color: #8aaee0;
  }

  .ml-whyus-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

  .ml-why-card h3 {
    font-size: 17px;
    font-weight: 700;
    color: white;
    margin-bottom: 8px;
  }

  .ml-why-card p {
    font-size: 14px;
    color: #8aaee0;
  }

  .ml-booking-bg {
    background: linear-gradient(135deg, var(--bg2) 0%, #d6e6ff 100%);
  }

  .ml-booking-card {
    max-width: 680px;
    margin: auto;
    background: white;
    border-radius: 28px;
    padding: 36px 32px;
    box-shadow: 0 12px 48px rgba(26,86,219,0.13);
    border: 1.5px solid var(--border);
  }

  .ml-form-group {
    margin-bottom: 16px;
  }

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
  .ml-form-group select:focus {
    border-color: var(--blue);
    background: white;
  }

  .ml-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .ml-loads-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 22px;
  }

  .ml-load-card {
    border: 2px solid var(--border);
    transition: transform 0.2s, border-color 0.2s;
  }

  .ml-load-card:hover {
    transform: translateY(-4px);
    border-color: var(--blue);
  }

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

  .ml-load-route span {
    color: var(--blue);
  }

  .ml-load-info {
    font-size: 15px;
    color: var(--text);
    margin-bottom: 6px;
    font-weight: 500;
  }

  .ml-load-info strong {
    color: var(--navy2);
  }

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

  .ml-load-actions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 12px;
  }

  .ml-load-actions .ml-btn {
    width: 100%;
    min-width: 0;
    padding: 12px 10px;
    font-size: 14px;
    white-space: normal;
    text-align: center;
    line-height: 1.25;
  }

  .ml-location-links {
    display: grid;
    gap: 8px;
    margin: 10px 0 14px;
  }

  .ml-location-link {
    display: block;
    padding: 9px 11px;
    border-radius: 9px;
    background: #f8fafc;
    border: 1px solid var(--border);
    color: var(--blue2);
    text-decoration: none;
    font-size: 13px;
    font-weight: 700;
  }

  .ml-location-link:hover {
    background: #eaf1ff;
    border-color: var(--blue);
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

  .ml-post-truck-banner p {
    color: #c8d9ff;
    margin-bottom: 22px;
  }

  .ml-areas-bg {
    background: var(--bg2);
  }

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

  .ml-area-pill:hover {
    background: var(--blue);
    color: white;
    border-color: var(--blue);
  }

  .ml-reviews-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  .ml-route-grid,
  .ml-process-grid,
  .ml-faq-grid {
    display: grid;
    gap: 18px;
  }

  .ml-route-grid {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }

  .ml-route-card,
  .ml-process-card,
  .ml-faq-item,
  .ml-google-review-card {
    background: white;
    border: 1.5px solid var(--border);
    border-radius: 18px;
    padding: 22px;
    box-shadow: var(--card-shadow);
  }

  .ml-route-card h3,
  .ml-process-card h3 {
    color: var(--navy2);
    font-size: 19px;
    margin-bottom: 7px;
  }

  .ml-route-card p,
  .ml-process-card p,
  .ml-faq-item p {
    color: var(--muted);
    font-size: 15px;
  }

  .ml-process-grid {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  }

  .ml-process-num {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--blue);
    color: white;
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 14px;
  }

  .ml-faq-grid {
    max-width: 900px;
    margin: auto;
  }

  .ml-faq-item h3 {
    color: var(--navy);
    font-size: 18px;
    margin-bottom: 8px;
  }

  .ml-google-review-card {
    max-width: 760px;
    margin: auto;
    text-align: center;
    border-color: #f5cf62;
    background: linear-gradient(135deg, #fffdf6, #ffffff);
  }

  .ml-google-review-card .stars {
    color: var(--gold);
    font-size: 30px;
    letter-spacing: 4px;
    margin-bottom: 12px;
  }

  .ml-review-stars {
    color: var(--gold);
    font-size: 20px;
    margin-bottom: 12px;
  }

  .ml-review-text {
    color: var(--muted);
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 14px;
    font-style: italic;
  }

  .ml-review-author {
    font-weight: 700;
    color: var(--navy2);
    font-size: 15px;
  }

  .ml-contact-section {
    background: linear-gradient(135deg, #020d2e 0%, #071a4f 60%, #0e2e72 100%);
    color: white;
    padding: 64px 20px;
  }

  .ml-contact-section .ml-sec-title {
    color: white;
  }

  .ml-contact-section .ml-sec-sub {
    color: #8aaee0;
  }

  .ml-contact-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-bottom: 36px;
  }

  .ml-contact-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 18px;
    padding: 26px 22px;
    text-align: center;
  }

  .ml-contact-icon {
    font-size: 36px;
    margin-bottom: 10px;
  }

  .ml-contact-card h3 {
    font-size: 14px;
    color: #8aaee0;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  .ml-contact-card p,
  .ml-contact-card a {
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-decoration: none;
  }

  .ml-contact-card a:hover {
    color: var(--gold2);
  }

  .ml-contact-btns {
    display: flex;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .ml-footer {
    background: #020617;
    color: #475569;
    text-align: center;
    padding: 22px 20px;
    font-size: 14px;
  }

  .ml-footer a {
    color: #64748b;
    text-decoration: none;
  }

  .ml-footer a:hover {
    color: var(--gold2);
  }

  .ml-wa-float {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 999;
    width: 58px;
    height: 58px;
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

  .ml-wa-float:hover {
    transform: scale(1.12);
  }

  .ml-truck-divider {
    text-align: center;
    padding: 10px 0;
    color: var(--border);
    font-size: 32px;
    letter-spacing: 8px;
    overflow: hidden;
    white-space: nowrap;
  }

  @media (max-width: 900px) {
    .ml-materials-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .ml-fleet-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    .ml-materials-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }

    .ml-material-name {
      padding: 11px 7px;
      font-size: 14px;
    }

    .ml-fleet-grid {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .ml-fleet-card,
    .ml-fleet-card img {
      min-height: 230px;
    }

    .ml-form-row {
      grid-template-columns: 1fr;
    }

    .ml-nav-links {
      display: none;
    }

    .ml-booking-card {
      padding: 28px 20px;
    }

  }
`;

const services = [
  {
    icon: "🚛",
    title: "ટિપર ટ્રાન્સપોર્ટ",
    desc: "રેતી, કપચી, કન્સ્ટ્રક્શન મટિરિયલ અને બલ્ક માલ માટે ઝડપી Tipper Service Gujarat.",
  },
  {
    icon: "⛏️",
    title: "ડમ્પર સર્વિસ",
    desc: "ઇન્ડસ્ટ્રીયલ અને હેવી મટિરિયલ માટે વિશ્વસનીય Dumper Transport Service.",
  },
  {
    icon: "🏗️",
    title: "ટ્રક બુકિંગ",
    desc: "Jamnagar થી Gujarat ભર માટે Truck Booking અને Full Load Transport Service.",
  },
  {
    icon: "🔄",
    title: "રિટર્ન લોડ",
    desc: "ખાલી ન જાવ — Return Load Gujarat માટે ટ્રક ઓનર અને ડ્રાઈવર માટે ફ્રી લોડ મેચિંગ.",
  },
  {
    icon: "📦",
    title: "ફ્લીટ મેનેજમેન્ટ",
    desc: "મોટા ઇન્ડસ્ટ્રીયલ અને કોમર્શિયલ પ્રોજેક્ટ માટે મલ્ટી ટ્રક મેનેજમેન્ટ.",
  },
  {
    icon: "🗺️",
    title: "ગુજરાત નેટવર્ક",
    desc: "જામનગર, દહેજ, મોરબી, સુરત, અમદાવાદ, કચ્છ સહિત All Gujarat Transport Service.",
  },
];

const fleetPhotos = [
  {
    src: "/fleet/meera-logistics-tata-tipper.webp",
    title: "TATA Signa Tipper",
    alt: "Meera Logistics TATA Signa tipper truck in Gujarat",
  },
  {
    src: "/fleet/meera-logistics-white-tipper.webp",
    title: "Heavy Duty Tipper",
    alt: "Meera Logistics heavy duty white TATA tipper truck",
  },
  {
    src: "/fleet/meera-logistics-blue-dumper.webp",
    title: "Blue Dumper Truck",
    alt: "Meera Logistics blue dumper truck for construction material",
  },
  {
    src: "/fleet/meera-logistics-heavy-truck.webp",
    title: "Multi Axle Truck",
    alt: "Meera Logistics multi axle transport truck in Gujarat",
  },
  {
    src: "/fleet/meera-logistics-trailer-dumper.webp",
    title: "Trailer Dumper",
    alt: "Meera Logistics trailer dumper for bulk material transport",
  },
  {
    src: "/fleet/meera-logistics-site-transport.webp",
    title: "Site Material Transport",
    alt: "Meera Logistics dumper working at construction site",
  },
  {
    src: "/fleet/meera-logistics-dumper-truck.webp",
    title: "Construction Dumper",
    alt: "Meera Logistics construction dumper truck",
  },
  {
    src: "/fleet/meera-logistics-hydraulic-tipper.webp",
    title: "Hydraulic Tipper",
    alt: "Meera Logistics hydraulic tipper unloading material",
  },
  {
    src: "/fleet/meera-logistics-color-tipper.webp",
    title: "Tipper Transport",
    alt: "Meera Logistics colourful tipper truck transport service",
  },
  {
    src: "/fleet/meera-logistics-excavator.webp",
    title: "Excavator",
    alt: "Meera Logistics excavator machine for earthwork",
  },
  {
    src: "/fleet/meera-logistics-jcb.webp",
    title: "JCB Service",
    alt: "Meera Logistics JCB machine for loading and earthwork",
  },
  {
    src: "/fleet/meera-logistics-road-roller.webp",
    title: "Road Roller",
    alt: "Meera Logistics road roller equipment",
  },
];

const transportedMaterials = [
  ["કપચી", "kapchi.webp", "Kapchi crushed stone aggregate transport"],
  ["રેતી (Sand)", "sand.webp", "Construction sand transport"],
  ["માટી (Soil)", "soil.webp", "Soil and earth material transport"],
  ["કોલસો (Coal)", "coal.webp", "Coal transport service Gujarat"],
  ["પેટકોક (Petcoke)", "petcoke.webp", "Petroleum coke petcoke transport"],
  ["સિમેન્ટ (Cement)", "cement.webp", "Cement bag transport"],
  ["ઈંટ (Bricks)", "bricks.webp", "Construction bricks transport"],
  ["બાંધકામ સામગ્રી", "construction-material.webp", "Construction material transport"],
  ["Industrial Material", "industrial-material.webp", "Industrial material transport Gujarat"],
  ["Machinery", "machinery.webp", "Industrial machinery transport"],
  ["Fly Ash", "fly-ash.webp", "Fly ash bulk transport"],
  ["Minerals", "minerals.webp", "Industrial minerals transport"],
  ["અનાજ (Grain)", "grain.webp", "Grain transport service"],
  ["કૃષિ સામગ્રી", "agriculture-material.webp", "Agricultural material transport"],
  ["Commercial Goods", "commercial-goods.webp", "Commercial goods transport"],
  ["General Goods", "general-goods.webp", "General goods truck transport"],
  ["Bulk Material", "bulk-material.webp", "Bulk material transport"],
  ["મીઠું (Salt)", "salt.webp", "Industrial salt transport Gujarat"],
  ["Copper Slag", "copper-slag.webp", "Copper slag transport"],
  ["Sulphur", "sulphur.webp", "Sulphur granules transport"],
  ["Gypsum", "gypsum.webp", "Gypsum mineral transport"],
  ["Plastic Dana", "plastic-dana.webp", "Plastic granules transport"],
  ["Clinker", "clinker.webp", "Cement clinker transport"],
  ["Tiles", "tiles.webp", "Ceramic tiles transport Gujarat"],
  ["Bio Coal", "bio-coal.webp", "Bio coal briquettes transport"],
  ["Fertilizer", "fertilizer.webp", "Fertilizer transport service"],
  ["કચરો / Waste Material", "waste-material.webp", "Dry waste material transport"],
];

const whyUs = [
  {
    num: "24/7",
    title: "24/7 સપોર્ટ",
    desc: "દિવસ હોય કે રાત — ટ્રક બુકિંગ અને લોડ માટે સતત સપોર્ટ.",
  },
  {
    num: "Fast",
    title: "ઝડપી ડિસ્પેચ",
    desc: "તાત્કાલિક Transport Service માટે same day ટ્રક વ્યવસ્થા.",
  },
  {
    num: "Free",
    title: "ફ્રી રિટર્ન લોડ",
    desc: "ટ્રક પોસ્ટ કરો અથવા રિટર્ન લોડ શોધો — સરળ અને ઝડપી સેવા.",
  },
  {
    num: "All",
    title: "ગુજરાત કવરેજ",
    desc: "ગુજરાતના મુખ્ય શહેરો, પોર્ટ અને ઇન્ડસ્ટ્રીયલ વિસ્તારોમાં સેવા.",
  },
];

const areas = [
  "🏭 જામનગર",
  "🏗️ કચ્છ",
  "🏺 મોરબી",
  "🌆 અમદાવાદ",
  "🏛️ વડોદરા",
  "🌊 સુરત",
  "⚓ વાપી",
  "⚗️ દહેજ",
  "🏘️ લીમડી",
  "🌾 રાજકોટ",
  "🏭 ભાવનગર",
  "🚢 મુન્દ્રા",
];

const routes = [
  ["જામનગર → અમદાવાદ", "Full Load, industrial goods અને general cargo transport."],
  ["જામનગર → મોરબી", "Ceramic, construction material અને commercial load support."],
  ["જામનગર → દહેજ", "Industrial route માટે truck, trailer અને return load service."],
  ["જામનગર → કચ્છ / મુન્દ્રા", "Port અને industrial area માટે dependable transport support."],
  ["જામનગર → સુરત / વાપી", "Long-route truck booking અને return load coordination."],
  ["All Gujarat Routes", "Loading point અને unloading point પ્રમાણે vehicle arrangement."],
];

const faqs = [
  [
    "Jamnagarથી truck booking કેવી રીતે કરવી?",
    "Loading point, unloading point, material અને truck typeની માહિતી WhatsApp formથી મોકલો. અમારી ટીમ availability અને rate માટે સંપર્ક કરશે.",
  ],
  [
    "કયા પ્રકારના વાહનો ઉપલબ્ધ છે?",
    "Requirement પ્રમાણે tipper, dumper, body truck, trailer અને full-load vehicle માટે સંપર્ક કરી શકો છો.",
  ],
  [
    "Return Load service કોના માટે છે?",
    "Truck owner, driver અને broker ખાલી truckની location અને route મોકલીને return load matching માટે enquiry કરી શકે છે.",
  ],
  [
    "Transport rate કેવી રીતે નક્કી થાય છે?",
    "Rate route, material, vehicle type, weight, loading conditions અને current availability પર આધારિત હોય છે.",
  ],
  [
    "Service કયા વિસ્તારોમાં મળે છે?",
    "Jamnagarથી Ahmedabad, Morbi, Kutch, Mundra, Dahej, Surat, Vapi, Vadodara, Rajkot સહિત Gujaratના મુખ્ય routes પર service મળે છે.",
  ],
];

const googleReviews = [
  "Khima Makvana",
  "Jagdish Rathod",
  "Sidhdharajsinh Jadeja",
  "Dhirajbhai Bhadka",
  "Kripal Boricha",
  "Ram Modhwadhiya",
  "Chandrasinh Rathod",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function Home() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    goods: "",
    truck: "",
    datetime: "",
    mobile: "",
  });

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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendBooking = () => {
    if (!form.from || !form.to) {
      alert("કૃપા કરીને લોડિંગ અને અનલોડિંગ પોઈન્ટ ભરો.");
      return;
    }

    const msg = encodeURIComponent(
      `Hello Meera Logistics,\nમારે ટ્રક બુક કરવો છે.\n\n` +
        `📍 લોડિંગ: ${form.from || "-"}\n` +
        `📍 અનલોડિંગ: ${form.to || "-"}\n` +
        `📦 માલ: ${form.goods || "-"}\n` +
        `🚛 ટ્રક: ${form.truck || "-"}\n` +
        `📅 સમય: ${form.datetime || "-"}\n` +
        `📞 મોબાઈલ: ${form.mobile || "-"}`
    );

    window.open("https://wa.me/919558959579?text=" + msg, "_blank");
  };

  return (
    <>
      <style>{styles}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="ml-body">
        <nav className="ml-nav">
          <a href="#" className="ml-nav-brand">
            <img
              src="/meera-logo.png"
              alt="Meera Logistics Gujarat Transport Service"
              className="ml-nav-logo"
            />
            <span className="ml-nav-title">
              MEERA <span>LOGISTICS</span>
            </span>
          </a>

          <div className="ml-nav-links">
            <a href="#services">સર્વિસ</a>
            <a href="#materials">માલ</a>
            <a href="#fleet">ફ્લીટ</a>
            <a href="#loads">રિટર્ન લોડ</a>
            <a href="#booking">ટ્રક બુકિંગ</a>
            <a href="#routes">રૂટ</a>
            <a href="#reviews">રિવ્યૂ</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">સંપર્ક</a>
            <a
              href="https://wa.me/919558959579"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-btn ml-btn-green"
              style={{ borderRadius: 10, padding: "9px 18px" }}
            >
              📲 વોટ્સએપ
            </a>
          </div>
        </nav>

        <section className="ml-hero">
          <div className="ml-hero-dots" />

          <div className="ml-hero-inner">
            <div className="ml-hero-badge">
              🚛 વિશ્વસનીય Gujarat Transport Service
            </div>

            <h1>
              MEERA <span>LOGISTICS</span>
            </h1>

            <h2 className="ml-hero-keyword">
              Truck Booking &amp; Transport Service in Jamnagar, Gujarat
            </h2>

            <p className="ml-hero-sub">
              Meera Logistics — જામનગરથી સમગ્ર ગુજરાતમાં Truck Booking,
              Tipper Service, Dumper Transport અને Return Load માટે વિશ્વસનીય
              Gujarat Transport Service.
            </p>

            <div className="ml-hero-stats">
              {[
                ["24/7", "સપોર્ટ"],
                ["ALL", "ગુજરાત"],
                ["100%", "ભરોસો"],
              ].map(([num, label]) => (
                <div key={label} className="ml-hero-stat">
                  <div className="ml-hero-stat-num">{num}</div>
                  <div className="ml-hero-stat-label">{label}</div>
                </div>
              ))}
            </div>

            <div className="ml-hero-btns">
              <a href="tel:9558959579" className="ml-btn ml-btn-gold">
                📞 કોલ કરો
              </a>

              <a href="#loads" className="ml-btn ml-btn-blue">
                🔄 રિટર્ન લોડ બોર્ડ
              </a>

              <a
                href="https://wa.me/919558959579"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn ml-btn-outline"
              >
                📲 વોટ્સએપ
              </a>
            </div>
          </div>
        </section>

        <div className="ml-truck-divider">🚛 🚛 🚛 🚛 🚛</div>

        <section className="ml-section" id="services">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">અમારી સર્વિસ</p>

            <h2 className="ml-sec-title">
              Gujarat Transport Solution
            </h2>

            <p className="ml-sec-sub">
              ગુજરાતભરમાં ઇન્ડસ્ટ્રીયલ, કન્સ્ટ્રક્શન અને કોમર્શિયલ
              ટ્રાન્સપોર્ટ માટે Truck, Tipper, Dumper અને Return Load Service.
            </p>

            <div className="ml-services-grid">
              {services.map((s) => (
                <article key={s.title} className="ml-svc-card">
                  <div className="ml-svc-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>

            <div className="ml-seo-box">
              <strong>Meera Logistics</strong> Jamnagar based transport partner
              છે, જે Gujarat Transport Service, Truck Booking Gujarat, Tipper
              Service Gujarat, Dumper Transport અને Return Load Gujarat માટે
              ઝડપી અને વિશ્વસનીય સેવા આપે છે. અમે Jamnagar, Morbi, Kutch,
              Dahej, Surat, Vapi, Vadodara, Ahmedabad, Rajkot અને Mundra જેવા
              મુખ્ય રૂટ પર ટ્રક અને લોડ સપોર્ટ આપીએ છીએ.
            </div>
          </div>
        </section>

        <section className="ml-section" id="materials">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">MATERIAL SUPPLY &amp; TRANSPORT SERVICE</p>

            <h2 className="ml-sec-title">
              અમે કયા માલનું Transport અને વેચાણ કરીએ છીએ?
            </h2>

            <p className="ml-sec-sub">
              Construction, Industrial, Agriculture અને Commercial ક્ષેત્રના
              વિવિધ માલનું વેચાણ તેમજ Truck, Tipper, Dumper અને Full Load
              Transport Service સમગ્ર Gujaratમાં ઉપલબ્ધ છે.
            </p>

            <div className="ml-fleet-note" style={{ marginTop: 0, marginBottom: 28 }}>
              🚛📦 નીચે દર્શાવેલ કોઈપણ માલ ગુજરાતમાં કોઈપણ જગ્યાએ જોઈએ તો
              Meera Logisticsનો સંપર્ક કરો—વેચાણથી લઈને તમારા સ્થળ સુધી
              Transportની સંપૂર્ણ સુવિધા ઉપલબ્ધ છે.
            </div>

            <div className="ml-materials-grid">
              {transportedMaterials.map(([name, image, alt]) => (
                <figure key={name} className="ml-material-card">
                  <img
                    src={`/materials/${image}`}
                    alt={`Meera Logistics ${alt}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="ml-material-name">{name}</figcaption>
                </figure>
              ))}
            </div>

            <div className="ml-fleet-note">
              📦 ઉપર દર્શાવેલ માલના વેચાણ અને Transport માટે તેમજ અન્ય
              પ્રકારના માલની જરૂરિયાત માટે અમારી સાથે સંપર્ક કરો.
            </div>
          </div>
        </section>

        <section className="ml-section ml-fleet-bg" id="fleet">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">ORIGINAL VEHICLE PHOTOS</p>

            <h2 className="ml-sec-title">અમારું Fleet &amp; Equipment</h2>

            <p className="ml-sec-sub">
              Meera Logistics સાથે જોડાયેલા original Trucks, Tippers, Dumpers
              અને Heavy Equipment — Gujaratમાં વિશ્વસનીય transport અને
              construction support માટે.
            </p>

            <div className="ml-fleet-grid">
              {fleetPhotos.map((photo) => (
                <figure key={photo.src} className="ml-fleet-card">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="ml-fleet-caption">
                    {photo.title}
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="ml-fleet-note">
              🚛 Truck, Tipper, Dumper, JCB અને Heavy Equipment માટે
              availability જાણવા અમારો સંપર્ક કરો.
            </p>
          </div>
        </section>

        <section className="ml-section ml-whyus">
          <div className="ml-section-inner">
            <p className="ml-sec-badge" style={{ color: "#ffd84d" }}>
              શા માટે અમે?
            </p>

            <h2 className="ml-sec-title">
              ગુજરાતનો વિશ્વસનીય Transport Partner
            </h2>

            <p className="ml-sec-sub">
              અમે ઝડપ, ભરોસો અને પ્રોફેશનલ સર્વિસ સાથે Gujarat Logistics અને
              Transport Industry ને સેવા આપીએ છીએ.
            </p>

            <div className="ml-whyus-grid">
              {whyUs.map((w) => (
                <article key={w.title} className="ml-why-card">
                  <div className="ml-why-num">{w.num}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ml-section" id="loads">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">લાઈવ લોડ બોર્ડ</p>

            <h2 className="ml-sec-title">Return Load Gujarat</h2>

            <p className="ml-sec-sub">
              ડિલિવરી પૂર્ણ થઈ ગઈ? હવે ખાલી ન જાવ — Jamnagar, Morbi, Dahej,
              Surat, Ahmedabad અને Gujarat ભર Return Load માટે સંપર્ક કરો.
            </p>

            {loadingLoads ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  color: "var(--muted)",
                  fontSize: 18,
                }}
              >
                🔄 લોડ માહિતી લોડ થઈ રહી છે...
              </div>
            ) : loads.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  color: "var(--muted)",
                  fontSize: 18,
                }}
              >
                અત્યારે કોઈ લોડ ઉપલબ્ધ નથી. થોડીવારમાં ફરી ચેક કરો.
              </div>
            ) : (
              <div className="ml-loads-grid">
                {loads.map((l, i) => (
                  <article key={i} className="ml-load-card">
                    <div className="ml-load-badge">🔄 રિટર્ન લોડ</div>

                    <div className="ml-load-route">
                      {l.from} <span>→</span> {l.to}
                    </div>

                    <div className="ml-load-info">
                      🚛 ટ્રક પ્રકાર: <strong>{l.truck}</strong>
                    </div>

                    <div className="ml-load-info">
                      📦 માલ: <strong>{l.material}</strong>
                    </div>

                    <div className="ml-load-info">
                      ⏰ સમય: <strong>{l.time}</strong>
                    </div>

                    <div className="ml-load-rate">💰 {l.rate}</div>

                    {(l.loadingMap || l.unloadingMap) && (
                      <div className="ml-location-links">
                        {l.loadingMap && (
                          <a
                            href={l.loadingMap}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-location-link"
                          >
                            📍 Loading Point Google Mapsમાં જુઓ
                          </a>
                        )}
                        {l.unloadingMap && (
                          <a
                            href={l.unloadingMap}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-location-link"
                          >
                            🏁 Unloading Point Google Mapsમાં જુઓ
                          </a>
                        )}
                      </div>
                    )}

                    <div className="ml-load-actions">
                      <a
                        href={`https://wa.me/919558959579?text=${encodeURIComponent(
                          `Hello Meera Logistics, Return Load Book Karvu Chhe\n\n` +
                          `Route: ${l.from} → ${l.to}\n` +
                          `Truck: ${l.truck}\nMaterial: ${l.material}\n` +
                          `Time: ${l.time}\nRate: ${l.rate}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-btn ml-btn-green ml-btn-full"
                      >
                        📲 હમણાં બુક કરો
                      </a>

                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                          `◾◾ *${l.material}* ◾◾\n\n` +
                          `🚚 *મીરા લોજિસ્ટિક્સ* 🚚\n\n` +
                          `📍 *${l.from} થી ${l.to}*\n\n` +
                          `જેને આ લોડ ભરવો હોય તેઓ નીચે આપેલા નંબર પર જાણ કરવી.\n\n` +
                          `📱 95589 59579\n` +
                          `📱 95589 59580\n\n` +
                          `🚛 *${l.truck} જ ચાલશે*\n\n` +
                          `📌 *Loading અને Unloading Point:*\n` +
                          `https://www.meeralogistics.in/#loads\n\n` +
                          `⭐ *અમને Google Review આપો:*\n` +
                          `https://share.google/u1RdWtaFpQkWwCnsl\n\n` +
                          `_વિશ્વસનીય Gujarat Transport Service_ 🤝`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-btn ml-btn-blue ml-btn-full"
                      >
                        ↗️ WhatsApp પર Share કરો
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="ml-post-truck-banner">
              <h3>🚛 રિટર્ન ટ્રક પોસ્ટ કરો — ફ્રી</h3>

              <p>
                ટ્રક ઓનર, ડ્રાઈવર અથવા બ્રોકર — ખાલી ટ્રકની માહિતી મોકલો અને
                Return Load Matching Service મેળવો.
              </p>

              <a
                href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%0AMare%20Return%20Truck%20Post%20Karvu%20Chhe.%0A%0AName%3A%0AMobile%3A%0ATruck%20Type%3A%0AVehicle%20Number%3A%0ACurrent%20Location%3A%0AAvailable%20Route%3A"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn ml-btn-gold"
              >
                📲 વોટ્સએપ પર પોસ્ટ કરો
              </a>
            </div>
          </div>
        </section>

        <section className="ml-section ml-booking-bg" id="booking">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">ટ્રાન્સપોર્ટ બુકિંગ</p>

            <h2 className="ml-sec-title">Truck Booking Gujarat</h2>

            <p className="ml-sec-sub">
              Loading અને Unloading point ભરો અને WhatsApp પર Truck Booking
              enquiry મોકલો.
            </p>

            <div className="ml-booking-card">
              <div className="ml-form-row">
                <div className="ml-form-group">
                  <label>📍 લોડિંગ પોઈન્ટ</label>
                  <input
                    name="from"
                    value={form.from}
                    onChange={handleChange}
                    placeholder="દા.ત. જામનગર"
                  />
                </div>

                <div className="ml-form-group">
                  <label>📍 અનલોડિંગ પોઈન્ટ</label>
                  <input
                    name="to"
                    value={form.to}
                    onChange={handleChange}
                    placeholder="દા.ત. અમદાવાદ"
                  />
                </div>
              </div>

              <div className="ml-form-group">
                <label>📦 માલની માહિતી</label>
                <input
                  name="goods"
                  value={form.goods}
                  onChange={handleChange}
                  placeholder="દા.ત. ઇન્ડસ્ટ્રીયલ માલ, રેતી, ટાઇલ્સ"
                />
              </div>

              <div className="ml-form-row">
                <div className="ml-form-group">
                  <label>🚛 ટ્રક પ્રકાર પસંદ કરો</label>
                  <select
                    name="truck"
                    value={form.truck}
                    onChange={handleChange}
                  >
                    <option value="">ટ્રક પસંદ કરો</option>
                    <option>ટિપર</option>
                    <option>ડમ્પર</option>
                    <option>બોડી ટ્રક</option>
                    <option>ટ્રેલર</option>
                  </select>
                </div>

                <div className="ml-form-group">
                  <label>📅 તારીખ / સમય</label>
                  <input
                    name="datetime"
                    value={form.datetime}
                    onChange={handleChange}
                    placeholder="દા.ત. આજે / કાલે સવારે 7 વાગ્યે"
                  />
                </div>
              </div>

              <div className="ml-form-group">
                <label>📞 તમારો મોબાઈલ નંબર</label>
                <input
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="તમારો મોબાઈલ નંબર"
                />
              </div>

              <button onClick={sendBooking} className="ml-btn ml-btn-green ml-btn-full">
                📲 વોટ્સએપ પર બુકિંગ મોકલો
              </button>
            </div>
          </div>
        </section>

        <section className="ml-section ml-areas-bg">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">સેવા વિસ્તાર</p>

            <h2 className="ml-sec-title">All Gujarat Transport Service</h2>

            <p className="ml-sec-sub">
              Gujarat ના મુખ્ય શહેરો, પોર્ટ અને ઇન્ડસ્ટ્રીયલ વિસ્તારોમાં
              Meera Logistics ની Truck, Tipper, Dumper અને Return Load Service
              ઉપલબ્ધ છે.
            </p>

            <div className="ml-areas-list">
              {areas.map((a) => (
                <div key={a} className="ml-area-pill">
                  {a}
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 28 }}>
              <a
                href="https://maps.app.goo.gl/E2CiE2aEy6tth6Ak7"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn ml-btn-blue"
              >
                📍 ઓફિસ લોકેશન જુઓ
              </a>
            </div>
          </div>
        </section>

        <section className="ml-section" id="routes">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">મુખ્ય ટ્રાન્સપોર્ટ રૂટ</p>

            <h2 className="ml-sec-title">Popular Transport Routes From Jamnagar</h2>

            <p className="ml-sec-sub">
              Gujaratના industrial city, port અને commercial hub માટે truck
              booking અને return load coordination.
            </p>

            <div className="ml-route-grid">
              {routes.map(([title, desc]) => (
                <article key={title} className="ml-route-card">
                  <h3>🚛 {title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ml-section ml-areas-bg">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">સરળ પ્રક્રિયા</p>

            <h2 className="ml-sec-title">Truck Booking કેવી રીતે થાય?</h2>

            <p className="ml-sec-sub">
              માત્ર ત્રણ સરળ stepમાં તમારી transport enquiry મોકલો.
            </p>

            <div className="ml-process-grid">
              {[
                ["1", "માહિતી મોકલો", "Loading, unloading, material અને truck type જણાવો."],
                ["2", "Availability મેળવો", "અમારી ટીમ vehicle availability અને estimated rate જણાવશે."],
                ["3", "Booking Confirm કરો", "Details confirm થયા પછી truck dispatch coordination મળશે."],
              ].map(([num, title, desc]) => (
                <article key={num} className="ml-process-card">
                  <div className="ml-process-num">{num}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ml-section" id="reviews">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">ગ્રાહકોનો વિશ્વાસ</p>

            <h2 className="ml-sec-title">Meera Logistics Google Reviews</h2>

            <p className="ml-sec-sub">
              Meera Logistics વિશે verified customer feedback Google Business
              Profile પર જુઓ અથવા તમારી service experience share કરો.
            </p>

            <div className="ml-google-review-card">
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <h3 style={{ color: "var(--navy)", fontSize: 24, marginBottom: 8 }}>
                5.0 Rating on Google
              </h3>
              <p style={{ color: "var(--muted)", marginBottom: 20 }}>
                7 verified Google ratings • તમામ reviewersએ 5-star rating આપી છે.
              </p>

              <div className="ml-reviews-grid" style={{ marginBottom: 24, textAlign: "left" }}>
                {googleReviews.map((name) => (
                  <article key={name} className="ml-review-card">
                    <div className="ml-review-stars" aria-label="5 stars">★★★★★</div>
                    <div className="ml-review-author">{name}</div>
                    <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 4 }}>
                      Google Review
                    </p>
                  </article>
                ))}
              </div>

              <a
                href="https://share.google/u1RdWtaFpQkWwCnsl"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn ml-btn-blue"
              >
                ⭐ Google Reviews જુઓ
              </a>
            </div>
          </div>
        </section>

        <section className="ml-section ml-areas-bg" id="faq">
          <div className="ml-section-inner">
            <p className="ml-sec-badge">જરૂરી માહિતી</p>

            <h2 className="ml-sec-title">Frequently Asked Questions</h2>

            <p className="ml-sec-sub">
              Truck booking, rate, vehicle અને return load વિશે સામાન્ય પ્રશ્નોના જવાબ.
            </p>

            <div className="ml-faq-grid">
              {faqs.map(([question, answer]) => (
                <article key={question} className="ml-faq-item">
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ml-contact-section" id="contact">
          <div className="ml-section-inner">
            <p className="ml-sec-badge" style={{ color: "#ffd84d" }}>
              સંપર્ક કરો
            </p>

            <h2 className="ml-sec-title">Meera Logistics Contact</h2>

            <p className="ml-sec-sub">
              Truck Booking, Return Load, Tipper Service, Dumper Transport અને
              Fleet માટે ગમે ત્યારે સંપર્ક કરો.
            </p>

            <div className="ml-contact-grid">
              {[
                {
                  icon: "📞",
                  title: "ફોન / કોલ",
                  content: <a href="tel:9558959579">9558959579</a>,
                },
                {
                  icon: "📲",
                  title: "WhatsApp",
                  content: (
                    <a
                      href="https://wa.me/919558959579"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 9558959579
                    </a>
                  ),
                },
                {
                  icon: "📍",
                  title: "ઓફિસ લોકેશન",
                  content: <p>Jamnagar, Gujarat</p>,
                },
                {
                  icon: "🌐",
                  title: "વેબસાઈટ",
                  content: (
                    <a
                      href="https://www.meeralogistics.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      meeralogistics.in
                    </a>
                  ),
                },
              ].map((c) => (
                <article key={c.title} className="ml-contact-card">
                  <div className="ml-contact-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  {c.content}
                </article>
              ))}
            </div>

            <div className="ml-contact-btns">
              <a href="tel:9558959579" className="ml-btn ml-btn-gold">
                📞 કોલ કરો
              </a>

              <a
                href="https://wa.me/919558959579"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn ml-btn-green"
              >
                📲 વોટ્સએપ સંપર્ક
              </a>

              <a
                href="https://wa.me/919558959579?text=Hello%20Meera%20Logistics%2C%20I%20want%20to%20book%20a%20truck."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn ml-btn-blue"
              >
                🚛 હમણાં ટ્રક બુક કરો
              </a>
            </div>
          </div>
        </section>

        <footer className="ml-footer">
          <p style={{ marginBottom: 8 }}>
            <strong style={{ color: "#94a3b8" }}>MEERA LOGISTICS</strong> —
            Gujarat Transport Service, Truck Booking & Return Load Partner 🚛
          </p>

          <p>
            <a href="https://www.meeralogistics.in">meeralogistics.in</a>
            {" | "}
            <a href="tel:9558959579">9558959579</a>
            {" | "}
            Jamnagar, Gujarat
          </p>

          <p style={{ marginTop: 10 }}>
            © 2026 મીરા લોજિસ્ટિક્સ. સર્વ હકો સુરક્ષિત.
          </p>
        </footer>

        <a
          href="https://wa.me/919558959579"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-wa-float"
          title="WhatsApp"
        >
          📲
        </a>
      </main>
    </>
  );
}
