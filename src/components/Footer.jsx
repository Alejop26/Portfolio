import "../styles/components.css";

/**
 * Footer with copyright and credits.
 * @param {Object} props
 * @param {string} props.name - Developer's name
 */
export default function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container p-footer">
        <span className="ft">© {year} {name}</span>
        <span className="ft">Designed &amp; developed by me</span>
        <span className="ft d-none d-md-inline">Colombia</span>
      </div>
    </footer>
  );
}