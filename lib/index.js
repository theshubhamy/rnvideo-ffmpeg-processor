import { NativeModules } from 'react-native';
const { VideoProcessor } = NativeModules;

export default {
  trimVideo: async (inputPath, startTime, duration, outputPath) => {
    const command = `-ss ${startTime} -t ${duration} -i ${inputPath} -c copy ${outputPath}`;
    return await VideoProcessor.processVideo(inputPath, { command });
  },

  cropVideo: async (inputPath, width, height, x, y, outputPath) => {
    const command = `-i ${inputPath} -filter:v "crop=${width}:${height}:${x}:${y}" ${outputPath}`;
    return await VideoProcessor.processVideo(inputPath, { command });
  },

  mergeVideos: async (inputPaths, outputPath) => {
    const fileList = inputPaths.join('|');
    const command = `-i "concat:${fileList}" -c copy ${outputPath}`;
    return await VideoProcessor.processVideo(inputPaths[0], { command });
  },

  mergeAudio: async (videoPath, audioPath, outputPath) => {
    const command = `-i ${videoPath} -i ${audioPath} -c:v copy -c:a aac ${outputPath}`;
    return await VideoProcessor.processVideo(videoPath, { command });
  },

  addTextOverlay: async (inputPath, text, x, y, outputPath) => {
    const command = `-i ${inputPath} -vf drawtext="text='${text}':x=${x}:y=${y}:fontsize=24:fontcolor=white" ${outputPath}`;
    return await VideoProcessor.processVideo(inputPath, { command });
  },
};
