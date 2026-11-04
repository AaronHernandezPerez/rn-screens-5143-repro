# react-native-screens #5143 repro

Minimal Expo app for [software-mansion/react-native-screens#5143](https://github.com/software-mansion/react-native-screens/issues/5143): on iOS, a red box saying `[RNScreens] sheetPresentationController is null when attempting to set allowed detents` appears after a form sheet that hosts its own stack closes and a screen is pushed right after.

## Run

```sh
npm install
npx expo run:ios
```

## Steps

1. Tap **Open form sheet**.
2. In the sheet, tap **Continue**. It calls `router.back()` and then `router.push("/next")` in a `setTimeout(..., 0)`.

Expected: the sheet closes and the Next screen opens.

Actual: the Next screen opens with the red box above (Debug build). It showed up on every run from a fresh app launch.

## Cause

`RNSScreenContentWrapper` is recycled by Fabric. A wrapper inside the sheet's nested stack gets its `delegate` from `attachToAncestorScreenView`, which points it at the form sheet's `RNSScreenView`. When the sheet unmounts, `-[RNSScreenView unmountChildComponentView:index:]` only clears the delegate of the wrapper stored in `_contentWrapperBox`, so the nested wrapper keeps a delegate pointing at the invalidated sheet view. When the pushed screen reuses that wrapper, its first `updateLayoutMetrics` calls `contentWrapper:receivedReactFrame:` on the old sheet, whose `_controller` is already nil.

A likely fix is to clear `delegate` in a `prepareForRecycle` override on `RNSScreenContentWrapper` (I have not tested it yet).

## Versions

- react-native-screens 4.30.1
- react-native 0.88.1 (New Architecture, Hermes)
- expo 58.0.23, expo-router 58.0.30
- iOS simulator (iPhone 17e), Debug build
