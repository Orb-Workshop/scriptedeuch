import { mock } from "bun:test";

class Entity {
    GetClassName = mock(() => "classname_test");
}

class PointTemplate {
    ForceSpawn = mock((...args) => [new Entity(), new Entity()]);
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
    };
});
