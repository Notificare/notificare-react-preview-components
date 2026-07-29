import './CardRow.css';

export function CardRow({ fields }: CardRowProps) {
  const resolvedFields = resolveFields(fields.slice(0, 3));

  return (
    <div className="notificare__pass__google__row">
      {resolvedFields.map((field, index) => (
        <div
          key={index}
          className={`notificare__pass__google__field ${getFieldClasses(index, resolvedFields.length)}`}
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
  header: string;
  body: string;
  secondaryHeader?: string;
  secondaryBody?: string;
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

function resolveFields(fields: CardRowField[]) {
  return fields
    .filter(
      ({ header, body, secondaryHeader, secondaryBody }) =>
        (header && body) || (secondaryHeader && secondaryBody),
    )
    .map(({ header, body, secondaryHeader, secondaryBody }) => {
      if (header && body && secondaryHeader && secondaryBody) {
        return {
          header: `${header} / ${secondaryHeader}`,
          body: `${body} / ${secondaryBody}`,
        };
      }

      if (header && body) {
        return { header, body };
      }

      return {
        header: secondaryHeader,
        body: secondaryBody,
      };
    });
}
