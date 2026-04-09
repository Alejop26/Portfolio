import "../styles/components.css";

/**
 * Contact section with email and social links.
 * @param {Object} props
 * @param {Object} props.contact - Object with email, github, linkedin, location
 */
export default function Contact({ contact }) {
  return (
    <section id="contact" className="p-section" style={{ borderBottom: "none" }}>
      <div className="container">

        <p className="s-eyebrow reveal">05 <em>— Contact</em></p>

        <div className="contact-wrap">

          {/* Left side: headline + email */}
          <div className="reveal">
            <p className="contact-big">
              Let's talk
              <em>soon.</em>
            </p>
            <p className="contact-note">
              I’m available for freelance projects, collaborations, and full-time
              opportunities. Feel free to reach out.
            </p>
            <a href={`mailto:${contact.email}`} className="mail-link">
              {contact.email}
            </a>
          </div>

          {/* Right side: list of links */}
          <div className="reveal d2">
            <ul className="c-list">
              {Object.entries(contact).map(([key, value]) => (
                <li key={key} className="c-row">
                  <span className="c-key">{key}</span>
                  <a
                    href={
                      key === "email"    ? `mailto:${value}` :
                      key === "location" ? undefined :
                      `https://${value}`
                    }
                    target={key !== "email" && key !== "location" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="c-val"
                  >
                    {key === "linkedin" ? `linkedin.com/alejandro-parra` : value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}