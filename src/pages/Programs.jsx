import React from "react";
import "../style/Programs.css";

const Programs = () => {
  const offers = [
    {
      id: 1,
      type: "program",
      title: "Strength & Conditioning",
      desc: "Elite barbell and functional coaching designed to build raw power and metabolic longevity.",
      tag: "Popular",
    },
    {
      id: 2,
      type: "program",
      title: "High-Intensity HIIT",
      desc: "Fast-paced, heart-rate tracked circuits engineered to torch fat and optimize cardiovascular health.",
      tag: "Burn",
    },
    {
      id: 3,
      type: "amenity",
      title: "Recovery Lounge",
      desc: "Premium access to infrared saunas and cold plunge pools for accelerated muscle repair.",
      tag: "Premium",
    },
    {
      id: 4,
      type: "amenity",
      title: "Open Gym Floor",
      desc: "24/7 access to deadlift platforms, custom racks, and specialized mechanical equipment.",
      tag: "24/7 Access",
    },
  ];

  return (
    <section id="programs" className="programs-container">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">WHAT WE OFFER</span>
          <h2 className="section-title">
            BUILT FOR <span className="text-highlight">PERFORMANCE</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to shatter personal records or rebuild your
            baseline health, we have a lane for you.
          </p>
        </div>

        <div className="programs-grid">
          {offers.map((item) => (
            <div key={item.id} className="program-card">
              <div className="card-badge">{item.tag}</div>
              <div className="card-icon">
                {item.type === "program" ? "🏋️‍♂️" : "🧼"}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.desc}</p>
              <span className="card-link">Learn More &rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
