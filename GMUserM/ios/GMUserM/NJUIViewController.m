//
//  NJUIViewController.m
//  GMUserM
//
//  Created by HuXuPeng on 2019/11/14.
//  Copyright © 2019 DouYu. All rights reserved.
//

#import "NJUIViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBridgeDelegate.h>

@interface NJUIViewController ()<RCTBridgeDelegate>

@end

@implementation NJUIViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.view.backgroundColor = [UIColor redColor];
//    10.118.24.31
//    192.168.2.25
    // localhost
    
    NSDictionary *initialProperties = @{
      @"scores" : @[
        @{
          @"name" : @"Alex",
          @"value": @"42"
         },
        @{
          @"name" : @"Joel",
          @"value": @"10"
        }
      ]
    };
    
    RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];

    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"Activity" initialProperties:initialProperties];
    
    
    rootView.frame = CGRectMake(0, 100, 300, 400);
    rootView.backgroundColor = UIColor.whiteColor;
    [self.view addSubview:rootView];
}


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://10.118.24.31:8081/Activity.bundle?platform=ios"];
    
    return jsCodeLocation;
}

- (NSArray<id<RCTBridgeModule>> *)extraModulesForBridge:(RCTBridge *)bridge {
    return @[];
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    
}

@end
