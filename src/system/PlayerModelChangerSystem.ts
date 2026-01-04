import {
    Instance as CSS,
    CSPlayerPawn,
} from "cs_script/point_script";
import System from "../base/System.ts";
import RandomChoiceGenerator from "../random/RandomChoiceGenerator.ts";
import { GenerateAddOutput } from "../utils.ts";

const T_TEAM_NUMBER = 2;
const CT_TEAM_NUMBER = 3;

export default class PlayerModelChangerSystem extends System {
    constructor(opts = {}) {
        super();
        let {
            point_script_targetname,
            script_input_name = "SetRandomModel",
            
            t_models = [
                "characters/models/tm_professional/tm_professional_varg.vmdl",
                "characters/models/tm_professional/tm_professional_varf.vmdl",
                "characters/models/tm_professional/tm_professional_varf5.vmdl",
                "characters/models/tm_professional/tm_professional_varj.vmdl",
            ],
            t_colors = [
                {r: 255, g: 30,  b: 30},
                {r: 255, g: 40,  b: 40},
                {r: 255, g: 45,  b: 45},
                {r: 255, g: 75,  b: 75},
                {r: 255, g: 100, b: 100},
            ],
            ct_models = [
                "characters/models/ctm_swat/ctm_swat_variante.vmdl",
                "characters/models/ctm_st6/ctm_st6_variantm.vmdl",
                "characters/models/ctm_swat/ctm_swat_variantf.vmdl",
                "characters/models/ctm_gendarmerie/ctm_gendarmerie_variante.vmdl",
            ],
            ct_colors = [
                {r: 30,  g: 30,   b: 255},
                {r: 50,  g: 50,   b: 255},
                {r: 0,   g: 100,  b: 255},
                {r: 70,  g: 70,   b: 255},
                {r: 100, g: 100,  b: 255},
                {r: 100, g: 120,  b: 255},
                {r: 120, g: 120,  b: 255},
            ],
        } = opts;
        if (point_script_targetname === undefined) throw new Error("Require 'point_script_targetname'");
        this.point_script_targetname = point_script_targetname;
        this.script_input_name = script_input_name;

        // Generators
        this.t_model_gen = RandomChoiceGenerator(t_models);
        this.t_color_gen = RandomChoiceGenerator(t_colors);
        this.ct_model_gen = RandomChoiceGenerator(ct_models);
        this.ct_color_gen = RandomChoiceGenerator(ct_colors);
        
        // Register Script Input
        CSS.Msg("Registering Script Input: " + this.script_input_name);
        CSS.OnScriptInput(this.script_input_name, (context) => {
            let player_pawn = context.caller;
            if (!(player_pawn instanceof CSPlayerPawn)) return;
            const team_number = player_pawn.GetTeamNumber();
            const random_model = (team_number == T_TEAM_NUMBER) ? this.chooseTModel() : this.chooseCTModel();
            player_pawn.SetModel(random_model);
        });
    }

    private chooseTModel() {
        const random_model = this.t_model_gen.next().value;
        return random_model;
    }

    private chooseTColor() {
        return this.t_color_gen.next().value;
    }

    private chooseCTModel() {
        return this.ct_model_gen.next().value;
    }

    private chooseCTColor() {
        return this.ct_color_gen.next().value;
    }

    private handlePlayerModel(player_pawn: CSPlayerPawn) {
        let add_output = GenerateAddOutput({
            output_name: "OnUser1",
            target_name: this.point_script_targetname,
            input_name: "RunScriptInput",
            parameter: this.script_input_name,
            max: 1, // Run Once
        });
        CSS.EntFireAtTarget({target: player_pawn, input: "AddOutput", value: add_output});
        CSS.EntFireAtTarget({target: player_pawn, input: "FireUser1"});
    }

    private handlePlayerColor(player_pawn: CSPlayerPawn) {
        const team_number = player_pawn.GetTeamNumber();
        switch(team_number) {
            case T_TEAM_NUMBER: {
                player_pawn.SetColor(this.chooseTColor());
                break;
            }
            case CT_TEAM_NUMBER: {
                player_pawn.SetColor(this.chooseCTColor());
                break;
            }
        }
    }

    override OnPlayerReset(event) {
        const player_pawn = event.player;
        this.handlePlayerModel(player_pawn);
        this.handlePlayerColor(player_pawn);
    }
}
