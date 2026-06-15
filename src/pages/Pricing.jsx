import React from 'react';
import '../style/Pricing.css';

const Pricing = () => {
  const tiers = [
    {
      id: 1,
      name: "Basic Access",
      price: "3,000",
      period: "month",
      features: ["24/7 Gym Floor Access", "Standard Locker Room & Showers", "Free High-Speed Wi-Fi", "1 Complimentary Fitness Assessment"],
      isPopular: false,
      cta: "Get Started"
    },
    {
      id: 2,
      name: "Elite Results",
      price: "5,500",
      period: "month",
      features: ["All Basic Tier Access", "Unlimited Group HIIT & CrossFit Classes", "Personalized Macro & Nutrition Tracking", "2 Sessions/Mo with Dedicated Coach", "10% Member Discount on Supplements"],
      isPopular: true,
      cta: "Claim Elite Access"
    },
    {
      id: 3,
      name: "VIP Performance",
      price: "12,000",
      period: "month",
      features: ["All Elite Tier Access", "Custom 1-on-1 Personal Training (3x/week)", "Unlimited Recovery Lounge & Cold Plunges", "Complimentary InBody Composition Scans", "Dedicated VIP Locker & Laundry Service"],
      isPopular: false,
      cta: "Apply for VIP"
    }
  ];

  return (
    <section id='pricing' className="pricing-container">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tagline">TRANSPARENT PRICING</span>
          <h2 className="section-title">CHOOSE YOUR <span className="text-highlight">LEVEL</span></h2>
          <p className="section-subtitle">No hidden contracts, no sign-up fees. Pick the membership model engineered for your specific fitness goals.</p>
        </div>

        <div className="pricing-grid">
          {tiers.map(tier => (
            <div key={tier.id} className={`pricing-card ${tier.isPopular ? 'popular-card' : ''}`}>
              {tier.isPopular && <div className="popular-badge">Most Popular</div>}
              
              <div className="card-header">
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-price-box">
                  <span className="currency">Rs.</span>
                  <span className="price">{tier.price}</span>
                  <span className="period">/{tier.period}</span>
                </div>
              </div>

              <ul className="tier-features">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="check-icon">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="card-action">
                <button className={`btn-pricing ${tier.isPopular ? 'btn-pricing-popular' : 'btn-pricing-standard'}`}>
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;