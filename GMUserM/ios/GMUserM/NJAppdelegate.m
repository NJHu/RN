//
//  NJAppdelegate.m
//  GMUserM
//
//  Created by HuXuPeng on 2019/11/14.
//  Copyright © 2019 DouYu. All rights reserved.
//

#import "NJAppdelegate.h"
#import "NJUIViewController.h"

@interface NJAppdelegate()

@end

@implementation NJAppdelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    self.window.rootViewController = [[NJUIViewController alloc] init];
    
    return YES;
}

#pragma mark - getter
- (UIWindow *)window
{
    if(!_window)
    {
        _window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
        _window.backgroundColor = [UIColor blackColor];
        [_window makeKeyAndVisible];
    }
    return _window;
}

@end
