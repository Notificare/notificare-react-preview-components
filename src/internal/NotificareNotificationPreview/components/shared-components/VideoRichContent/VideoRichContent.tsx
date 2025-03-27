import './VideoRichContent.css';
import { NotificareNotificationSchema } from '../../../schemas/notificare-notification/notificare-notification-schema';

export default function VideoRichContent({ videoData, width, height }: VideoRichContentProps) {
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

  return (
    <iframe
      className="notificare__video-rich-content"
      src={getVideoUrl()}
      sandbox="allow-scripts allow-same-origin"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      width={width}
      height={height}
    />
  );
}

interface VideoRichContentProps {
  videoData: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.Video' }
  >['content'][number];
  width: string;
  height: string;
}
