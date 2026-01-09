import { mock } from "bun:test";

mock.module("cs_script/point_script", () => {
    return {
        Instance: {
            Msg: (msg) => console.log(msg),
            GetGameTime: _ => 0,
            FindEntitiesByClass: mock((s) => []),
        },
        Entity: class Entity {},
        CSPlayerPawn: class CSPlayerPawn {},
        CSPlayerController: class CSPlayerController {},
        PointTemplate: class PointTemplate {},
        CSGearSlot: class CSGearSlot {},
    };
});
