import Vector3 from "./Vector3.ts";

export default class QAngle {
    static Zero = { pitch: 0, yaw: 0, roll: 0 };

    static Create(pitch = 0, yaw = 0, roll = 0) {
        return { pitch, yaw, roll };
    }

    static Clone(a) {
        return { pitch: a.pitch, yaw: a.yaw, roll: a.roll };
    }

    static add(a, b) {
        return { pitch: a.pitch + b.pitch, yaw: a.yaw + b.yaw, roll: a.roll + b.roll };
    }

    static sub(a, b) {
        return { pitch: a.pitch - b.pitch, yaw: a.yaw - b.yaw, roll: a.roll - b.roll };
    }

    static scale(a, s) {
        return { pitch: a.pitch * s, yaw: a.yaw * s, roll: a.roll * s };
    }

    static normalize(a) {
        return {
            pitch: this._normalizeAngle(a.pitch),
            yaw: this._normalizeAngle(a.yaw),
            roll: this._normalizeAngle(a.roll)
        };
    }

    static equals(a, b) {
        return a.pitch === b.pitch && a.yaw === b.yaw && a.roll === b.roll;
    }

    static _normalizeAngle(angle) {
        let a = angle % 360;
        if (a >= 180) a -= 360;
        if (a < -180) a += 360;
        return a;
    }

    static Deg2Rad(deg) {
        return deg * Math.PI / 180.;
    }

    static NormalVector(angle): Vector3 {
        let pitch = QAngle.Deg2Rad(angle.pitch);
        let yaw = QAngle.Deg2Rad(angle.yaw);

        let x = Math.cos(yaw) * Math.cos(pitch);
        let y = Math.sin(yaw) * Math.cos(pitch);
        let z = -Math.sin(pitch);
        
        return new Vector3(x, y, z);
    }

}

