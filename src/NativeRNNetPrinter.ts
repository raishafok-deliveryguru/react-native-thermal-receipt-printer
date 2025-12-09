import { TurboModule, TurboModuleRegistry } from 'react-native';

export type PrinterOptions = {
  beep?: boolean;
  cut?: boolean;
  tailingLine?: boolean;
  encoding?: string;
};

export enum PrinterWidth {
  WIDTH_58 = 58,
  WIDTH_80 = 80,
}

export type PrinterImageOptions = {
  beep?: boolean;
  cut?: boolean;
  tailingLine?: boolean;
  encoding?: string;
  imageWidth?: number;
  imageHeight?: number;
  printerWidthType?: PrinterWidth;
  // only ios
  paddingX?: number;
}

export type NetPrinterDevice = {
  device_name: string;
  host: string;
  port: number;
};

export interface Spec extends TurboModule {
  init(): Promise<void>;
  closeConn(): Promise<void>;
  getDeviceList(): Promise<NetPrinterDevice[]>; // Android currently resolves with no list; JS handles events
  connectPrinter(host: string, port: number): Promise<NetPrinterDevice>;
  printRawData(data: string, options?: PrinterOptions): Promise<void>;
  printImageData(imageUrl: string): Promise<void>;
  printImageBase64(base64: string, opts?: PrinterImageOptions):Promise<void>;
  printQrCode(qrCode: string): Promise<void>;
  // iOS-only today
  printHex?(hex: string, options?: PrinterOptions): Promise<void>;
  // EventEmitter helpers present on Android
  addListener(eventName: string): void;
  removeListeners(count: number): void;
}

const isTurboModuleEnabled = (global as any).__turboModuleProxy != null;

export default isTurboModuleEnabled
  ? TurboModuleRegistry.getEnforcing<Spec>('RNNetPrinter')
  : (null as unknown as Spec);
