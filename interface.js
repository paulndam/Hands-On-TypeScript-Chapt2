var breezy = {
    name: "Shine Breezy",
    id: 1,
    isManager: false,
    DOB: '05/25/1989',
    Age: 33,
    getUniqueId: function () {
        var uniqueId = "".concat(breezy.id, "-").concat(breezy.name);
        if (!breezy.isManager) {
            return "Employee-".concat(uniqueId);
        }
        return uniqueId;
    }
};
console.log(breezy.getUniqueId());
var swaggy = {
    name: "Swagg Daddy",
    id: 2,
    isManager: true,
    DOB: '05/25/1989',
    Age: 33,
    getUniqueId: function () {
        var uniqueId = "".concat(swaggy.id, "-").concat(swaggy.name);
        if (swaggy.isManager) {
            return "Manager-".concat(uniqueId);
        }
        return uniqueId;
    }
};
console.log(swaggy.getUniqueId());
