interface VideoProcessorModule {
    trimVideo: (inputPath: string, startTime: string, duration: string, outputPath: string) => Promise<string>;
    cropVideo: (inputPath: string, width: number, height: number, x: number, y: number, outputPath: string) => Promise<string>;
    mergeVideos: (inputPaths: string[], outputPath: string) => Promise<string>;
    mergeAudio: (videoPath: string, audioPath: string, outputPath: string) => Promise<string>;
    addTextOverlay: (inputPath: string, text: string, x: number, y: number, outputPath: string) => Promise<string>;
    muteVideo: (inputPath: string, outputPath: string) => Promise<string>;
    rotateVideo: (inputPath: string, degrees: number, outputPath: string) => Promise<string>;
}
declare const VideoProcessingModule: VideoProcessorModule;
export default VideoProcessingModule;
