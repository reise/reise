export class UUID {
    private static lut: Array<string>;
    public static generate(): string {
        UUID.buildLUT();
        let d0: number = Math.random() * 0xffffffff | 0;
        let d1: number = Math.random() * 0xffffffff | 0;
        let d2: number = Math.random() * 0xffffffff | 0;
        let d3: number = Math.random() * 0xffffffff | 0;
        return UUID.lut[d0 & 0xff] + UUID.lut[d0 >> 8 & 0xff] + UUID.lut[d0 >> 16 & 0xff] + UUID.lut[d0 >> 24 & 0xff] + '-' +
            UUID.lut[d1 & 0xff] + UUID.lut[d1 >> 8 & 0xff] + '-' + UUID.lut[d1 >> 16 & 0x0f | 0x40] + UUID.lut[d1 >> 24 & 0xff] + '-' +
            UUID.lut[d2 & 0x3f | 0x80] + UUID.lut[d2 >> 8 & 0xff] + '-' + UUID.lut[d2 >> 16 & 0xff] + UUID.lut[d2 >> 24 & 0xff] +
            UUID.lut[d3 & 0xff] + UUID.lut[d3 >> 8 & 0xff] + UUID.lut[d3 >> 16 & 0xff] + UUID.lut[d3 >> 24 & 0xff];
    }
    private static buildLUT(): void {
        UUID.lut = [];
        for (let i = 0; i < 256; i++) {
            UUID.lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
        }
    }
}