import './CardSingleTopRow.css';

export function CardSingleTopRow({ title }: CardSingleTopRowProps) {
  return (
    <div className="notificare__pass__google__single-top-row-area">
      <h1 className="notificare__pass__google__single-top-row-title">{title}</h1>
    </div>
  );
}

interface CardSingleTopRowProps {
  title?: string;
}
