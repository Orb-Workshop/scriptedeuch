import {
    Instance as CSS,
    CSPlayerPawn,
    CSDamageFlags,
    Entity,
} from "cs_script/point_script";
import * as Base from "../base";
import * as SEMath from "../math";
import * as Event from "../event";


const JUMP_VELOCITY = 100;


/** Actor Component to mount a player to a prop_dynamic, or similar moveable entity. */
export default class PlayerMount extends Base.Actor {
    static Tag: string = "PlayerMountTag";
    public player_pawn: CSPlayerPawn;
    public mount_entity: Entity;
    public mount_offset: SEMath.Vector3;
    public listener = new Event.Listener(PlayerMount.Tag);
    public global_listener = Event.GetGlobalListener();
    constructor(player_pawn, { mount_entity, mount_offset }) {
        super();
        this.player_pawn = player_pawn;
        this.mount_entity = mount_entity;
        this.mount_offset = mount_offset ?? SEMath.Vector3.Zero;
        this.InitEventListeners();
        this.MountPlayer();
    }

    public InitEventListeners() {
        // OnPlayerJump
        this.global_listener.On("PlayerJump", ({ player }) => {
            if (this.player_pawn === player) this.HandleJump();
        });

        // UnMountPlayer
        this.listener.On("UnMountPlayer", ({ player }) => {
            if (this.player_pawn === player) this.UnMountPlayer();
        });
    }
    
    public static IsMounted(player: CSPlayerPawn): boolean {
        return player?.mounted;
    }

    private UpdatePawnPosition(): void {
        if (!PlayerMount.IsMounted(this.player_pawn)) return;
        // Move player into position
        const mount_position = SEMath.Vector3.From(this.mount_entity.GetAbsOrigin())
            .add(this.mount_offset);
        this.player_pawn.Teleport({ position: mount_position });
    }
    
    private MountPlayer(): void {
        this.UpdatePawnPosition();
        this.player_pawn.SetParent(this.mount_entity);
        this.player_pawn.mounted = true;
    }

    public UnMountPlayer(): void {
        this.player_pawn.SetParent(null);
        this.player_pawn.mounted = false;
        this.Remove();        
    }
    
    private HandleJump(): void {
        this.UnMountPlayer();
        let velocity = SEMath.Vector3.From(this.player_pawn.GetAbsVelocity());
        velocity.z += JUMP_VELOCITY;
        this.player_pawn.Teleport({ velocity });
        
    }
    
    override Dispose(): void {
        this.global_listener.Remove();
        this.listener.Remove();
    }

    override Think(): void {
        this.UpdatePawnPosition();
    }
}

