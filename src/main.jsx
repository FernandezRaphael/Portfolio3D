import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Room from './Room.jsx'
import './index.css'
import Camera from './Camera.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Camera />
  </React.StrictMode>,
)
