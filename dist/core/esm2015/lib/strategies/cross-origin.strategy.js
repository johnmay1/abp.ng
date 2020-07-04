export class CrossOriginStrategy {
    constructor(crossorigin, integrity) {
        this.crossorigin = crossorigin;
        this.integrity = integrity;
    }
    setCrossOrigin(element) {
        if (this.integrity)
            element.setAttribute('integrity', this.integrity);
        element.setAttribute('crossorigin', this.crossorigin);
    }
}
export const CROSS_ORIGIN_STRATEGY = {
    Anonymous(integrity) {
        return new CrossOriginStrategy('anonymous', integrity);
    },
    UseCredentials(integrity) {
        return new CrossOriginStrategy('use-credentials', integrity);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3Mtb3JpZ2luLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3N0cmF0ZWdpZXMvY3Jvc3Mtb3JpZ2luLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBbUIsV0FBNEMsRUFBUyxTQUFrQjtRQUF2RSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUM7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFTO0lBQUcsQ0FBQztJQUU5RixjQUFjLENBQXdCLE9BQVU7UUFDOUMsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RSxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGO0FBRUQsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUc7SUFDbkMsU0FBUyxDQUFDLFNBQWtCO1FBQzFCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELGNBQWMsQ0FBQyxTQUFrQjtRQUMvQixPQUFPLElBQUksbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3Jvc3NPcmlnaW5TdHJhdGVneSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNyb3Nzb3JpZ2luOiAnYW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnLCBwdWJsaWMgaW50ZWdyaXR5Pzogc3RyaW5nKSB7fVxyXG5cclxuICBzZXRDcm9zc09yaWdpbjxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGVsZW1lbnQ6IFQpIHtcclxuICAgIGlmICh0aGlzLmludGVncml0eSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ludGVncml0eScsIHRoaXMuaW50ZWdyaXR5KTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsIHRoaXMuY3Jvc3NvcmlnaW4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENST1NTX09SSUdJTl9TVFJBVEVHWSA9IHtcclxuICBBbm9ueW1vdXMoaW50ZWdyaXR5Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IENyb3NzT3JpZ2luU3RyYXRlZ3koJ2Fub255bW91cycsIGludGVncml0eSk7XHJcbiAgfSxcclxuICBVc2VDcmVkZW50aWFscyhpbnRlZ3JpdHk/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgQ3Jvc3NPcmlnaW5TdHJhdGVneSgndXNlLWNyZWRlbnRpYWxzJywgaW50ZWdyaXR5KTtcclxuICB9LFxyXG59O1xyXG4iXX0=