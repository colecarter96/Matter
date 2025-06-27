'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

function LogoModel() {
  const { scene } = useGLTF('/matterrndLogo3.glb')
  return <primitive object={scene} />
}

export default function BlenderPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '18px'
          }}>
            Loading 3D model...
          </div>
        }>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls />
          <LogoModel />
        </Suspense>
      </Canvas>
    </div>
  )
}