import { VRCanvas } from '@react-three/xr';
import Spline from '@splinetool/react-spline';

export default function WebXR() {
  return (
    <VRCanvas>
      <Spline scene="https://draft.spline.design/sUiv1laiuUNmWMzu/scene.spline" />
    </VRCanvas>
  );
}
