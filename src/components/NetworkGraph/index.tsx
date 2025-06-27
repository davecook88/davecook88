import { useEffect, useRef } from "preact/hooks";
import { Network, NetworkConfig } from "./Network";

interface NetworkGraphProps {
  nodeCount?: number;
  maxConnections?: number;
  connectionDistance?: number;
  nodeSpeed?: number;
  nodeSize?: number;
  connectionOpacity?: number;
  nodeOpacity?: number;
  mouseRadius?: number;
  energyParticleCount?: number;
  growthRate?: number;
  maxNodes?: number;
  colors?: {
    nodes: string;
    connections: string;
    highlight: string;
    energy: string;
    clusters: string[];
  };
  className?: string;
  style?: React.CSSProperties;
}

const NetworkGraph = ({
  nodeCount = 50,
  maxConnections = 4,
  connectionDistance = 120,
  nodeSpeed = 0.3,
  nodeSize = 3,
  connectionOpacity = 0.7,
  nodeOpacity = 0.9,
  mouseRadius = 120,
  energyParticleCount = 20,
  growthRate = 0.001,
  maxNodes = 200,
  colors = {
    nodes: "#667eea",
    connections: "#764ba2",
    highlight: "#ffffff",
    energy: "#00ffff",
    clusters: [
      "#667eea",
      "#f093fb",
      "#4facfe",
      "#43e97b",
      "#fa709a",
      "#ffecd2",
    ],
  },
  className = "",
  style = {},
}: NetworkGraphProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const networkRef = useRef<Network | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const config: NetworkConfig = {
      nodeCount,
      maxConnections,
      connectionDistance,
      nodeSpeed,
      nodeSize,
      connectionOpacity,
      nodeOpacity,
      mouseRadius,
      energyParticleCount,
      growthRate,
      maxNodes,
      colors,
    };

    networkRef.current = new Network(canvas, config);

    return () => {
      if (networkRef.current) {
        networkRef.current.destroy();
      }
    };
  }, [
    nodeCount,
    maxConnections,
    connectionDistance,
    nodeSpeed,
    nodeSize,
    connectionOpacity,
    nodeOpacity,
    mouseRadius,
    energyParticleCount,
    growthRate,
    maxNodes,
    colors,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: "fixed",
        width: "100%",
        height: "100%",
        ...style,
      }}
    />
  );
};

export default NetworkGraph;
