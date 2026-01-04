import {
    Instance as CSS,
    PointTemplate,
} from "cs_script/point_script";
import { GetPlayerName } from "../utils.ts";
import System from "../base/System.ts";
import { FindDialogTemplate } from "../base/Asset.ts";

export default class DialogSystem extends System {
    constructor(obj = {}) {
        super();

        let {
            
        } = obj;
        
        this.SetTick(128.);
        this.dialog_listing = [];
    }

    override OnActivate() {
        CSS.Msg("Dialog System Activated!");
    }

    public CreateDialog(opts = {}) {
        let {
            fade_in_duration  = 0.0,  // Seconds
            fade_out_duration = 1.0,  // Seconds
            
        } = opts;
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

        } = opts;
    }

    public AddTextField(msg, opts = {}) {
        this.fields.push(new Text(msg, opts))
    }
        
    public AddClickableTextField(msg, callback, opts = {}) {
        
    }

    public tick() {
        this.fields.forEach(field => field.tick());
    }
}

class DialogField {
    tick() {

    }
}

class Text extends DialogField {
    constructor(template) {
        super();
    }
}

class ClickableText extends DialogField {
    constructor(template) {
        super();
    }
}
