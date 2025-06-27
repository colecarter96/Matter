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
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <OrbitControls />
          <LogoModel />
        </Suspense>
      </Canvas>
    </div>
  )
}