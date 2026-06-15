import React from "react";
import "../style/SocialProof.css";

const SocialProof = () => {
  const stats = [
    { id: 1, value: "1,200+", label: "Active Members in Larkana" },
    { id: 2, value: "4.9/5", label: "Google Rating (250+ Reviews)" },
    { id: 3, value: "100%", label: "Result Guaranteed Coaching" },
  ];

  const badges = [
    "Larkana Fitness Award 2025",
    "Certified CrossFit Affiliate",
    "Top Rated Local Gym",
  ];

  return (
    <section className="proof-container">
      <div className="container proof-wrapper">
        {/* Core Stats Bar */}
        <div className="proof-stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="proof-stat-card">
              <h3 className="proof-stat-value text-highlight">{stat.value}</h3>
              <p className="proof-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Ticker / Authority Bar */}
        <div className="proof-ticker-zone">
          <p className="ticker-title">As Featured & Recognized In</p>
          <div className="ticker-track">
            {badges.map((badge, idx) => (
              <div key={idx} className="ticker-item">
                <span className="ticker-icon">⚡</span>
                <span className="ticker-text">{badge}</span>
              </div>
            ))}
            {/* Duplicate for infinite loop illusion if needed */}
            {badges.map((badge, idx) => (
              <div key={`dup-${idx}`} className="ticker-item mobile-hidden">
                <span className="ticker-icon">⚡</span>
                <span className="ticker-text">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
