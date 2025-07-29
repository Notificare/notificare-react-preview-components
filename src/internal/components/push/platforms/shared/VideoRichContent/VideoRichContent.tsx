import { VerifiedNotification } from '~/internal/schemas/notificare-notification';

import './VideoRichContent.css';

export function VideoRichContent({ videoData, width, height }: VideoRichContentProps) {
  const getVideoUrl = (): string => {
    switch (videoData.type) {
      case 're.notifica.content.YouTube':
        return `https://www.youtube.com/embed/${videoData.data}`;

      case 're.notifica.content.Vimeo':
        return `https://player.vimeo.com/video/${videoData.data}`;

      case 're.notifica.content.HTML5Video':
        return videoData.data;

      default:
        return '';
    }
  };

  if (
    videoData.type === 're.notifica.content.YouTube' ||
    videoData.type === 're.notifica.content.Vimeo'
  ) {
    return (
      <iframe
        className="notificare__push__video-rich-content"
        src={getVideoUrl()}
        sandbox="allow-scripts allow-same-origin"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        width={width}
        height={height}
      />
    );
  } else {
    return (
      <video
        className="notificare__push__video-rich-content"
        width={width}
        height={height}
        autoPlay
        controls
      >
        <source src={getVideoUrl()} type="video/mp4" />
      </video>
    );
  }
}

export interface VideoRichContentProps {
  videoData: Extract<
    VerifiedNotification,
    { type: 're.notifica.notification.Video' }
  >['content'][number];
  width: string;
  height: string;
}
