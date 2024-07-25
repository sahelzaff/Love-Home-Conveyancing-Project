import { cn } from "../../lib/utils";
import React, { useCallback, useEffect, useRef } from "react";
import { useSpring } from "react-spring";
import createGlobe from "cobe";

const GLOBE_CONFIG = {
  devicePixelRatio: 2,
  width: 500,
  height: 500,
  phi: 0,
  theta: 0.3,
  dark: 0, 
  diffuse: 0.3, 
  mapSamples: 8000,
  mapBrightness: 3, 
  baseColor: [240 / 255, 83 / 255, 45 / 255], 
  markerColor: [1, 1, 1], 
  glowColor: [1, 1, 1], 
  markers: [],
};

export default function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 15;  
  let width = 0;  
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

 
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  
  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    canvasRef.current.style.cursor = value ? "grabbing" : "grab";
  };

  
  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 200 });
    }
  };

  
  const onRender = useCallback(
    (state) => {
      if (!pointerInteracting.current) phi += 0.002;  
      state.phi = phi + r.get();
      state.width = width * 2;
      state.height = width * 2;
  
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => globe.render());
      } else {
        
        setTimeout(() => globe.render(), 0);
      }
    },
    [pointerInteracting, phi, r]
  );
  
 
  const onResize = () => {
    if (canvasRef.current) {
      width = Math.min(canvasRef.current.offsetWidth, 800); 
    }
  };
  

  
  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    
    setTimeout(() => (canvasRef.current.style.opacity = "1"), 500);

    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [config, onRender]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
