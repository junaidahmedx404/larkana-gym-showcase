import React from 'react';
import '../style/Testimonials.css';

const Testimonials = () => {
  const stories = [
    {
      id: 1,
      name: "Asad Bhutto",
      age: "29",
      achievement: "Lost 14kg & Built Lean Mass",
      duration: "12 Weeks",
      quote: "The coaching staff here changed everything for me. They didn't just give me a workout plan; they corrected my form and fixed my daily nutrition. Larkana Gym is unmatched.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      id: 2,
      name: "Sana Khuhro",
      age: "26",
      achievement: "Increased Deadlift by 45kg",
      duration: "6 Months",
      quote: "I used to feel intimidated entering strength zones. The community here is incredibly supportive, and the coaches ensure you train safely while completely shattering your personal limits.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300"
    }
  ];

  return (
    <section id='testimonials' className="testimonials-container">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tagline">PROVEN RESULTS</span>
          <h2 className="section-title">SUCCESS <span className="text-highlight">STORIES</span></h2>
          <p className="section-subtitle">Real transformations from real local members. No shortcuts, just structured training and consistency.</p>
        </div>

        <div className="testimonials-grid">
          {stories.map(story => (
            <div key={story.id} className="testimonial-card">
              <div className="card-header-profile">
                <img src={story.img} alt={story.name} className="profile-img" />
                <div>
                  <h3 className="profile-name">{story.name} <span className="profile-age">(Age {story.age})</span></h3>
                  <p className="profile-metric text-highlight">{story.achievement}</p>
                </div>
              </div>
              
              <blockquote className="profile-quote">
                "{story.quote}"
              </blockquote>

              <div className="card-footer-metric">
                <span className="metric-label">Timeline:</span>
                <span className="metric-value">{story.duration}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;