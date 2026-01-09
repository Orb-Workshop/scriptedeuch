import {
    Instance as CSS,
    PointTemplate,
} from "cs_script/point_script";
import { System, Default } from "../base/index";
import { GetPlayerName } from "../utils";
import { default as Vector } from "../math/Vector3";
import QAngle from "../math/QAngle";

export default class DialogSystem extends System {
    private dialog_listing: Array<Dialog> = [];

    constructor(opts = {}) {
        super();
    }

    override OnActivate() {
        CSS.Msg("Dialog System Activated!");
    }

    public CreateDialog(opts = {}): Dialog {
        const dialog = new Dialog(opts);
        this.dialog_listing.push(dialog);
        return dialog;
    }

    override Think() {
        this.dialog_listing.forEach(dialog => dialog.think());
    }
}

type TextFieldOptions = {template?: PointTemplate}

class Dialog {
    public fields: Array<DialogField> = [];
    public cleanup: boolean = false;
    
    constructor({
        position = Vector.Zero,
        rotation = QAngle.Zero,
    } = {}) {
        
    }

    public AddTextField(msg: string, opts: TextFieldOptions = {}) {
        opts.template = opts.template ?? Default.DialogTemplate();
        this.fields.push(new Text(msg, opts))
    }
        
    public AddClickableTextField(msg, callback, opts: TextFieldOptions = {}) {
        opts.template = opts.template ?? Default.DialogTemplate();
    }

    public think() {
        this.fields.forEach(field => field.think());
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
    think() {

    }
}

class Text extends DialogField {
    private template: PointTemplate;
    
    constructor(msg, {
        template = Default.DialogTemplate(),
    } = {}) {
        super();
        this.template = template;
    }
}

class ClickableText extends DialogField {
    private template: PointTemplate;
    
    constructor(msg, {
        template = Default.DialogTemplate(),
    } = {}) {
        super();
        this.template = template;
    }
}
