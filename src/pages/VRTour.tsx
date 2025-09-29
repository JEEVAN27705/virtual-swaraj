import "aframe";
import { useEffect, useMemo, useRef } from "react";

const SESSION_ID = "demo-room-1"; // keep if you use SSE for time sync/remote start

export default function VRTour() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const subscribeUrl = useMemo(() => {
    return `/api/sse?sessionId=${encodeURIComponent(SESSION_ID)}`;
  }, []);

  useEffect(() => {
    // Autoplay muted loop so subsequent play() works without gestures
    const v = document.getElementById("vid") as HTMLVideoElement | null;
    if (v) {
      videoRef.current = v;
      v.play().catch(() => {});
    }

    // Optional: listen only for time updates; source is fixed to Raigad
    const es = new EventSource(subscribeUrl);
    es.onmessage = (e) => {
      try {
        const { t = 0 } = JSON.parse(e.data || "{}");
        if (videoRef.current) {
          videoRef.current.currentTime = Number(t) || 0;
          videoRef.current.play().catch(() => {});
        }
      } catch {}
    };
    return () => es.close();
  }, [subscribeUrl]);

  return (
    <div className="w-screen h-[100dvh]">
      <a-scene vr-mode-ui="enabled: true" renderer="colorManagement: true">
        <a-assets>
          {/* Fixed Raigad video */}
          <video
            id="vid"
            src="/videos/raigad-360.mp4"
            loop
            muted
            playsInline
            crossOrigin="anonymous"
            poster="/poster.jpg"
          />
        </a-assets>
        <a-videosphere src="#vid" rotation="0 180 0"></a-videosphere>
        <a-entity camera look-controls position="0 1.6 0"></a-entity>
      </a-scene>
    </div>
  );
}
