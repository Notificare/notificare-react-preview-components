import LoadingIcon from '~/assets/loading.svg';

import './Loading.css';

export function Loading() {
  return (
    <div className="notificare__push__loading" data-testid="loading-icon">
      <LoadingIcon className="notificare__push__loading-icon" />
    </div>
  );
}
