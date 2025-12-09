import { TurboModuleRegistry } from 'react-native';
export var PrinterWidth;
(function (PrinterWidth) {
    PrinterWidth[PrinterWidth["58mm"] = 58] = "58mm";
    PrinterWidth[PrinterWidth["80mm"] = 80] = "80mm";
})(PrinterWidth || (PrinterWidth = {}));
var isTurboModuleEnabled = global.__turboModuleProxy != null;
export default isTurboModuleEnabled
    ? TurboModuleRegistry.getEnforcing('RNBLEPrinter')
    : null;
