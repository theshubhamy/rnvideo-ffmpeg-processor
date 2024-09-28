package com.videoprocessor;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import com.arthenica.mobileffmpeg.FFmpeg;

public class VideoProcessorModule extends ReactContextBaseJavaModule {

    VideoProcessorModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "VideoProcessor";
    }

    @ReactMethod
    public void processVideo(String inputPath, String command, Callback callback) {
        int result = FFmpeg.execute(command);

        if (result == 0) {
            callback.invoke(null, "Success");
        } else {
            callback.invoke("Failed to process video", null);
        }
    }
}
