import React from 'react';
import '../../../preset.css';
import './AndroidAppIcon.css';

interface AndroidAppIconProps {
  appIcon: string;
}

export default function AndroidAppIcon(props: AndroidAppIconProps) {
  const { appIcon } = props;

  return (
    <div className={'notificare__android-app-icon'}>
      <img className={'notificare__android-app-icon-image'} alt={'App icon'} src={appIcon} />
    </div>
  );
}
