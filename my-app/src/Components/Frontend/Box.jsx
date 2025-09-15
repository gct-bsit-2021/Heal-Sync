import React from 'react'
import './Box.css';

const Box = () => {

    const features = [
    {
      number: "1",
      heading: "Appointment Reminders",
      text: "Stay on track with timely alerts for doctor visits and checkups."
    },
    {
      number: "2",
      heading: "Calendar  Alerts",
      text: "Never miss a dose scheduled reminders and adherence tracking."
    },
    {
      number: "3",
      heading: "Emergency SOS",
      text: "Quickly notify family and caregivers with one tap during emergencies."
    },
    {
      number: "4",
      heading: "Resource Center",
      text: "Access trusted articles, videos and local support resources."
    }
  ];

  return (
    <>
      <main className="page">
      <header className="page-header">
        <h1 className="brand">HealSync Key Features</h1>
        <p className="sub">
          Simple, trusted care appointments, medications, emergency help and resources.
        </p>
      </header>

      <section className="features" aria-label="HealSync features">
        {features.map((f) => (
          <article key={f.number} className="feature">
            <div className="number">{f.number}</div>
            <h2 className="feature-heading">{f.heading}</h2>
            <p className="feature-text">{f.text}</p>
          </article>
        ))}
      </section>
    </main>
    </>
  )
}

export default Box
