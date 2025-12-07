import { Instance as CSS } from "cs_script/point_script";
import { Vector2, QAngle } from "./index.ts";

const v = Vector2.create();
const q = QAngle.create();

CSS.OnActivate(() => {
    CSS.Msg("ScriptedEuch has been Activated!");
});

CSS.OnScriptReload({after:() => {
    CSS.Msg("ScriptedEuch has been Reloaded!");
}});

