package com.geozone;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import iyegoroff.imagefilterkit.ImageFilterKitPackage;

import com.RNFetchBlob.RNFetchBlobPackage;

import com.anyline.RNImageToPDF.RNImageToPdfPackage;
import com.christopherdro.RNPrint.RNPrintPackage;
import com.christopherdro.RNPrint.RNPrintPackage;
import com.vinzscam.reactnativefileviewer.RNFileViewerPackage;

import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import com.oblador.vectoricons.VectorIconsPackage;
// import com.hopding.pdflib.PDFLibPackage;
// import com.hopding.pdflib.PDFLibPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.asterinet.react.bgactions.BackgroundActionsPackage;
import com.asterinet.react.bgactions.BackgroundActionsPackage;
import com.christopherdro.htmltopdf.RNHTMLtoPDFPackage;
// import com.asterinet.react.bgactions.ReactNativeBackgroundActions;
// import com.transistorsoft.rnbackgroundfetch.RNBackgroundFetchPackage;
// import com.transistorsoft.rnbackgroundgeolocation.RNBackgroundGeolocation;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.soloader.SoLoader;
import com.geozone.newarchitecture.MainApplicationReactNativeHost;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
         
         
            // packages.add(new BackgroundActionsPackage());
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add( new MainReactPackage(),
            new ImageFilterKitPackage();
          
            new RNFetchBlobPackage();
   
           
            new RNImageToPdfPackage();
            new RNPrintPackage();
            new RNPrintPackage();
            new RNFileViewerPackage();
            new RNViewShotPackage();
            new RNViewShotPackage();
          // packages.add(new RNHTMLtoPDFPackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  private final ReactNativeHost mNewArchitectureNativeHost =
      new MainApplicationReactNativeHost(this);

  @Override
  public ReactNativeHost getReactNativeHost() {
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      return mNewArchitectureNativeHost;
    } else {
      return mReactNativeHost;
    }
  }

  @Override
  public void onCreate() {
    super.onCreate();
    // If you opted-in for the New Architecture, we enable the TurboModule system
    ReactFeatureFlags.useTurboModules = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    SoLoader.init(this, /* native exopackage */ false);
    //  ReactNativeBackgroundActions.initialize(this);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.geozone.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
