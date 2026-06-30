import './CardHeader.css';

export function CardHeader({ logo, title, wideLogo, secondaryText }: DefaultCardTitleProps) {
  return (
    <div className="notificare__pass__google__card-header">
      {!wideLogo ? (
        <div className="notificare__pass__google__logo-wrapper">
          <img className="notificare__pass__google__logo" src={logo} />
        </div>
      ) : (
        <img className="notificare__pass__google__wide-logo" src={wideLogo} />
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
