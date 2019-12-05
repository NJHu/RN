//
//  RNTMapManager.m
//  GMUserM
//
//  Created by HuXuPeng on 2019/11/29.
//  Copyright © 2019 DouYu. All rights reserved.
//

#import "RNTMapManager.h"
#import <React/RCTConvert+CoreLocation.h>
#import <React/RCTConvert.h>

@implementation RNTMapManager

RCT_EXPORT_MODULE(RNTMap)

- (MKMapView *)view
{
  return [[MKMapView alloc] init];
}

// RNTMapManager.m
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
//    [view setRegion:json ? [RCTConvert ] : defaultView.region animated:YES];
}

@end
