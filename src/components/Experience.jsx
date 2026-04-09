import "../styles/components.css";

/**
 * Professional experience section.
 * @param {Object}   props
 * @param {Array}    props.experience - List of jobs from the DATA
 */
export default function Experience({ experience }) {
  return (
    <section id="experience" className="p-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">

            <p className="s-eyebrow reveal">02 <em>— Career</em></p>
            <h2 className="s-title reveal d1">
              Professional<br /><em>experience</em>
            </h2>

            {experience.map((item, i) => (
              <div key={i} className={`exp-row reveal d${(i % 3) + 1}`}>
                <div className="exp-period">{item.period}</div>

                <div>
                  <p className="exp-company">{item.company}</p>
                  <p className="exp-title">{item.role}</p>
                  <p className="exp-desc">{item.desc}</p>
                </div>

                <div className="exp-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="exp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}