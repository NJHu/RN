/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSArray *imageList = @[@"https://avatars0.githubusercontent.com/u/18454795?s=460&v=4",
                         @"https://avatars0.githubusercontent.com/u/18454795?s=460&v=4"];

  NSDictionary *props = @{@"images" : imageList};
  
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"ImageBrowserApp"
                                            initialProperties:props];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

//- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
//{
//  NSURL *url = nil;
//#if DEBUG
//  url = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//#else
//  url = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
//#endif
//  return url;
//}


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [NSURL URLWithString:@"http://localhost:8081/ImageBrowserApp.bundle?platform=ios&dev=true&minify=false"];
}


//- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
//{
//  NSURL *url = nil;
//#if DEBUG
//  url = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//#else
//  url = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
//#endif
//  return url;
//}



@end
