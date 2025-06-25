import LoadingIcon from '~/assets/loading.svg';

import './Loading.css';

export function Loading() {
  return (
    <div className="notificare__loading__wrapper" data-testid="loading">
      <LoadingIcon className="notificare__loading__icon" />
    </div>
  );
}
