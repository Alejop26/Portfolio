import "../styles/hero.css";

/**
 * Main section (above the fold) with name, role, bio, and CTA.
 * @param {Object} props
 * @param {string}   props.name - Developer's full name
 * @param {string}   props.role - Professional role / title
 * @param {string}   props.bio  - Short description
 * @param {Function} props.go   - Function to scroll to a section
 */
export default function Hero({ name, role, bio, go }) {
  const year = new Date().getFullYear();
  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ") || "Last Name";

  return (
    <section id="home" className="hero">
      <div className="container">

        {/* Top row */}
        <div className="hero-top">
          <span className="hero-index">Portfolio — {year}</span>
          <div className="hero-status d-none d-md-block">
            <div>{role}</div>
            <div >Colombia / Remote</div>
          </div>
        </div>

        {/* Name */}
        <div className="hero-center">
          <p className="hero-pre">{role}</p>
          <h1 className="hero-name">
            <span className="l1">{first}</span>
            <span className="l2">{last}</span>
          </h1>
        </div>

        {/* Bottom row */}
        <div className="hero-bottom">
          <div>
            <p className="hero-bio">{bio}</p>
            <a
              href="#projects"
              className="hero-cta"
              onClick={(e) => { 
                e.preventDefault(); 
                go("projects"); 
              }}
            >
              <span>View projects</span>
              <span>→</span>
            </a>
          </div>
          <div className="scroll-hint d-none d-lg-flex">
            <span>Scroll</span>
          </div>
        </div>

      </div>
    </section>
  );
}