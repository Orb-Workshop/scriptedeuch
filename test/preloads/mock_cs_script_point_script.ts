import { mock } from "bun:test";

mock.module("cs_script/point_script", () => {
    return {
        Instance: {
            Msg: (msg) => console.log(msg),
            GetGameTime: _ => 0,
        },
        CSPlayerPawn: class CSPlayerPawn {},
        CSPlayerController: class CSPlayerController {},
        PointTemplate: class PointTemplate {},
        CSGearSlot: class CSGearSlot {},
    };
});
