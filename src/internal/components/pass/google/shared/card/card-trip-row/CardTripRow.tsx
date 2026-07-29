import './CardTripRow.css';
import ArrowForwardIcon from '~/assets/arrow-forward.svg';
import SwapHorizIcon from '~/assets/swap-horiz.svg';

export function CardTripRow({
  originCode,
  originName,
  destinationCode,
  destinationName,
  tripType,
}: CardTripRowProps) {
  if (!originName) return;

  if (destinationCode && !destinationName) return;

  return (
    <div className="notificare__pass__google__trip-row-area">
      {!originCode || !destinationCode ? (
        <h1 className="notificare__pass__google__origin-destination-names">
          {originName} {destinationName ? `⟷ ${destinationName}` : ''}
        </h1>
      ) : (
        destinationName && (
          <>
            <div className="notificare__pass__google__origin-destination-names-above-codes">
              {`${originName} to ${destinationName}`}
            </div>
            <div className="notificare__pass__google__origin-destination-codes">
              {originCode}
              {tripType === 'ROUND_TRIP' ? (
                <SwapHorizIcon fill="currentColor" />
              ) : (
                <ArrowForwardIcon fill="currentColor" />
              )}
              {destinationCode}
            </div>
          </>
        )
      )}
    </div>
  );
}

interface CardTripRowProps {
  originCode: string;
  originName: string;
  destinationCode: string;
  destinationName: string;
  tripType: string;
}
