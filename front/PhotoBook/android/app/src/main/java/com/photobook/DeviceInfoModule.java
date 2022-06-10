package com.photobook; // replace com.your-app-name with your app’s name

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

import android.util.Log;
import android.provider.Settings.Secure;

public class DeviceInfoModule extends ReactContextBaseJavaModule {

    ReactApplicationContext context;

    DeviceInfoModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    // add to CalendarModule.java
    @Override
    public String getName() {
        return "DeviceInfoModule";
    }

    @ReactMethod
    public void getUniqueId(String name, Promise promise) {
        Log.d("DeviceInfoModule", "name: " + name);
        if ("zut".equals(name)) {
            promise.reject("34", "et paf !");
            return;
        }
        String android_id = Secure.getString(context.getContentResolver(),
                Secure.ANDROID_ID);
        promise.resolve("id : " + android_id);
    }
}