module.exports = {
  dependency: {
    platforms: {
      android: {
        sourceDir: './android', // Path to the android folder
      },
      ios: {
        podspecPath: './ios/VideoProcessor.podspec', // Path to the podspec file for iOS
      },
    },
  },
};
