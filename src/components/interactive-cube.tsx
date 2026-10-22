import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PRIMARY = 0x00ff6e
const EASE_MS = 700

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function createGridTexture() {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, size, size)
  ctx.strokeStyle = 'rgba(0, 255, 110, 0.5)'
  ctx.lineWidth = 2
  const step = size / 4
  for (let i = 0; i <= 4; i++) {
    const p = i * step
    ctx.beginPath()
    ctx.moveTo(p, 0)
    ctx.lineTo(p, size)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, p)
    ctx.lineTo(size, p)
    ctx.stroke()
  }
  ctx.strokeStyle = 'rgba(0, 255, 110, 0.95)'
  ctx.lineWidth = 6
  ctx.strokeRect(3, 3, size - 6, size - 6)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

export function InteractiveCube() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    camera.position.set(0, 0, 5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 0.7))
    const key = new THREE.PointLight(PRIMARY, 10, 20)
    key.position.set(2, 2, 3)
    scene.add(key)
    const rim = new THREE.PointLight(0xffffff, 4, 20)
    rim.position.set(-3, -1, -2)
    scene.add(rim)

    const group = new THREE.Group()
    scene.add(group)

    const FRAG = 0.65
    const GAP_ASSEMBLED = 0.68
    const gridTexture = createGridTexture()
    const faceMaterial = new THREE.MeshStandardMaterial({
      map: gridTexture,
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.7,
    })
    const sideMaterial = new THREE.MeshStandardMaterial({
      color: 0x072b16,
      metalness: 0.1,
      roughness: 0.9,
      transparent: true,
      opacity: 0.55,
    })
    // BoxGeometry face order: +x, -x, +y, -y, +z, -z — keep front/top bright, rest fogged for depth
    const materials = [sideMaterial, sideMaterial, faceMaterial, sideMaterial, faceMaterial, sideMaterial]
    const geometry = new THREE.BoxGeometry(FRAG, FRAG, FRAG)
    const edgesGeo = new THREE.EdgesGeometry(geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ color: PRIMARY })

    type Fragment = { mesh: THREE.Mesh; assembled: THREE.Vector3; exploded: THREE.Vector3 }
    const fragments: Fragment[] = []

    for (const x of [-1, 1]) {
      for (const y of [-1, 1]) {
        for (const z of [-1, 1]) {
          const mesh = new THREE.Mesh(geometry, materials)
          mesh.add(new THREE.LineSegments(edgesGeo, edgesMaterial))
          const assembled = new THREE.Vector3((x * GAP_ASSEMBLED) / 2, (y * GAP_ASSEMBLED) / 2, (z * GAP_ASSEMBLED) / 2)
          const exploded = assembled.clone().multiplyScalar(2.3)
          mesh.position.copy(assembled)
          group.add(mesh)
          fragments.push({ mesh, assembled, exploded })
        }
      }
    }

    let exploded = false
    let animStart = 0
    let animFrom: THREE.Vector3[] = fragments.map((f) => f.assembled.clone())

    function toggleExplode() {
      exploded = !exploded
      animFrom = fragments.map((f) => f.mesh.position.clone())
      animStart = performance.now()
    }

    let dragging = false
    let moved = 0
    let lastX = 0
    let lastY = 0
    let velX = 0.002
    let velY = 0.0012

    function onPointerDown(e: PointerEvent) {
      dragging = true
      moved = 0
      lastX = e.clientX
      lastY = e.clientY
      mount?.setPointerCapture(e.pointerId)
    }

    function onPointerMove(e: PointerEvent) {
      if (!dragging) return
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      lastX = e.clientX
      lastY = e.clientY
      moved += Math.abs(dx) + Math.abs(dy)
      velY = dx * 0.005
      velX = dy * 0.005
      group.rotation.y += velY
      group.rotation.x += velX
    }

    function onPointerUp(e: PointerEvent) {
      dragging = false
      mount?.releasePointerCapture(e.pointerId)
      if (moved < 6) toggleExplode()
    }

    mount.addEventListener('pointerdown', onPointerDown)
    mount.addEventListener('pointermove', onPointerMove)
    mount.addEventListener('pointerup', onPointerUp)

    function resize() {
      if (!mount) return
      const { clientWidth, clientHeight } = mount
      if (!clientWidth || !clientHeight) return
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(mount)

    let raf = 0
    function tick() {
      raf = requestAnimationFrame(tick)
      const t = Math.min(1, (performance.now() - animStart) / EASE_MS)
      const e = easeOutCubic(t)
      fragments.forEach((f, i) => {
        const target = exploded ? f.exploded : f.assembled
        f.mesh.position.lerpVectors(animFrom[i], target, e)
        f.mesh.rotation.x = exploded ? e * (0.6 + i * 0.1) : f.mesh.rotation.x * (1 - e * 0.15)
        f.mesh.rotation.y = exploded ? e * (0.4 + i * 0.08) : f.mesh.rotation.y * (1 - e * 0.15)
      })
      if (!dragging) {
        group.rotation.y += 0.0025
      }
      renderer.render(scene, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      mount.removeEventListener('pointerdown', onPointerDown)
      mount.removeEventListener('pointermove', onPointerMove)
      mount.removeEventListener('pointerup', onPointerUp)
      geometry.dispose()
      edgesGeo.dispose()
      edgesMaterial.dispose()
      gridTexture?.dispose()
      faceMaterial.dispose()
      sideMaterial.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="h-full w-full touch-none select-none [&>canvas]:h-full [&>canvas]:w-full"
      role="img"
      aria-label="Cubo 3D interativo: arraste para girar, clique para desmontar"
    />
  )
}
