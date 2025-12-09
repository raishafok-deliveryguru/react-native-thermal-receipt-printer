import { TurboModuleRegistry } from 'react-native';
export var PrinterWidth;
(function (PrinterWidth) {
    PrinterWidth[PrinterWidth["WIDTH_58"] = 58] = "WIDTH_58";
    PrinterWidth[PrinterWidth["WIDTH_80"] = 80] = "WIDTH_80";
})(PrinterWidth || (PrinterWidth = {}));
var isTurboModuleEnabled = global.__turboModuleProxy != null;
export default isTurboModuleEnabled
    ? TurboModuleRegistry.getEnforcing('RNUSBPrinter')
    : null;
