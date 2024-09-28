#import <React/RCTBridgeModule.h>
#import <MobileFFmpeg/MobileFFmpeg.h>

@interface VideoProcessor : NSObject <RCTBridgeModule>
@end

@implementation VideoProcessor

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(processVideo:(NSString *)inputPath
                  options:(NSDictionary *)options
                  callback:(RCTResponseSenderBlock)callback) {
    NSString *command = [NSString stringWithFormat:@"-i %@ %@", inputPath, options[@"command"]];

    int result = [MobileFFmpeg execute:command];

    if (result == 0) {
        callback(@[[NSNull null], @"Success"]);
    } else {
        callback(@[@"Failed to process video", [NSNull null]]);
    }
}

@end
