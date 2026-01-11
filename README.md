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

function DoSomethingOnPlayerKill() {
  //...
}

function DoSomethingOnPlayerKill2() {
  //...
}

function DoSomethingOnPlayerReset() {
  //...
}

Instance.OnActivate(() => {
  Instance.Msg("My Scripts are Activated!");
  DoSomethingOnActivate();
  DoSomethingOnActivate2();
});

Instance.OnPlayerKill((event) => {
  DoSomethingOnPlayerKill();
  DoSomethingOnPlayerKill2();
});

Instance.OnPlayerReset((event) => {
  DoSomethingOnPlayerReset();
});

// ...
```


**The mounting framework replaces point_script Instance event handling
  to allow Systems to work in tandem more easily. Multiple systems can
  handle events independently of the Instance event handler.


Here's the same example written using the **scriptedeuch** mounter
(Base.Mount) and systems framework (Base.System)

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

  override OnPlayerKill() {
    // DoSomethingOnPlayerKill()
  }

  override OnPlayerReset() {
    // DoSomethingOnPlayerReset()
  }
}

class DoSomething2 extends Base.System {
  constructor() {
    super();
  }

  override OnActivate() {
    // DoSomethingOnActivate2()
  }

  override OnPlayerKill() {
    // DoSomethingOnPlayerKill2()
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

