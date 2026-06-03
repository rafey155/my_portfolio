import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { profileData } from "../data/portfolioData";

const Hero = () => {
  const canvasRef = useRef(null);

  const handleExploreScroll = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector("#projects");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    // Dimensions
    const container = canvasRef.current.parentElement;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene & Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // 15 Rotating wireframe shapes in neon schemes
    const shapes = [];
    const colors = ["#22d3ee", "#a855f7", "#f472b6"];
    const geometries = [
      new THREE.IcosahedronGeometry(0.7, 1),
      new THREE.BoxGeometry(0.7, 0.7, 0.7),
      new THREE.TorusKnotGeometry(0.4, 0.15, 64, 8)
    ];

    for (let i = 0; i < 15; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshPhongMaterial({
        color: colors[i % colors.length],
        wireframe: true,
        transparent: true,
        opacity: 0.55,
        shininess: 120,
      });
      const mesh = new THREE.Mesh(geo, mat);

      // Random placement
      mesh.position.x = (Math.random() - 0.5) * 14;
      mesh.position.y = (Math.random() - 0.5) * 8;
      mesh.position.z = (Math.random() - 0.5) * 6 - 3;

      // Spin velocities
      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        rotSpeedZ: (Math.random() - 0.5) * 0.008,
      };

      scene.add(mesh);
      shapes.push(mesh);
    }

    // Particle System (800 white star points)
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 800;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 25;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xffffff,
      transparent: true,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Tracking Parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!canvasRef.current) return;
      width = container.clientWidth;
      height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Render Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate shapes
      shapes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotSpeedX;
        mesh.rotation.y += mesh.userData.rotSpeedY;
        mesh.rotation.z += mesh.userData.rotSpeedZ;
      });

      // Slowly spin starry backdrop
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;

      // Smooth camera parallax
      const targetX = mouseX * 5;
      const targetY = -mouseY * 4;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Cleanups
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      shapes.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-36 z-10"
    >
      {/* 3D WebGL Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 radial-grid pointer-events-none z-1" />

      {/* Floating Drifting Glow Blobs */}
      <div className="absolute -left-[10%] top-[20%] w-[45vw] h-[45vw] rounded-full ambient-blob-cyan pointer-events-none z-1" />
      <div className="absolute -right-[10%] bottom-[15%] w-[50vw] h-[50vw] rounded-full ambient-blob-purple pointer-events-none z-1" />

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center flex-1">
        
        {/* Available Pulse Badge */}
        <div className="reveal inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-[#22d3ee]/20 bg-[#22d3ee]/5 text-[#22d3ee] mb-8 text-xs font-bold tracking-widest uppercase hover:bg-[#22d3ee]/10 transition-cyber shadow-[0_0_15px_rgba(34,211,238,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Actively Seeking Full-Stack Roles
        </div>

        {/* 8xl Editorial Typography Header */}
        <h1 className="reveal reveal-delay-100 text-6xl md:text-8xl font-display font-black tracking-tight text-white leading-[0.9] mb-8 max-w-5xl select-none">
          Transforming Ideas Into <br />
          <span className="text-cyber-gradient filter drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            Powerful Digital Solutions
          </span>
        </h1>

        {/* Satoshi Description Text */}
        <p className="reveal reveal-delay-200 text-[#9ca3af] text-lg md:text-xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed font-sans">
          Building modern, responsive, and high-performance web applications with React.js, Node.js, JavaScript, and modern web technologies. Specializing in REST APIs, database integration, and pixel-perfect responsive design.
        </p>

        {/* CTA Buttons */}
        <div className="reveal reveal-delay-300 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          {/* Solid White Pill CTA */}
          <a
            href="#projects"
            onClick={handleExploreScroll}
            className="group bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-black text-base transition-cyber hover:scale-105 active:scale-95 shadow-[0_4px_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2.5 w-full sm:w-auto cursor-pointer"
          >
            Explore Work
            <FiArrowRight className="group-hover:translate-x-1.5 transition-cyber text-lg" />
          </a>

          {/* Bordered Dark CTA */}
          <a
            href={profileData.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-black text-base transition-cyber hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 w-full sm:w-auto cursor-pointer backdrop-blur-sm"
          >
            Download CV
            <FiDownload className="group-hover:-translate-y-1 transition-cyber text-lg" />
          </a>
        </div>
      </div>

      {/* Drifting Scroll Indicator */}
      <div className="reveal reveal-delay-400 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3.5 z-10 pointer-events-none select-none">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold font-sans">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#22d3ee] to-transparent animate-[scroll-drift_2s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Injected scroll drift animation keyframe */}
      <style>{`
        @keyframes scroll-drift {
          0% { transform: translateY(-100%); }
          80% { transform: translateY(200%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
