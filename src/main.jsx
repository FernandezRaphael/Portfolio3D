import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Room from './Room.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
      className="r3f"
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-3, 1, 25]
      }}
    >
      <Room />
    </Canvas>
  </React.StrictMode>,
)
