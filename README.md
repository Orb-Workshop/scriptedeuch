# scriptedeuch

[![Bun Tests](https://github.com/Orb-Workshop/scriptedeuch/actions/workflows/main.yml/badge.svg)](https://github.com/Orb-Workshop/scriptedeuch/actions/workflows/main.yml)

**scriptedeuch** is a Library and Framework to be used within CS2
  workshop maps. It is supposed to provide useful tools to ease
  development, and works in tandem with
  [bundledeuch](https://github.com/Orb-Workshop/bundledeuch) to
  quickly develop prototypes for inspiring game modes, custom weapons,
  and your hearts intent.

API Documentation: [here](docs/README.md)

## Quickstart

### I want my players to regenerate health like Torus.

```typescript
import { Base, System } from "scriptedeuch";

Base.Mount.Register("HealthRegen", new PlayerHealthRegenerationSystem({
  regeneration_rate: 10.0,    // Health Per Second
  regeneration_delay: 5.0,    // Seconds
  max_health_recovery: 100.0, // 0-100
}));
Base.Mount.Start();
```

### I want to change the default player models
```typescript
import { Base, System } from "scriptedeuch";

Base.Mount.Register("PlayerModelChanger", new System.PlayerModelChangerSystem({
  point_script_targetname: "main.script",
  t_models: ["characters/models/tm_professional/tm_professional_varg.vmdl"],
  ct_models: ["characters/models/ctm_swat/ctm_swat_variante.vmdl"],
  t_colors: [{r: 255, g: 255, b: 255}],
  ct_colors: [{r: 255, g: 255, b: 255}],
});
Base.Mount.Start();
```

### I want to track killing sprees, and play sounds to players

Note: `System.SoundEventSystem` requires the
`./maps/prefabs/scriptedeuch/scriptedeuch_root.vmap` prefab to be
imported into your map.

```typescript
import { Instance as CSS } from "cs_script/point_script";
import { Base, System, Util } from "scriptedeuch";

const soundEventSystem = Base.Mount.Register("SoundEvents", new System.SoundEventSystem({
  debug: false,
}));

Base.Mount.Register("GameAnnouncer", new System.GameAnnouncerSystem({
  callback:(obj) => {
    let {player_pawn, player_stats} = obj;
    let {kills_with_same_weapon = 0,
         killing_spree_weapon_name = null,
         kills_since_interval = 0,
         kills_since_death = 0,
         enemy_killed = null, // CSPlayerPawn, last enemy killed (or teammate)
         enemy_had_killing_spree = false,
         enemy_was_teammate = false} = player_stats;

    CSS.Msg("Player Name: " + Util.GetPlayerName(player_pawn));
    CSS.Msg("Player Stats: " + JSON.stringify(player_stats));
    
    // Kill Ping
    soundEventSystem.PlaySoundToPlayer(player_pawn, "Vote.Passed", true);
}});
Base.Mount.Start();
```

## Detailed Description

**scriptedeuch** as a fundamental step employs a *Mount*ing process (`Base.Mount`),
  which works closely with System classes (`Base.System`).

How you would typically write a CS script
```typescript
import { Instance } from "cs_script/point_script";

function DoSomethingOnActivate() {
  //...
}

function DoSomethingOnActivate2() {
  //...
}

function DoSomethingOnPlayerKill(event) {
  //...
}

function DoSomethingOnPlayerKill2(event) {
  //...
}

function DoSomethingOnPlayerReset(event) {
  //...
}

Instance.OnActivate(() => {
  Instance.Msg("My Scripts are Activated!");
  DoSomethingOnActivate();
  DoSomethingOnActivate2();
});

Instance.OnPlayerKill((event) => {
  DoSomethingOnPlayerKill(event);
  DoSomethingOnPlayerKill2(event);
});

Instance.OnPlayerReset((event) => {
  DoSomethingOnPlayerReset(event);
});

// ...
```

Here's the same example written using the **scriptedeuch** mounter
`Base.Mount` and systems framework `Base.System`. Individual systems
can handle events independently of the Instance event handler.

```typescript
//import { Instance } from "cs_script/point_script";
import { Base } from "scriptedeuch";

class DoSomething extends Base.System {
  constructor() {
    super();
  }
  
  override OnActivate() {
    // DoSomethingOnActivate()
  }

  override OnPlayerKill(event) {
    // DoSomethingOnPlayerKill(event)
  }

  override OnPlayerReset(event) {
    // DoSomethingOnPlayerReset(event)
  }
}

class DoSomething2 extends Base.System {
  constructor() {
    super();
  }

  override OnActivate() {
    // DoSomethingOnActivate2()
  }

  override OnPlayerKill(event) {
    // DoSomethingOnPlayerKill2(event)
  }
}

// Register system instances with our mounter, give them unique names
Base.Mount.Register("DoSomething", new DoSomething());
Base.Mount.Register("DoSomething2", new DoSomething2());

// Start our mounter.
Base.Mount.Start(); // Attaches Instance.On* events to the registered systems.
```

The separation of concerns and encapsulation of logic into individual
systems allows for easier code re-use.

### I tink, therefore I am.

The mounter also replaces `Instance.SetThink` and
`Instance.SetNextThink` functionality. Systems can override
`Base.System.Think()` and set their own *Tick Rate*. (Default, every available tick, 64-Tick)

```typescript
import { Instance as CSS } from "cs_script/point_script";
import { Base } from "scriptedeuch";

class RepeatingMsgs extends Base.System {
  private num: number = 0;
  private msgs: Array<string>;
  
  constructor(msgs: Array<string>) {
    super();
    // this.SetTick(128); // Default (pegged at 64-Tick)
    this.SetTickInterval(1); // Every Second
    this.msgs = msgs;
  }

  override Think() {
    const len = this.msgs.length;
    CSS.Msg(this.msgs[this.num++ % len]);
  }
}
Base.Mount.Register("Clock", new RepeatingMsgs(["Tick!", "Tock!"]));
Base.Mount.Start();
```

### Actors, and how they tag along

Here's the same example, but with `Base.Actor`

```typescript
import { Instance as CSS } from "cs_script/point_script";
import { Base } from "scriptedeuch";

class RepeatingMsgs extends Base.Actor {
  private num: number = 0;
  private msgs: Array<string>;
  
  constructor(msgs: Array<string>) {
    super();
    // this.SetTick(128); // Default (pegged at 64-Tick)
    this.SetTickInterval(1); // Every Second
    this.msgs = msgs;
  }

  override Think() {
    const len = this.msgs.length;
    CSS.Msg(this.msgs[this.num++ % len]);
  }

  override Dispose() {
    CSS.Msg("I'm Dead!");
  }
}

const clock = new RepeatingMsgs(["Tick!", "Tock!"]);
Base.Mount.Start();
```

Note the key differences between Actors and Systems:

- Actors do not maintain Instance event overloads (`Instance.On*`, ...), this pattern is used
  primarily in Systems.

- Actors do not explicitly register with the mounting system. They
  will automatically mount an internal `ActorSystem` system registered
  with the mounter as `"DefaultActorPool"` upon construction.
  
- Actors maintain their own lifetime, and are removed with
  `Base.Actor.Remove()`. Upon removal within the internal
  `ActorSystem`, the overridable `Base.Actor.Dispose()` method is
  called.

- Actors can communicate with each other, and everything can
  communicate with Actors. This is explained in the next section.

### Actor Messaging Explained

Consider this Example
```typescript
import { Instance as CSS } from "cs_script/point_script";
import { Base } from "scriptedeuch";

class Dog extends Base.Actor {
  static Tag: string = "DogTag";
  name: string;

  constructor(name) {
    super();
    this.SetTickInterval(15); // New Thought every 15 Seconds
    this.name = name;
  }

  override Think() {
    CSS.Msg("Bark!");
    // if (this.state == ...)
    // Roam
    // Bark
    // Sit
    // Play
    // Move Around
    // Growl at Nearby Player
  }

  HandleComeHere(event_data) {
    // ComeHere Implementation
    CSS.Msg("Arf! Arf!");
  }

  HandleSit(event_data) {
    // Sit Implementation
    CSS.Msg("*pant* *pant*");
  }

  override ReceiveMessage(tag: string, data: any) {
    if (tag !== Dog.Tag) return;
    const { dog_name, event_name, event_data = {} } = data;

    // Broadcast Dog Messages
    if (event_name == "FoodIsReady!") {
      this.HandleComeHere(event_data);
    }

    if (event_name == "KillAll") {
      this.Remove(); return;
    }

    // Specific Dog Messages
    if (dog_name !== this.name) return;

    if (event_name == "ComeHere") {
      this.HandleComeHere(event_data);
    }
    else if (event_name == "Sit") {
      this.HandleSit(event_data);
    }
    else if (event_name == "Kill") {
      this.Remove();
    }
  }

  override Dispose() {
    // Remove Entity, dispose of the Dog.
  }
}

class DogSystem extends Base.System {
  constructor() {
    super();
  }

  static SendMessage(dog_name, event_name, event_data = {}) {
    Base.Actor.SendMessage(Dog.Tag, { dog_name, event_name, event_data });
  }

  static Sit(dog_name) {
    DogSystem.SendMessage(dog_name, "Sit");
  }

  static ComeHere(dog_name) {
    DogSystem.SendMessage(dog_name, "ComeHere");
  }

  static GatherDogs() {
    DogSystem.SendMessage(null, "FoodIsReady!");
  }

  static KillAll() {
    DogSystem.SendMessage(null, "KillAll");
  }

  static Kill(dog_name) {
    DogSystem.SendMessage(dog_name, "Kill");
  }

  override OnRoundStart() {
    // Spawn some Dawgs
    new Dog("Lucy");
    new Dog("Betty");
    new Dog("Stevie");
    new Dog("Bartman");
    new Dog("Bertdude");
  }

  override OnRoundEnd() {
    DogSystem.GatherDogs();
    DogSystem.KillAll();
  }
}
Base.Mount.Register("Dogs", new DogSystem());
Base.Mount.Start();
```

Actors communicate with each other through the static method
`Base.Actor.SendMessage(key: string, data: any)`. All actors have the overridable method
`Base.Actor.ReceiveMessage(key: string, data: any)`, which can be used
as an event messaging system to build interactions between actors.

### Mount System Actor Model

![Mount System Actor Model Diagram](media/Mount_System_Actor_Model.png)


## Development & Testing

To install dependencies:

```bash
bun install
```

To test:

```bash
bun test
```

To develop:

```bash
bun run build
```

OR

```bash
bun run watch
```

## References

- [Bun](https://bun.com/)

- [CS2 Scripting API](https://www.source2.wiki/Scripting/Counter-Strike%202/cs_script/functionList?game=any)

## Related Projects

- [bounty_mode](https://github.com/Orb-Workshop/bounty_mode)

- [trigger_invincibility](https://github.com/Orb-Workshop/trigger_invincibility)

- [trigger_explosion](https://github.com/Orb-Workshop/trigger_explosion)