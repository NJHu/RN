package com.awesomeproject;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.PixelUtil;

import java.util.HashMap;
import java.util.Map;

public class ToastModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

//    public void measureLayout(int tag, int ancestorTag, Callback errorCallback, Callback successCallback) {
//
//        try {
//            measureLayout(tag, ancestorTag, mMeasureBuffer);
//            float relativeX = PixelUtil.toDIPFromPixel(mMeasureBuffer[0]);
//            float relativeY = PixelUtil.toDIPFromPixel(mMeasureBuffer[1]);
//            float width = PixelUtil.toDIPFromPixel(mMeasureBuffer[2]);
//            float height = PixelUtil.toDIPFromPixel(mMeasureBuffer[3]);
//            successCallback.invoke(relativeX, relativeY, width, height);
//        } catch (IllegalViewOperationException e) {
//            errorCallback.invoke(e.getMessage());
//        }
//    }

    public ToastModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }
}
