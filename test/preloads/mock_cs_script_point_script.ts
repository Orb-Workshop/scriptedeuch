import { mock } from "bun:test";

class Entity {
    GetClassName = mock(() => "classname_test");
}

class PointTemplate {
    ForceSpawn = mock((...args) => [new Entity(), new Entity()]);
}

enum CSInputs {
    NONE = 0,
    FORWARD = 1 << 0,
    BACK = 1 << 1,
    LEFT = 1 << 2,
    RIGHT = 1 << 3,
    WALK = 1 << 4,
    DUCK = 1 << 5,
    JUMP = 1 << 6,
    USE = 1 << 7,
    ATTACK = 1 << 8,
    ATTACK2 = 1 << 9,
    RELOAD = 1 << 10,
    SHOW_SCORES = 1 << 11,
    LOOK_AT_WEAPON = 1 << 12,
}

mock.module("cs_script/point_script", () => {
    return {
        Instance: {
            Msg: mock((msg) => console.log(msg)),
            GetGameTime: mock(() => 0),
            FindEntitiesByClass: mock(s => []),
        },
        Entity: Entity,
        CSPlayerPawn: class CSPlayerPawn {},
        CSPlayerController: class CSPlayerController {},
        PointTemplate: PointTemplate,
        CSGearSlot: class CSGearSlot {},
        CSInputs: CSInputs,
    };
});
