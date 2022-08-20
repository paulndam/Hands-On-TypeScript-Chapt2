var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GenericNamespace;
(function (GenericNamespace) {
    var Automobile = /** @class */ (function () {
        function Automobile(name, wheels) {
            this.name = name;
            this.wheels = wheels;
        }
        Automobile.prototype.getName = function () { return this.name; };
        Automobile.prototype.getWheelCount = function () { return this.wheels; };
        return Automobile;
    }());
    var MercedsBenz = /** @class */ (function (_super) {
        __extends(MercedsBenz, _super);
        function MercedsBenz() {
            return _super.call(this, "Mercedes Benz", { count: 4, diameter: 21 }) || this;
        }
        return MercedsBenz;
    }(Automobile));
    var MB = new MercedsBenz();
    console.log("Car name is ---> ".concat(MB.getName()));
    console.log("Have ".concat(JSON.stringify(MB.getWheelCount()), " tires \uD83D\uDEDE \uD83D\uDEDE"));
})(GenericNamespace || (GenericNamespace = {}));
