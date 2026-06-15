import React, { useState } from 'react';
import '../style/Schedule.css';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const timetableData = {
    Monday: [
      { time: '06:00 AM - 07:00 AM', class: 'CrossFit Basics', instructor: 'Coach Ahmed', spots: '4 Left' },
      { time: '09:00 AM - 10:00 AM', class: 'HIIT Cardio Burn', instructor: 'Coach Sana', spots: 'Full' },
      { time: '06:00 PM - 07:30 PM', class: 'Strength & Power', instructor: 'Coach Ali', spots: '8 Left' },
    ],
    Tuesday: [
      { time: '07:00 AM - 08:00 AM', class: 'Yoga Flow', instructor: 'Coach Zainab', spots: '12 Left' },
      { time: '05:30 PM - 06:30 PM', class: 'Olympic Weightlifting', instructor: 'Coach Ali', spots: '2 Left' },
      { time: '07:30 PM - 08:30 PM', class: 'Combat Conditioning', instructor: 'Coach Ahmed', spots: '5 Left' },
    ],
    Wednesday: [
      { time: '06:00 AM - 07:00 AM', class: 'CrossFit Endurance', instructor: 'Coach Ahmed', spots: '6 Left' },
      { time: '06:00 PM - 07:30 PM', class: 'Hypertrophy Track', instructor: 'Coach Ali', spots: '3 Left' },
    ],
    Thursday: [
      { time: '09:00 AM - 10:00 AM', class: 'HIIT Cardio Burn', instructor: 'Coach Sana', spots: '7 Left' },
      { time: '06:30 PM - 07:30 PM', class: 'Mobility & Recovery', instructor: 'Coach Zainab', spots: '15 Left' },
    ],
    Friday: [
      { time: '06:00 AM - 07:00 AM', class: 'Friday Team WOD', instructor: 'All Coaches', spots: '1 Left' },
      { time: '05:00 PM - 06:30 PM', class: 'Powerlifting Open Max', instructor: 'Coach Ali', spots: 'Full' },
    ],
    Saturday: [
      { time: '09:00 AM - 10:30 AM', class: 'Weekend Warrior Circuit', instructor: 'Coach Ahmed', spots: '10 Left' },
    ]
  };

  return (
    <section id='schedule' className="schedule-container">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tagline">PLAN YOUR WEEK</span>
          <h2 className="section-title">CLASS <span className="text-highlight">TIMETABLE</span></h2>
          <p className="section-subtitle">Real-time scheduling built around busy local routines. Filter by day to find your next session.</p>
        </div>

        {/* Day Selection Tabs */}
        <div className="schedule-tabs">
          {days.map(day => (
            <button 
              key={day} 
              className={`tab-btn ${activeDay === day ? 'active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              {day.substring(0, 3)}
            </button>
          ))}
        </div>

        {/* Dynamic Timetable List */}
        <div className="schedule-list">
          {timetableData[activeDay]?.map((slot, idx) => (
            <div key={idx} className="schedule-row">
              <div className="schedule-time">{slot.time}</div>
              <div className="schedule-details">
                <h4 className="class-name">{slot.class}</h4>
                <p className="instructor-name">{slot.instructor}</p>
              </div>
              <div className="schedule-status">
                <span className={`status-badge ${slot.spots === 'Full' ? 'full' : 'available'}`}>
                  {slot.spots}
                </span>
              </div>
              <div className="schedule-action">
                <button className="btn-book" disabled={slot.spots === 'Full'}>
                  {slot.spots === 'Full' ? 'Locked' : 'Book Slot'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Schedule;