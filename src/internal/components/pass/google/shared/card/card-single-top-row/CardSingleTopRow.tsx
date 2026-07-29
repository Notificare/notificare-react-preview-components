import './CardSingleTopRow.css';

export function CardSingleTopRow({ title, header }: CardSingleTopRowProps) {
  return (
    <div className="notificare__pass__google__single-top-row-area">
      <div className="notificare__pass__google__single-top-row-header">{header}</div>
      <h1 className="notificare__pass__google__single-top-row-title">{title}</h1>
    </div>
  );
}

interface CardSingleTopRowProps {
  title?: string;
  header?: string;
}
