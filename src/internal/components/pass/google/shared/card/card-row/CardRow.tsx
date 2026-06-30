import './CardRow.css';

export function CardRow({ fields }: CardRowProps) {
  const safeFields = filterInvalidFields(fields.slice(0, 3));

  return (
    <div className="notificare__pass__google__row">
      {safeFields.map((field, index) => (
        <div
          key={index}
          className={`notificare__pass__google__field ${getFieldClasses(index, safeFields.length)}`}
        >
          <div className="notificare__pass__google__field-label">{field.header}</div>

          <div className="notificare__pass__google__field-value">{field.body}</div>
        </div>
      ))}
    </div>
  );
}

interface CardRowProps {
  fields: CardRowField[];
}

interface CardRowField {
  header?: string;
  body?: string;
}

function getFieldClasses(index: number, total: number): string {
  const mainClass = 'notificare__pass__google__field--';

  const distributionClass = total === 1 ? 'single' : total === 2 ? 'double' : 'triple';
  let positionClass = '';

  switch (total) {
    case 1:
      positionClass = 'start';
      break;

    case 2:
      positionClass = index === 0 ? 'start' : 'end';
      break;

    default:
      positionClass = index === 0 ? 'start' : index === 1 ? 'center' : 'end';
      break;
  }

  return `${mainClass}${distributionClass} ${mainClass}${positionClass}`;
}

function filterInvalidFields(fields: CardRowField[]) {
  return fields.filter((field) => field.header && field.body);
}
