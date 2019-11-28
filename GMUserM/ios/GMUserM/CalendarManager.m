//
//  CalendarManager.m
//  GMUserM
//
//  Created by HuXuPeng on 2019/11/28.
//  Copyright © 2019 DouYu. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager
{
    bool hasListeners;
}

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
    return @[@"EventReminder"];
}

// 在添加第一个监听函数时触发
-(void)startObserving {
    hasListeners = YES;
    // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
    hasListeners = NO;
    // Remove upstream listeners, stop unnecessary background tasks
}


RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, details);
}

RCT_EXPORT_METHOD(doSomethingExpensive:(NSString *)param callback:(RCTResponseSenderBlock)callback)
{
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        // 在这里执行长时间的操作
        // 你可以在任何线程/队列中执行回调函数
        callback(@[[NSNull null]]);
    });
}

RCT_REMAP_METHOD(findEvents,
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSArray *events = @[@"123", @"456", @"789"];
    resolve(events);
    
    [self calendarEventReminderReceived:[NSNotification notificationWithName:@"123123" object:@{}]];
}

- (void)calendarEventReminderReceived:(NSNotification *)notification
{
    NSString *eventName = notification.userInfo[@"name"] ?: @"12321321";
    if (hasListeners) {
        [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
    }
}

@end
