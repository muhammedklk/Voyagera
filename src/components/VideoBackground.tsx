import React, { useRef, useEffect } from 'react'

const PRIMARY_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'
const FALLBACK_VIDEO_1 =
  'https://assets.mixkit.co/videos/preview/mixkit-fog-over-the-forest-and-mountains-42907-large.mp4'
const FALLBACK_VIDEO_2 =
  'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-mountains-and-a-lake-41584-large.mp4'

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.playsInline = true
    video.play().catch(() => {
      // Autoplay fallback handler
    })
  }, [])

  return (
    <div
      className="absolute top-0 left-0 right-0 h-screen min-h-[700px] w-full overflow-hidden pointer-events-none z-0"
    >
      {/* Reduced White Gradient Overlay Height: Pure transparent video coverage with short bottom edge fade */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 85%, rgba(255,255,255,0.4) 95%, #FFFFFF 100%)',
        }}
      />

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover transition-opacity duration-1000"
        style={{ display: 'block', opacity: 0.98 }}
      >
        <source src={PRIMARY_VIDEO} type="video/mp4" />
        <source src={FALLBACK_VIDEO_1} type="video/mp4" />
        <source src={FALLBACK_VIDEO_2} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoBackground
