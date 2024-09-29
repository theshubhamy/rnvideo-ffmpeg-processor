"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
// Import the native module for video processing
const { VideoProcessor } = react_native_1.NativeModules;
// Video processing module with all methods
const VideoProcessingModule = {
    // Trim Video Method
    trimVideo: (inputPath, startTime, duration, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
        const command = `-ss ${startTime} -t ${duration} -i ${inputPath} -c copy ${outputPath}`;
        return yield VideoProcessor.processVideo(inputPath, { command });
    }),
    // Crop Video Method
    cropVideo: (inputPath, width, height, x, y, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
        const command = `-i ${inputPath} -filter:v "crop=${width}:${height}:${x}:${y}" ${outputPath}`;
        return yield VideoProcessor.processVideo(inputPath, { command });
    }),
    // Merge Videos Method
    mergeVideos: (inputPaths, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
        const fileList = inputPaths.join('|');
        const command = `-i "concat:${fileList}" -c copy ${outputPath}`;
        return yield VideoProcessor.processVideo(inputPaths[0], { command });
    }),
    // Merge Audio Method
    mergeAudio: (videoPath, audioPath, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
        const command = `-i ${videoPath} -i ${audioPath} -c:v copy -c:a aac ${outputPath}`;
        return yield VideoProcessor.processVideo(videoPath, { command });
    }),
    // Add Text Overlay Method
    addTextOverlay: (inputPath, text, x, y, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
        const command = `-i ${inputPath} -vf drawtext="text='${text}':x=${x}:y=${y}:fontsize=24:fontcolor=white" ${outputPath}`;
        return yield VideoProcessor.processVideo(inputPath, { command });
    }),
    // Mute Video Method (remove audio)
    muteVideo: (inputPath, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
        const command = `-i ${inputPath} -an ${outputPath}`;
        return yield VideoProcessor.processVideo(inputPath, { command });
    }),
    // Rotate Video Method
    rotateVideo: (inputPath, degrees, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
        const command = `-i ${inputPath} -vf "transpose=${degrees}" ${outputPath}`;
        return yield VideoProcessor.processVideo(inputPath, { command });
    }),
};
exports.default = VideoProcessingModule;
