import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { YStack, Text } from '@my/ui'

interface PlanetProps {
  name: string
  textureURL?: string
}

const Planet: React.FC<PlanetProps> = ({ name, textureURL }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 2

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(0, 1, 1)
    scene.add(directionalLight)

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(Math.random(), Math.random(), Math.random()),
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    const cloudGeometry = new THREE.SphereGeometry(1.01, 32, 32)
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/cloud-texture.jpeg'),
      transparent: true,
      opacity: 0.8,
    })

    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial)
    scene.add(cloudMesh)

    const cloudRotationSpeedY = (Math.random() - 0.5) * 0.02
    const cloudRotationSpeedX = (Math.random() - 0.5) * 0.002

    const animate = () => {
      requestAnimationFrame(animate)
      sphere.rotation.y += 0.01
      cloudMesh.rotation.y += cloudRotationSpeedY
      cloudMesh.rotation.x += cloudRotationSpeedX

      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return (
    <YStack ai="center" jc="center" pos="relative" style={{ height: '100%' }}>
      <Text size={20} weight="bold" style={{ position: 'absolute', zIndex: 1 }}>
        {name}
      </Text>
      <canvas ref={canvasRef} style={{ width: '100%', height: 'auto', position: 'absolute' }} />
    </YStack>
  )
}

export default Planet
