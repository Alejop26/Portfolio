import "../styles/components.css";
import { TICKER_ITEMS } from "../data/portfolio";

/**
 * Franja de texto animado que se desplaza horizontalmente en loop.
 */
export default function Ticker() {
  // Duplicamos los ítems para crear el efecto de loop continuo
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
