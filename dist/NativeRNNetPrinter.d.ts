import { TurboModule } from 'react-native';
export type PrinterOptions = {
    beep?: boolean;
    cut?: boolean;
    tailingLine?: boolean;
    encoding?: string;
};
export declare enum PrinterWidth {
    "58mm" = 58,
    "80mm" = 80
}
export type PrinterImageOptions = {
    beep?: boolean;
    cut?: boolean;
    tailingLine?: boolean;
    encoding?: string;
    imageWidth?: number;
    imageHeight?: number;
    printerWidthType?: PrinterWidth;
    paddingX?: number;
};
export type NetPrinterDevice = {
    device_name: string;
    host: string;
    port: number;
};
export interface Spec extends TurboModule {
    init(): Promise<void>;
    closeConn(): Promise<void>;
    getDeviceList(): Promise<NetPrinterDevice[]>;
    connectPrinter(host: string, port: number): Promise<NetPrinterDevice>;
    printRawData(data: string, options?: PrinterOptions): Promise<void>;
    printImageData(imageUrl: string): Promise<void>;
    printImageBase64(base64: string, opts?: PrinterImageOptions): Promise<void>;
    printQrCode(qrCode: string): Promise<void>;
    printHex?(hex: string, options?: PrinterOptions): Promise<void>;
    addListener(eventName: string): void;
    removeListeners(count: number): void;
}
declare const _default: Spec;
export default _default;
