'use client';

import '../../styles/video-player.css';

export interface VideoPlayerProps {
  /** URL do vídeo (YouTube, Vimeo, etc) */
  videoUrl: string;
  /** Título do vídeo */
  title: string;
  /** Descrição do vídeo */
  description?: string;
  /** Lista de PDFs para download */
  downloads?: Array<{
    name: string;
    url: string;
  }>;
  /** Subtítulo ou categoria */
  category?: string;
}

/**
 * Video Player
 * Player para vídeos de aulas com suporte a downloads
 */
export const VideoPlayer = ({
  videoUrl,
  title,
  description,
  downloads,
  category,
}: VideoPlayerProps) => {
  // Extrair ID do YouTube ou Vimeo
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('watch?v=')
        ? url.split('watch?v=')[1]
        : url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('vimeo.com')) {
      const videoId = url.split('vimeo.com/')[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="video-player">
      <div className="video-player__wrapper">
        <div className="video-player__iframe">
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <div className="video-player__content">
        {category && <p className="video-player__category">{category}</p>}
        <h2 className="video-player__title">{title}</h2>

        {description && <p className="video-player__description">{description}</p>}

        {downloads && downloads.length > 0 && (
          <div className="video-player__downloads">
            <h3 className="video-player__downloads-title">📄 Materiais para Download</h3>
            <div className="video-player__downloads-list">
              {downloads.map((file, idx) => (
                <a
                  key={idx}
                  href={file.url}
                  download
                  className="video-player__download-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="video-player__download-icon">📥</span>
                  {file.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
