import { NativeModules } from 'react-native';

// Import the native module for video processing
const { VideoProcessor } = NativeModules;

// TypeScript interface for the module
interface VideoProcessorModule {
  trimVideo: (
    inputPath: string,
    startTime: string,
    duration: string,
    outputPath: string,
  ) => Promise<string>;
  cropVideo: (
    inputPath: string,
    width: number,
    height: number,
    x: number,
    y: number,
    outputPath: string,
  ) => Promise<string>;
  mergeVideos: (inputPaths: string[], outputPath: string) => Promise<string>;
  mergeAudio: (
    videoPath: string,
    audioPath: string,
    outputPath: string,
  ) => Promise<string>;
  addTextOverlay: (
    inputPath: string,
    text: string,
    x: number,
    y: number,
    outputPath: string,
  ) => Promise<string>;
  muteVideo: (inputPath: string, outputPath: string) => Promise<string>;
  rotateVideo: (
    inputPath: string,
    degrees: number,
    outputPath: string,
  ) => Promise<string>;
}

// Video processing module with all methods
const VideoProcessingModule: VideoProcessorModule = {
  // Trim Video Method
  trimVideo: async (
    inputPath: string,
    startTime: string,
    duration: string,
    outputPath: string,
  ) => {
    const command = `-ss ${startTime} -t ${duration} -i ${inputPath} -c copy ${outputPath}`;
    return await VideoProcessor.processVideo(inputPath, { command });
  },

  // Crop Video Method
  cropVideo: async (
    inputPath: string,
    width: number,
    height: number,
    x: number,
    y: number,
    outputPath: string,
  ) => {
    const command = `-i ${inputPath} -filter:v "crop=${width}:${height}:${x}:${y}" ${outputPath}`;
    return await VideoProcessor.processVideo(inputPath, { command });
  },

  // Merge Videos Method
  mergeVideos: async (inputPaths: string[], outputPath: string) => {
    const fileList = inputPaths.join('|');
    const command = `-i "concat:${fileList}" -c copy ${outputPath}`;
    return await VideoProcessor.processVideo(inputPaths[0], { command });
  },

  // Merge Audio Method
  mergeAudio: async (
    videoPath: string,
    audioPath: string,
    outputPath: string,
  ) => {
    const command = `-i ${videoPath} -i ${audioPath} -c:v copy -c:a aac ${outputPath}`;
    return await VideoProcessor.processVideo(videoPath, { command });
  },

  // Add Text Overlay Method
  addTextOverlay: async (
    inputPath: string,
    text: string,
    x: number,
    y: number,
    outputPath: string,
  ) => {
    const command = `-i ${inputPath} -vf drawtext="text='${text}':x=${x}:y=${y}:fontsize=24:fontcolor=white" ${outputPath}`;
    return await VideoProcessor.processVideo(inputPath, { command });
  },

  // Mute Video Method (remove audio)
  muteVideo: async (inputPath: string, outputPath: string) => {
    const command = `-i ${inputPath} -an ${outputPath}`;
    return await VideoProcessor.processVideo(inputPath, { command });
  },

  // Rotate Video Method
  rotateVideo: async (
    inputPath: string,
    degrees: number,
    outputPath: string,
  ) => {
    const command = `-i ${inputPath} -vf "transpose=${degrees}" ${outputPath}`;
    return await VideoProcessor.processVideo(inputPath, { command });
  },
};

export default VideoProcessingModule;
