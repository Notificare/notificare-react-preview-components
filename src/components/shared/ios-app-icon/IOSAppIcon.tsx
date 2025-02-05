import React from 'react';
import '../../../preset.css';
import './IOSAppIcon.css';

interface IOSAppIconProps {
  appIcon: string;
}

export default function IosAppIcon(props: IOSAppIconProps) {
  const { appIcon } = props;

  return (
    <div className={'notificare__ios-app-icon'}>
      <img className={'notificare__ios-app-icon-image'} alt={'App icon'} src={appIcon} />
    </div>
  );
}
