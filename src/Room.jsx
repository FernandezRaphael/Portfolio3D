import React from 'react';
import { Text, Html, PresentationControls, Float, useGLTF, useTexture, OrbitControls } from '@react-three/drei';

export default function Room() {
  const { nodes } = useGLTF('./room3d/room.glb');
  const bakedTexture = useTexture('./room3d/baked.jpg');
  bakedTexture.flipY = false;

  return (
    <>
      <color args={['#191919']} attach="background" />

      {/* <OrbitControls makeDefault /> */}

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <primitive object={nodes.baked} rotation-y={-1} position={[-1, -1, 3]}>
            <meshBasicMaterial map={bakedTexture} />
            <Html
              transform
              wrapperClass='htmlScreen'
              distanceFactor={1.17}
              position={[-3.67, 4.1, 1.58]}
              rotation-y={1.58}
            >
              <iframe src="https://fernandezraphael.netlify.app/" />
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[3.9, 0.35, 2.5]}
            rotation-y={-1}
            maxWidth={2}
            textAlign="center"
          >
            FERNANDEZ RAPHAEL
          </Text>
        </Float>
      </PresentationControls>
    </>
  );
}