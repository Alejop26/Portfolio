import "../styles/components.css";

/**
 * Technical stack / skills section.
 * @param {Object} props
 * @param {Object} props.skills - Object { category: [technologies] }
 */
export default function Skills({ skills }) {
  return (
    <section id="skills" className="p-section">
      <div className="container">

        <p className="s-eyebrow reveal">03 <em>— Skills</em></p>
        <h2 className="s-title reveal d1">
          Technical<br /><em>stack</em>
        </h2>

        <div className="skills-grid reveal d2">
          {Object.entries(skills).map(([category, tags]) => (
            <div key={category} className="sk-block">
              <p className="sk-cat">{category}</p>
              <div className="sk-pills">
                {tags.map((tag) => (
                  <span key={tag} className="sk-pill">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}