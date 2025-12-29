import { mock } from "bun:test";

mock.module("cs_script/point_script", () => {
    return {
        Instance: {
            
        },
        Msg: (msg) => console.log(msg),
        CSPlayerPawn: class CSPlayerPawn {},
        CSPlayerController: class CSPlayerController {},
        PointTemplate: class PointTemplate {},
    };
});
