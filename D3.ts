abstract class LavoratoreAutonomo {
  constructor(
    public codredd: number,
    public redditoannuolordo: number,
    public tasseinps: number,
    public tasseirpef: number
  ) {}

  abstract getUtileTasse(): number;

  getTasseInps(): number {
    return this.tasseinps;
  }

  getTasseIrpef(): number {
    return this.tasseirpef;
  }
}
class LavoratoreAutonomoStandard extends LavoratoreAutonomo {
  getUtileTasse(): number {
    return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
  }
}

const lavoratore1 = new LavoratoreAutonomoStandard(1, 50000, 5000, 10000);

console.log("Codice Reddito:", lavoratore1.codredd);
console.log("Reddito Annuo Lordo:", lavoratore1.redditoannuolordo);
console.log("Tasse INPS:", lavoratore1.getTasseInps());
console.log("Tasse IRPEF:", lavoratore1.getTasseIrpef());
console.log("Reddito Annuo Netto:", lavoratore1.getUtileTasse());
