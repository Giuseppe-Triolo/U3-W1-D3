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
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    LavoratoreAutonomo.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomo.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    return LavoratoreAutonomo;
}());
var LavoratoreAutonomoStandard = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoStandard, _super);
    function LavoratoreAutonomoStandard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomoStandard.prototype.getUtileTasse = function () {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    };
    return LavoratoreAutonomoStandard;
}(LavoratoreAutonomo));
var lavoratore1 = new LavoratoreAutonomoStandard(1, 50000, 5000, 10000);
console.log("Codice Reddito:", lavoratore1.codredd);
console.log("Reddito Annuo Lordo:", lavoratore1.redditoannuolordo);
console.log("Tasse INPS:", lavoratore1.getTasseInps());
console.log("Tasse IRPEF:", lavoratore1.getTasseIrpef());
console.log("Reddito Annuo Netto:", lavoratore1.getUtileTasse());
