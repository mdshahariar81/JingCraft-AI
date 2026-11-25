
import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { Layers3, Sparkles, Box } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

// ==========================================
// 3D CERAMIC MODEL
// ==========================================

function CeramicModel() {
  const { scene } = useGLTF('/models/museum/antique-ceramic-vase-01.glb')

  const model = useMemo(() => {
    const clonedScene = scene.clone()

    // Calculate model dimensions and center
    const box = new THREE.Box3().setFromObject(clonedScene)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())

    // Reduce model size for a balanced composition
    const maxDimension = Math.max(size.x, size.y, size.z)
    const scale = 2.0 / maxDimension

    clonedScene.scale.setScalar(scale)

    // Keep the model centered
    clonedScene.position.set(
      -center.x * scale,
      -center.y * scale,
      -center.z * scale,
    )

    return clonedScene
  }, [scene])

  return <primitive object={model} />
}

// ==========================================
// 3D VIEWER
// ==========================================

function ModelViewer() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[420px] sm:h-[420px] lg:h-[540px] lg:max-w-none">

      {/* Animated Circular Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="h-[220px] w-[220px] rounded-full border border-[#D9A441]/30 sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute h-[190px] w-[190px] rounded-full border border-[#D9A441]/20 sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]"
        />

        <div className="absolute h-[160px] w-[160px] rounded-full border border-[#D9A441]/10 sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]" />

      </div>

      {/* Centered 3D Vase */}
      <div className="absolute inset-0 z-10">

        <Canvas
          camera={{ position: [0, 0, 6], fov: 35 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >

          <ambientLight intensity={1.5} />

          <directionalLight
            position={[4, 5, 5]}
            intensity={2.5}
          />

          <directionalLight
            position={[-4, 2, -3]}
            intensity={1.5}
          />

          <Suspense fallback={null}>
            <Environment preset="studio" />
            <CeramicModel />
          </Suspense>

          <OrbitControls
            target={[0, 0, 0]}
            enablePan={false}
            enableZoom
            minDistance={4}
            maxDistance={8}
            minPolarAngle={0.5}
            maxPolarAngle={Math.PI - 0.5}
            autoRotate
            autoRotateSpeed={0.6}
            enableDamping
            dampingFactor={0.05}
          />

        </Canvas>

      </div>

      {/* 360 Degree Label */}
      <div className="pointer-events-none absolute bottom-1 left-0 right-0 z-20 text-center text-[8px] tracking-[0.2em] text-white/40 sm:bottom-5 sm:text-[9px] lg:bottom-6">
        360° VISUAL EXPLORATION
      </div>

    </div>
  )
}

// ==========================================
// MUSEUM HERO
// ==========================================

export default function MuseumHero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#0B1F33] text-white">

      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(45,88,120,0.35),transparent_55%)]" />

      {/* Background Divider */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_49.9%,rgba(255,255,255,0.3)_50%,transparent_50.1%)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16">

        {/* Main Layout */}
        <div className="grid items-center gap-3 lg:grid-cols-2 lg:gap-10">

          {/* 3D MODEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-1 relative lg:order-2"
          >
            <ModelViewer />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 relative z-20 mx-auto w-full max-w-[680px] text-center lg:order-1 lg:text-left"
          >

            {/* Eyebrow */}
            <div className="mb-5 flex items-center justify-center sm:mb-8 lg:justify-start">

              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#D9A441] sm:text-xs sm:tracking-[0.24em]">
                THE DIGITAL CERAMIC MUSEUM
              </span>

            </div>

            {/* Heading */}
            <h1 className="font-serif text-3xl leading-[1.15] tracking-tight text-[#F5F2E9] sm:text-5xl md:text-6xl lg:text-[68px]">

              Explore the World of

              <br />

              <span className="text-[#F5F2E9]">
                Chinese Ceramics
              </span>

            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-[520px] text-sm leading-7 text-[#B7C7D7] sm:mt-8 sm:text-base sm:leading-8 lg:mx-0">

              A digital museum that brings China's ceramic heritage to life
              through interactive exploration, 3D visualization, and AI creativity.

            </p>

            {/* Buttons */}
            <div className="mt-6 flex w-full flex-row justify-center gap-3 sm:mt-8 sm:gap-4 lg:justify-start">

              <Link
                to="/heritage"
                className="flex flex-1 items-center justify-center rounded-lg bg-[#D9A441] px-3 py-3.5 text-center text-xs font-semibold text-white transition-all duration-300 hover:bg-[#E7B85D] sm:flex-none sm:px-6 sm:py-4 sm:text-sm"
              >
                Enter the Museum
              </Link>

              <Link
                to="/design-studio"
                className="flex flex-1 items-center justify-center rounded-lg border border-[#D9A441]/60 px-3 py-3.5 text-center text-xs font-medium text-[#F5F2E9] transition-all duration-300 hover:bg-[#D9A441]/10 sm:flex-none sm:px-6 sm:py-4 sm:text-sm"
              >
                AI Design Studio
              </Link>

            </div>

            {/* Feature Strip */}
            <div className="mt-8 border-t border-white/10 pt-5 sm:mt-12 sm:pt-7">

              <div className="grid grid-cols-3 gap-2 text-left sm:gap-4">

                {/* Feature 1 */}
                <div className="flex items-start justify-center gap-2 sm:gap-3 lg:justify-start">

                  <Box
                    className="mt-1 shrink-0 text-[#D9A441]"
                    size={18}
                  />

                  <div>
                    <p className="text-[10px] font-semibold text-white sm:text-xs">
                      3D Exploration
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-white/50 sm:text-[10px] sm:leading-5">
                      Interact with artifacts
                    </p>
                  </div>

                </div>

                {/* Feature 2 */}
                <div className="flex items-start justify-center gap-2 sm:gap-3 lg:justify-start">

                  <Layers3
                    className="mt-1 shrink-0 text-[#D9A441]"
                    size={18}
                  />

                  <div>
                    <p className="text-[10px] font-semibold text-white sm:text-xs">
                      Cultural Stories
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-white/50 sm:text-[10px] sm:leading-5">
                      History & meanings
                    </p>
                  </div>

                </div>

                {/* Feature 3 */}
                <div className="flex items-start justify-center gap-2 sm:gap-3 lg:justify-start">

                  <Sparkles
                    className="mt-1 shrink-0 text-[#D9A441]"
                    size={18}
                  />

                  <div>
                    <p className="text-[10px] font-semibold text-white sm:text-xs">
                      AI Design
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-white/50 sm:text-[10px] sm:leading-5">
                      Create with tradition
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 hidden flex-col items-center gap-2 text-white/50 lg:flex">

          <div className="flex h-10 w-6 items-center justify-center rounded-full border border-white/30">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
          </div>

          <span className="text-[10px] tracking-widest">
            SCROLL TO EXPLORE
          </span>

        </div>

      </div>

    </section>
  )
}

useGLTF.preload('/models/museum/antique-ceramic-vase-01.glb')
