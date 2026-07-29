import './CardBarcode.css';

export default function CardBarcode({ format, barcode, text, alternateText }: BarcodeProps) {
  if (format === 'none' && !alternateText) return;

  return (
    <div className="notificare__pass__google__barcode-area">
      {format !== 'none' ? (
        <>
          <div className="notificare__pass__google__barcode-wrapper">
            <img
              src={`https://push.notifica.re/pass/barcode/${format}/${barcode}`}
              className={`notificare__pass__google__barcode notificare__pass__google__barcode--${format}`}
            />
          </div>
          {text && <div className="notificare__pass__google__barcode-text">{text}</div>}
        </>
      ) : (
        <div className="notificare__pass__google__alternate-text-wrapper">
          <div className="notificare__pass__google__alternate-text"> {alternateText} </div>
        </div>
      )}
    </div>
  );
}

interface BarcodeProps {
  format: string;
  barcode: string;
  text?: string;
  alternateText?: string;
}
