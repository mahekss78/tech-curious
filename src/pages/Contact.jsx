import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/pages/Contact.css';

function Contact() {

  /* =====================
     CONTACT INFO CARDS
  ====================== */
  const contactInfo = [
    {
      icon: (
        <img 
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/maildotru.svg" 
          alt="Email" 
        />
      ),
      title: 'Email',
      details: ['contact@curiositytech.com'],
      action: 'mailto:contact@curiositytech.com',
      theme: 'email'
    },
    {
      icon: (
        <img 
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/viber.svg" 
          alt="Phone" 
        />
      ),
      title: 'Phone',
      details: ['+91-9860555369', 'Mon–Sat, 9AM–6PM'],
      action: 'tel:+919860555369',
      theme: 'phone'
    },
    {
      icon: (
        <img 
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mapbox.svg" 
          alt="Location" 
        />
      ),
      title: 'Location',
      details: ['Nagpur, Maharashtra'],
      action: 'https://maps.google.com',
      theme: 'location'
    }
  ];

  /* =====================
     FAQ DATA
  ====================== */
  const faqs = [
    {
      question: 'How long do I have access to courses?',
      answer: 'You get lifetime access to all purchased courses, including updates.'
    },
    {
      question: 'Do you provide certificates?',
      answer: 'Yes, certificates are provided after course completion.'
    },
    {
      question: 'Can I get help during the course?',
      answer: 'Yes, instructors and community support are available.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'We offer a 30-day money-back guarantee.'
    }
  ];

  return (
    <div className="contact-page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We’re here to help you on your learning journey.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">

            {/* LEFT: CONTACT FORM */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <p>Fill out the form and we’ll respond within 24 hours.</p>
              <ContactForm />
            </div>

            {/* RIGHT: CONTACT INFO + FAQ + SOCIAL */}
            <div className="contact-info-section">

              {/* CONTACT INFO GRID */}
              <div className="contact-cards-grid">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className={`contact-card ${info.theme}`}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    <div className="contact-card-icon">{info.icon}</div>
                    <h3>{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </a>
                ))}
              </div>

              {/* FAQ SECTION */}
              <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <h3 className="faq-question">{faq.question}</h3>
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOCIAL MEDIA SECTION */}
              <div className="social-section">
                <h2>Connect with us</h2>
                <div className="social-wrapper">
                  <div className="social-icons">

                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card social-github"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/curiosity-tech/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card social-linkedin"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
                    </a>

                    <a
                      href="https://youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card social-youtube"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" />
                    </a>

                    <a
                      href="https://discord.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card social-discord"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg" alt="Discord" />
                    </a>

                    <a
                      href="https://www.instagram.com/curiositytechpark?igsh=ODUyb2dwcHQ5NG0x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card social-instagram"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
                    </a>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
