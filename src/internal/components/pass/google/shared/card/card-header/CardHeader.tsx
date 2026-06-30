import './CardHeader.css';

export function CardHeader({ logo, title, wideLogo }: DefaultCardTitleProps) {
  const initial = title?.trim().charAt(0).toUpperCase();

  return (
    <div className="notificare__pass__google__card-header">
      {wideLogo ? (
        <img className="notificare__pass__google__wide-logo" src={wideLogo} alt={title} />
      ) : logo ? (
        <img className="notificare__pass__google__logo" src={logo} alt={title} />
      ) : (
        <div className="notificare__pass__google__logo notificare__pass__google__logo--placeholder">
          {initial}
        </div>
      )}

      {!wideLogo && <div className="notificare__pass__google__title">{title}</div>}
    </div>
  );
}

interface DefaultCardTitleProps {
  logo?: string;
  title?: string;
  wideLogo?: string;
  secondaryText?: string;
}
