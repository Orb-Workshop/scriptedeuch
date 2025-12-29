/*
  Because of how instancing works within the point_script, we need a
  root module that becomes the only point of entry for the entire
  library. This prevents strange bundling issues.
 */
export {
    Instance as CSS,
    CSPlayerPawn,
    CSPlayerController,
} from "cs_script/point_script";
