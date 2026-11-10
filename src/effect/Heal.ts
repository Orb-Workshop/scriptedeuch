/**

 */

import IEffect from "./IEffect";

class Heal implements IEffect {
    heal_amount: number;

    constructor(heal_amount: number, duration: number = 0) {
	this.heal_amount = heal_amount;
    }
}
