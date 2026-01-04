import {
    Instance as CSS,
    PointTemplate,
} from "cs_script/point_script";
import { GetPlayerName } from "../utils.ts";
import System from "../base/System.ts";
import { FindDialogTemplate } from "../base/Asset.ts";
import { default as Vector } from "../math/Vector3.ts";
import QAngle from "../math/QAngle.ts";

export default class DialogSystem extends System {
    private dialog_listing: Array<Dialog> = [];

    constructor(opts = {}) {
        super();

        let {
            
        } = opts;
    }

    override OnActivate() {
        CSS.Msg("Dialog System Activated!");
    }

    public CreateDialog(opts = {}): Dialog {
        const dialog = new Dialog(opts);
        this.dialog_listing.push(dialog);
        return dialog;
    }

    override Tick() {
        this.dialog_listing.forEach(dialog => dialog.tick());
    }
}

class Dialog {
    public fields: Array<DialogField> = [];
    public cleanup: bool = false;
    
    constructor(opts = {}) {
        let {
            position = Vector.Zero,
            rotation = QAngle.Zero,
        } = opts;
    }

    public AddTextField(msg, opts = {}) {
        opts.template = opts.template ?? FindDialogTemplate();
        this.fields.push(new Text(msg, opts))
    }
        
    public AddClickableTextField(msg, callback, opts = {}) {
        opts.template = opts.template ?? FindDialogTemplate();
    }

    public tick() {
        this.fields.forEach(field => field.tick());
    }

    // Show the dialog.
    public Show() {
        
    }

    // Cleanup the dialog.
    public Dispose() {
        this.cleanup = true;
    }
}

class DialogField {
    tick() {

    }
}

class Text extends DialogField {
    constructor(msg, opts = {}) {
        super();
        let {
            template = FindDialogTemplate(),
        } = opts;
    }
}

class ClickableText extends DialogField {
    constructor(msg, opts = {}) {
        super();
        let {
            template = FindDialogTemplate(),
        } = opts;
    }
}
