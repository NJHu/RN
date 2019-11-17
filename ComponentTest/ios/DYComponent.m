
//
//  DYComponent.m
//  ComponentTest
//
//  Created by HuXuPeng on 2019/11/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "DYComponent.h"
#import <UIKit/UIKit.h>
#import <React/RCTConvert.h>

@implementation DYComponent

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showFrom:(NSString *)fromMoulde data:(NSDictionary *)data)
{
  NSLog(@"%@-%@", fromMoulde, data);
}

@end
