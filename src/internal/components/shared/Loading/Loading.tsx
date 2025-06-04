import './Loading.css';
import LoadingIcon from '../../../../assets/loading.svg';

export function Loading() {
  return (
    <div className="notificare__push__loading" data-testid="loading-icon">
      <LoadingIcon className="notificare__push__loading-icon" />
    </div>
  );
}
