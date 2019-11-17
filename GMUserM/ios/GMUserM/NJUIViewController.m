//
//  NJUIViewController.m
//  GMUserM
//
//  Created by HuXuPeng on 2019/11/14.
//  Copyright © 2019 DouYu. All rights reserved.
//

#import "NJUIViewController.h"
#import <React/RCTRootView.h>

@interface NJUIViewController ()

@end

@implementation NJUIViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.view.backgroundColor = [UIColor lightGrayColor];
    
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];

    RCTRootView *rootView =
      [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                  moduleName: @"RNHighScores"
                           initialProperties:
                             @{
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
                             }
                               launchOptions: nil];
    
    [self.view addSubview:rootView];
    rootView.frame = self.view.bounds;
}

@end
