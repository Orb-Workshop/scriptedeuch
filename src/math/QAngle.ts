import { QAngle as QAngleType } from "cs_script/point_script";
import Vector3 from "./Vector3.ts";

export default class QAngle {
    public pitch: number;
    public yaw: number;
    public roll: number;
    
    static Zero = new QAngle(0, 0, 0);

    static Deg2Rad(deg: number): number {
        return deg * Math.PI / 180.;
    }

    constructor(pitch = 0, yaw = 0, roll = 0) {
        this.pitch = pitch;
        this.yaw = yaw;
        this.roll = roll;
    }
    
    static Create(pitch = 0, yaw = 0, roll = 0): QAngle {
        return new QAngle(pitch, yaw, roll);
    }

    static From({pitch, yaw, roll}: QAngleType): QAngle {
        return new QAngle(pitch, yaw, roll);
    }
    
    public clone(): QAngle {
        return new QAngle(this.pitch, this.yaw, this.roll);
    }

    public add(a: QAngle): QAngle {
        return new QAngle(this.pitch + a.pitch,
                          this.yaw   + a.yaw,
                          this.roll  + a.roll);
    }

    public sub(a: QAngle): QAngle {
        return new QAngle(this.pitch - a.pitch,
                          this.yaw   - a.yaw,
                          this.roll  - a.roll);
    }

    public scale(s: number): QAngle {
        return new QAngle(this.pitch * s,
                          this.yaw   * s,
                          this.roll  * s);
    }

    public normalize(): QAngle {
        return new QAngle(
            this._normalizeAngle(this.pitch),
            this._normalizeAngle(this.yaw),
            this._normalizeAngle(this.roll));
    }

    public equals(a: QAngle): boolean {
        return this.pitch === a.pitch && this.yaw === a.yaw && this.roll === a.roll;
    }

    private _normalizeAngle(angle: number): number {
        let a = angle % 360;
        if (a >= 180) a -= 360;
        if (a < -180) a += 360;
        return a;
    }
    
    public direction(): Vector3 {
        const pitch = QAngle.Deg2Rad(this.pitch);
        const yaw = QAngle.Deg2Rad(this.yaw);

        let x = Math.cos(yaw) * Math.cos(pitch);
        let y = Math.sin(yaw) * Math.cos(pitch);
        let z = -Math.sin(pitch);
        
        return new Vector3(x, y, z);
    }
}

