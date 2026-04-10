

## Plan: Add Compressed Vertical Video to the Hotel Page

### What will change

The "Texto" section below the hero on the Sobre (Hotel) page will be restructured from a single centered text column into a **two-column layout**: the vertical video on one side and the text on the other.

### Steps

1. **Compress the video** — Use ffmpeg to compress `Sobre_o_Hotel.mp4` for web performance (lower bitrate, H.264, scaled down for vertical format ~720px wide, target ~2-4MB). Save to `public/videos/sobre-hotel.mp4`.

2. **Update the "Texto" section layout in `src/pages/Sobre.tsx`** — Change from `max-w-3xl` single column to a `grid grid-cols-1 lg:grid-cols-2` layout:
   - **Left column**: The video element (`<video>`) with `autoPlay`, `muted`, `loop`, `playsInline`, styled with portrait aspect ratio
   - **Right column**: The existing two paragraphs of text

3. **Video element** — Will match the site's existing hero video pattern: autoplay, muted, looped, with `object-cover` and no controls visible.

### Technical details

- ffmpeg compression: `-vcodec libx264 -crf 28 -preset slow -vf "scale=720:-2" -an` (no audio, good quality/size balance)
- Video placed in `public/videos/` alongside existing `hero.mp4`
- Lazy loading not native for video, but `preload="metadata"` will be used to defer full download

