import './VideoRichContent.css';
import { BasePushMessage } from '../../../schemas/basePushMessageSchema';

interface VideoRichContentProps {
  videoData: Extract<
    BasePushMessage,
    { type: 're.notifica.notification.Video' }
  >['content'][number];
  width: string;
  height: string;
}

export default function VideoRichContent(props: VideoRichContentProps) {
  const { videoData, width, height } = props;

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
