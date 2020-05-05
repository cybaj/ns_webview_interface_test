"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
/**
 * View Model for the webViewInterfaceDemo.
 */
var WebViewInterfaceDemoVM = /** @class */ (function (_super) {
    __extends(WebViewInterfaceDemoVM, _super);
    function WebViewInterfaceDemoVM() {
        var _this = _super.call(this) || this;
        /**
         * Default languages to load in dropdown.
         */
        _this.lstLanguages = ['English', 'Sanskrit', 'French'];
        return _this;
    }
    Object.defineProperty(WebViewInterfaceDemoVM.prototype, "language", {
        get: function () {
            return this._language;
        },
        set: function (language) {
            this._language = language;
            this.notifyPropertyChange('language', language);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebViewInterfaceDemoVM.prototype, "selectedLanguage", {
        get: function () {
            return this._selectedLanguage;
        },
        set: function (language) {
            this._selectedLanguage = language;
            this.notifyPropertyChange('selectedLanguage', language);
        },
        enumerable: true,
        configurable: true
    });
    return WebViewInterfaceDemoVM;
}(observable_1.Observable));
exports.webViewInterfaceDemoVM = new WebViewInterfaceDemoVM();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQTREO0FBRTVEOztHQUVHO0FBQ0g7SUFBcUMsMENBQVU7SUFpQjNDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBUEQ7O1dBRUc7UUFDSCxrQkFBWSxHQUFhLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzs7SUFJM0QsQ0FBQztJQUVELHNCQUFJLDRDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWEsUUFBZ0I7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FMQTtJQU9ELHNCQUFJLG9EQUFnQjthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUFxQixRQUFnQjtZQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RCxDQUFDOzs7T0FMQTtJQU1MLDZCQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUFxQyx1QkFBVSxHQXNDOUM7QUFFVSxRQUFBLHNCQUFzQixHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuXG4vKipcbiAqIFZpZXcgTW9kZWwgZm9yIHRoZSB3ZWJWaWV3SW50ZXJmYWNlRGVtby5cbiAqL1xuY2xhc3MgV2ViVmlld0ludGVyZmFjZURlbW9WTSBleHRlbmRzIE9ic2VydmFibGV7XG4gICAgXG4gICAgLyoqXG4gICAgICogSG9sZHMgbGFuZ3VhZ2UgdG8gYWRkXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2U6IHN0cmluZztcbiAgICBcbiAgICAvKipcbiAgICAgKiBIb2xkcyBjdXJyZW50bHkgc2VsZWN0ZWQgbGFuZ3VhZ2UgaW4gd2ViVmlldy5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zZWxlY3RlZExhbmd1YWdlOiBzdHJpbmc7XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBsYW5ndWFnZXMgdG8gbG9hZCBpbiBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBsc3RMYW5ndWFnZXM6IHN0cmluZ1tdID0gWydFbmdsaXNoJywgJ1NhbnNrcml0JywgJ0ZyZW5jaCddO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIGdldCBsYW5ndWFnZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gICAgfVxuICAgIFxuICAgIHNldCBsYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbGFuZ3VhZ2UnLCBsYW5ndWFnZSk7XG4gICAgfVxuICAgIFxuICAgIGdldCBzZWxlY3RlZExhbmd1YWdlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZExhbmd1YWdlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgc2VsZWN0ZWRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZExhbmd1YWdlJywgbGFuZ3VhZ2UpOyAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgd2ViVmlld0ludGVyZmFjZURlbW9WTSA9IG5ldyBXZWJWaWV3SW50ZXJmYWNlRGVtb1ZNKCk7XG5cblxuIl19