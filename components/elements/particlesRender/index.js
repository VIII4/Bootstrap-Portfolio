import ParticlesJS from "../../../utilities/particles/particles";

export default function ParticlesRender({ _params, canvasId }) {
  ParticlesJS(canvasId, _params);

  return null;
}
