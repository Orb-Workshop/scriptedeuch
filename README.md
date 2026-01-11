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

**scriptedeuch** as a fundamental step employs a *Mount*ing process,
  which works in tandem with System classes.

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


The mounting framework replaces point_script Instance event handling
to allow Systems to work in tandem more easily. Multiple systems can
handle events independently of the Instance event handler.


Here's the same example written using the **scriptedeuch** mounter
`Base.Mount` and systems framework `Base.System`.

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

## Description

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

