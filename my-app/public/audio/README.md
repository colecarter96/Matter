# Background Music Setup

## Adding Your Audio File

1. Place your audio file in this directory (`public/audio/`)
2. Rename it to `background-music.mp3` (or update the component to match your filename)
3. Supported formats: MP3, OGG, WAV

## Recommended Audio Settings

- **Format**: MP3 (best browser compatibility)
- **Bitrate**: 128kbps (good quality, reasonable file size)
- **Length**: 2-5 minutes (will loop automatically)
- **Volume**: Normalized to prevent distortion

## File Size Considerations

- Keep files under 5MB for good loading performance
- Consider using a shorter loop that repeats rather than a very long track
- Test on slower connections to ensure good user experience

## Browser Compatibility

- All modern browsers support MP3
- OGG is provided as a fallback for older browsers
- Audio will only play after user interaction (browser requirement)

## Current Setup

The component looks for:
- `background-music.mp3` (primary)
- `background-music.ogg` (fallback)

Update the file paths in `BackgroundMusic.tsx` if you use different filenames. 