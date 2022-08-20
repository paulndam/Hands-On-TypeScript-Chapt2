var InterfaceNamespce;
(function (InterfaceNamespce) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            // interfaces doesn't take super
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("This vehicle has ".concat(this.wheelCount, " wheel"));
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("This vehicle has traveled ".concat(this.wheelCount, " miles"));
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-".concat(this.name);
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("Beginner Cycle");
    console.log(moto.getFullName());
})(InterfaceNamespce || (InterfaceNamespce = {}));
