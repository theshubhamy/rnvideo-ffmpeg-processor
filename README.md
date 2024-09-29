Here’s a sample `README.md` for your custom React Native NPM package, **rnvideo-ffmpeg-processor**.

# rnvideo-ffmpeg-processor

[![npm version](https://badge.fury.io/js/rnvideo-ffmpeg-processor.svg)](https://www.npmjs.com/package/rnvideo-ffmpeg-processor)
[![License](https://img.shields.io/npm/l/rnvideo-ffmpeg-processor.svg)](https://www.npmjs.com/package/rnvideo-ffmpeg-processor)

A React Native module that enables powerful video processing using **FFmpeg**, including features such as trimming, cropping, merging videos, adding text overlays, and much more.

## Features

- **Trim Video:** Select the start and end times to trim a video.
- **Crop Video:** Crop the video to a specific area or aspect ratio.
- **Merge Videos:** Combine multiple videos into one.
- **Add Audio:** Merge audio files with video files.
- **Text Overlays:** Add text to videos with customizable font, color, and position.
- **Apply Filters:** Use FFmpeg filters to adjust brightness, contrast, etc.
- **Mute Video:** Remove audio tracks from videos.
- **Rotate Video:** Rotate videos by 90, 180, or 270 degrees.

## Installation

To install this package, run:

```bash
npm install rnvideo-ffmpeg-processor
```

### Link Native Modules (if React Native version < 0.60)

For React Native versions below 0.60, you’ll need to link the native modules manually:

```bash
npx react-native link react-native-ffmpeg
```

For React Native 0.60 and above, the module should be auto-linked.

### iOS

Make sure you have the latest version of **CocoaPods** installed, and run:

```bash
cd ios
pod install
```

### Android

Add the following to your `android/app/build.gradle` file:

```gradle
android {
    ...
    packagingOptions {
        pickFirst 'lib/x86/libc++_shared.so'
        pickFirst 'lib/x86_64/libc++_shared.so'
        pickFirst 'lib/arm64-v8a/libc++_shared.so'
        pickFirst 'lib/armeabi-v7a/libc++_shared.so'
    }
}
```

## Usage

### Import the Module

```javascript
import VideoProcessor from 'rnvideo-ffmpeg-processor';
```

### Trim Video

```javascript
const trimVideo = async () => {
  try {
    const result = await VideoProcessor.trimVideo(
      '/path/to/video.mp4',
      '00:00:10',
      '00:00:20',
      '/path/to/output.mp4',
    );
    console.log(result); // Success message or error handling
  } catch (error) {
    console.error(error);
  }
};
```

### Crop Video

```javascript
const cropVideo = async () => {
  try {
    const result = await VideoProcessor.cropVideo(
      '/path/to/video.mp4',
      640,
      360,
      10,
      10,
      '/path/to/output.mp4',
    );
    console.log(result); // Success message or error handling
  } catch (error) {
    console.error(error);
  }
};
```

### Merge Videos

```javascript
const mergeVideos = async () => {
  try {
    const result = await VideoProcessor.mergeVideos(
      ['/path/to/video1.mp4', '/path/to/video2.mp4'],
      '/path/to/output.mp4',
    );
    console.log(result); // Success message or error handling
  } catch (error) {
    console.error(error);
  }
};
```

### Add Text Overlay

```javascript
const addTextOverlay = async () => {
  try {
    const result = await VideoProcessor.addTextOverlay(
      '/path/to/video.mp4',
      'Your text here',
      100,
      200,
      '/path/to/output.mp4',
    );
    console.log(result); // Success message or error handling
  } catch (error) {
    console.error(error);
  }
};
```

### Mute Video

```javascript
const muteVideo = async () => {
  try {
    const result = await VideoProcessor.muteVideo(
      '/path/to/video.mp4',
      '/path/to/output.mp4',
    );
    console.log(result); // Success message or error handling
  } catch (error) {
    console.error(error);
  }
};
```

## Supported Features

- **Trimming**: Cut videos by specifying start and end times.
- **Cropping**: Resize the video frame by defining width, height, and position.
- **Audio Merge**: Add background music or voice-over tracks to your videos.
- **Text Overlay**: Add customizable text on video, including color, size, and position.
- **Video Filters**: Apply visual filters such as brightness and contrast adjustments.
- **Rotate Video**: Rotate videos to any angle (90°, 180°, 270°).
- **Mute Audio**: Remove audio from videos.

## FFmpeg Commands

Internally, this module leverages FFmpeg commands to process videos. Example commands include:

- **Trim**: `-ss [start_time] -t [duration] -i [input_path] -c copy [output_path]`
- **Crop**: `-i [input_path] -filter:v "crop=[width]:[height]:[x]:[y]" [output_path]`
- **Merge Videos**: `-i "concat:[file1|file2]" -c copy [output_path]`
- **Text Overlay**: `-i [input_path] -vf drawtext="text='[text]':x=[x]:y=[y]:fontsize=24:fontcolor=white" [output_path]`

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repo.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Submit a pull request.

## License

MIT

---

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any issues, feel free to open an issue or contact me via GitHub.

### Key Sections Included:

- **Installation**: How to install and link the package for both iOS and Android.
- **Usage Examples**: Detailed code examples for using various features such as trimming, cropping, merging, etc.
- **FFmpeg Commands**: Under-the-hood FFmpeg commands for those who want more control.
- **Contributing**: Guidelines for contributing to the project.
- **License**: License information.

This `README.md` provides clear instructions for developers to use and contribute to the package.
