/**
   Entity Adapter for 'game_money'
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
    CSPlayerPawn,
} from "cs_script/point_script";
import {
    default as EntityHelper,
    ConnectOutputCallback,
} from "./EntityHelper";
import * as Util from "../util";

const CLASSNAME = "game_money";

export default class GameMoney extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): GameMoney {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`GameMoney - Classname Error: ${e?.GetClassName()}`);
        return new GameMoney(e);
    }

    public static Find(r: RegExp | string): GameMoney {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new GameMoney(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<GameMoney> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new GameMoney(e.raw));
    }

    public GiveMoney(player: CSPlayerPawn, amount: number): void {
        this.SetMoneyAmount(amount);
        this.AddMoneyPlayer({ activator: player });
    }

    public GiveTeamMoney_T(amount: number): void {
        this.SetMoneyAmount(amount);
        this.AddTeamMoneyTerrorist();
    }

    public GiveTeamMoney_CT(amount: number): void {
        this.SetMoneyAmount(amount);
        this.AddTeamMoneyCT();
    }
    
    // IO Event Inputs
    SetMoneyAmount(value: number, opts = {}): void {
        this.FireIO({input: "SetMoneyAmount", value, ...opts});
    }
    
    AddMoneyPlayer(opts = {}): void {
        this.FireIO({input: "AddMoneyPlayer", ...opts});
    }

    AddTeamMoneyTerrorist(opts = {}): void {
        this.FireIO({input: "AddTeamMoneyTerrorist", ...opts});
    }

    AddTeamMoneyCT(opts = {}): void {
        this.FireIO({input: "AddTeamMoneyCT", ...opts});
    }

    SpendMoneyFromPlayer(opts = {}): void {
        this.FireIO({input: "SpendMoneyFromPlayer", ...opts});
    }

    // IO Event Outputs

    public OnMoneySpent(callback: ConnectOutputCallback): GameMoney {
        return this.On("OnMoneySpent", callback) as GameMoney;
    }

    public OnMoneySpentFail(callback: ConnectOutputCallback): GameMoney {
        return this.On("OnMoneySpentFail", callback) as GameMoney;
    }
    
}
