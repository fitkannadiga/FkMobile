var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Insomnia = /** @class */ (function (_super) {
    __extends(Insomnia, _super);
    function Insomnia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Insomnia.prototype.keepAwake = function () { return cordova(this, "keepAwake", {}, arguments); };
    Insomnia.prototype.allowSleepAgain = function () { return cordova(this, "allowSleepAgain", {}, arguments); };
    Insomnia.pluginName = "Insomnia";
    Insomnia.plugin = "cordova-plugin-insomnia";
    Insomnia.pluginRef = "plugins.insomnia";
    Insomnia.repo = "https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin";
    Insomnia.platforms = ["Android", "Browser", "Firefox OS", "iOS", "Windows", "Windows Phone 8"];
    Insomnia = __decorate([
        Injectable()
    ], Insomnia);
    return Insomnia;
}(IonicNativePlugin));
export { Insomnia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luc29tbmlhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXNDMUMsNEJBQWlCOzs7O0lBTzdDLDRCQUFTO0lBU1Qsa0NBQWU7Ozs7OztJQWhCSixRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBdkNyQjtFQXVDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuXG4vKipcbiAqIEBuYW1lIEluc29tbmlhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFByZXZlbnQgdGhlIHNjcmVlbiBvZiB0aGUgbW9iaWxlIGRldmljZSBmcm9tIGZhbGxpbmcgYXNsZWVwLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5zb21uaWEgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2luc29tbmlhL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbnNvbW5pYTogSW5zb21uaWEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaW5zb21uaWEua2VlcEF3YWtlKClcbiAqICAgLnRoZW4oXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKSxcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXJyb3InKVxuICogICApO1xuICpcbiAqIHRoaXMuaW5zb21uaWEuYWxsb3dTbGVlcEFnYWluKClcbiAqICAgLnRoZW4oXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKSxcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXJyb3InKVxuICogICApO1xuICogYGBgXG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0luc29tbmlhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW5zb21uaWEnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmluc29tbmlhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9JbnNvbW5pYS1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ0ZpcmVmb3ggT1MnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5zb21uaWEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIEtlZXBzIGF3YWtlIHRoZSBhcHBsaWNhdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBrZWVwQXdha2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHRoZSBhcHBsaWNhdGlvbiB0byBzbGVlcCBhZ2FpblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhbGxvd1NsZWVwQWdhaW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19