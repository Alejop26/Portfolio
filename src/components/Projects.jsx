import "../styles/components.css";

/**
 * Featured projects section.
 * @param {Object} props
 * @param {Array}  props.projects - List of projects from DATA
 */
export default function Projects({ projects }) {
  return (
    <section id="projects" className="p-section">
      <div className="container">

        <p className="s-eyebrow reveal">04 <em>— Work</em></p>
        <h2 className="s-title reveal d1">
          Selected<br /><em>projects</em>
        </h2>

        <div className="proj-grid reveal d2">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              className="proj-card"
              target="_blank"
            >
              <p className="proj-num">
                0{i + 1} / 0{projects.length}
              </p>
              <p className="proj-title">{project.title}</p>
              <p className="proj-stack">{project.stack}</p>
              <p className="proj-desc">{project.desc}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}