Pod::Spec.new do |spec|
  spec.name         = "rnvideo-ffmpeg-processor"
  spec.version      = "1.0.0"
  spec.summary      = "A React Native module for video processing using FFmpeg."
  spec.description  = "A React Native module that provides video processing functionalities such as trimming, cropping, and merging using FFmpeg."
  spec.license      = { :type => "MIT" }
  spec.author       = { "Your Name" => "your.email@example.com" }
  spec.homepage     = "https://github.com/yourusername/rnvideo-ffmpeg-processor"
  spec.platforms    = { :ios => "10.0" }
  spec.source       = { :git => "https://github.com/yourusername/rnvideo-ffmpeg-processor.git", :tag => "#{spec.version}" }

  spec.source_files = "ios/**/*.{h,m,swift}"

  spec.dependency 'React'
  spec.dependency 'mobile-ffmpeg-full', '4.4.LTS'  # Include FFmpeg

  spec.frameworks = 'MobileCoreServices', 'CoreMedia', 'CoreVideo', 'AVFoundation', 'CoreGraphics'
end
