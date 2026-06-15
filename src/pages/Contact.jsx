import React, { useState } from 'react';
import '../style/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', program: 'Basic Access' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead Captured:', formData);
    // Integrate with client CRM or email notification here
  };

  return (
    <section id='contact' className="contact-container">
      <div className="container contact-grid">
        
        {/* Left Column: Context & Metadata */}
        <div className="contact-info">
          <span className="section-tagline">GET IN TOUCH</span>
          <h2 className="section-title">START YOUR <span className="text-highlight">JOURNEY</span></h2>
          <p className="contact-description">
            Have questions about memberships, coaching, or facilities? Drop your details, or visit our facility directly.
          </p>
          
          <div className="info-meta-list">
            <div className="meta-item">
              <span className="meta-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>VIP Road, Near Civic Center, Larkana, Sindh</p>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⏰</span>
              <div>
                <h4>Hours</h4>
                <p>Mon - Sat: 6:00 AM - 11:00 PM <br /> Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Intent Lead Form */}
        <div className="contact-form-box">
          <h3 className="form-title">Claim Your Free Pass</h3>
          <form onSubmit={handleSubmit} className="lead-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                required 
                placeholder="e.g., +92 300 1234567"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label htmlFor="program">Select Tier</label>
              <select 
                id="program"
                value={formData.program}
                onChange={(e) => setFormData({...formData, program: e.target.value})}
              >
                <option value="Basic Access">Basic Access</option>
                <option value="Elite Results">Elite Results (Most Popular)</option>
                <option value="VIP Performance">VIP Performance</option>
              </select>
            </div>

            <button type="submit" className="btn-submit">Activate Pass Now</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;