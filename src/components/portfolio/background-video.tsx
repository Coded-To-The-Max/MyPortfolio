'use client';

import { useEffect, useRef } from 'react';
import type Hls from 'hls.js';

const SOURCE = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export function BackgroundVideo({ paused, flipped = false }: { paused: boolean; flipped?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video || paused) return;
    video.style.opacity = '';
    let player: Hls | undefined;
    let disposed = false;
    let started = false;
    const start = async () => {
      if (started) return;
      started = true;
      const { default: HlsPlayer } = await import('hls.js');
      if (disposed) return;
      if (HlsPlayer.isSupported()) {
        player = new HlsPlayer({ maxMaxBufferLength: 12, capLevelToPlayerSize: true });
        player.on(HlsPlayer.Events.ERROR, (_event, data) => {
          if (data.fatal) { player?.destroy(); video.style.opacity = '0'; }
        });
        player.loadSource(SOURCE);
        player.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = SOURCE;
      }
      if (!disposed) void video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { void start().catch(() => {}); void video.play().catch(() => {}); }
      else video.pause();
    }, { rootMargin: '100px' });
    observer.observe(video);
    return () => {
      disposed = true;
      observer.disconnect();
      player?.destroy();
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, [paused]);

  return <div className={`p-video ${flipped ? 'p-video-flipped' : ''}`} aria-hidden="true">
    <video ref={ref} muted loop playsInline preload="none" tabIndex={-1} />
    <div className="p-video-shade" />
  </div>;
}
