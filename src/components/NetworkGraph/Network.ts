export interface NetworkConfig {
  nodeCount: number;
  maxConnections: number;
  connectionDistance: number;
  nodeSpeed: number;
  nodeSize: number;
  connectionOpacity: number;
  nodeOpacity: number;
  mouseRadius: number;
  energyParticleCount: number;
  growthRate: number;
  maxNodes: number;
  colors: {
    nodes: string;
    connections: string;
    highlight: string;
    energy: string;
    clusters: string[];
  };
}

type NodeType = "hub" | "processor" | "sensor" | "memory";

export interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  connections: Connection[];
  type: NodeType;
  energy: number;
  age: number;
  cluster: number;
  pulsePhase: number;
  growthCooldown: number;
}

export interface Connection {
  node: Node;
  distance: number;
  strength: number;
  energyFlow: number;
}

export interface EnergyParticle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  connection: Connection;
  speed: number;
  size: number;
}

export class Network {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private config: NetworkConfig;
  private nodes: Node[] = [];
  private energyParticles: EnergyParticle[] = [];
  private mouse = { x: 0, y: 0 };
  private isRunning = true;
  private time = 0;
  private handleResize: () => void;
  private handleMouseMove: (e: MouseEvent) => void;

  constructor(canvas: HTMLCanvasElement, config: NetworkConfig) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.config = config;

    this.init();
  }

  private init() {
    this.resize();
    this.createNodes();
    this.bindEvents();
    this.animate();
  }

  private resize() {
    const { width, height } = this.canvas.getBoundingClientRect();
    this.canvas.width = width;
    this.canvas.height = height;
  }

  private createNodes() {
    this.nodes = [];
    const nodeTypes: Node["type"][] = ["hub", "processor", "sensor", "memory"];

    for (let i = 0; i < this.config.nodeCount; i++) {
      const nodeType = nodeTypes[Math.floor(Math.random() * nodeTypes.length)];
      const cluster = Math.floor(
        Math.random() * this.config.colors.clusters.length
      );

      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.config.nodeSpeed,
        vy: (Math.random() - 0.5) * this.config.nodeSpeed,
        size: this.config.nodeSize + Math.random() * 2,
        connections: [],
        type: nodeType,
        energy: Math.random() * 100,
        age: 0,
        cluster: cluster,
        pulsePhase: Math.random() * Math.PI * 2,
        growthCooldown: 0,
      });
    }
  }

  private bindEvents() {
    this.handleResize = () => {
      this.resize();
      this.createNodes();
    };

    this.handleMouseMove = (e: MouseEvent) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("resize", this.handleResize);
    this.canvas.addEventListener("mousemove", this.handleMouseMove);
  }

  private updateNodes() {
    this.time += 0.016; // Approximately 60fps

    this.nodes.forEach((node) => {
      // Update age and energy
      node.age += 0.016;
      node.pulsePhase += 0.05;
      node.growthCooldown = Math.max(0, node.growthCooldown - 0.016);

      // Gravitational attraction to cluster center
      const clusterCenter = this.getClusterCenter(node.cluster);
      const distanceToCenter = Math.sqrt(
        Math.pow(node.x - clusterCenter.x, 2) +
          Math.pow(node.y - clusterCenter.y, 2)
      );

      if (distanceToCenter > 100) {
        const force = 0.0001;
        node.vx += (clusterCenter.x - node.x) * force;
        node.vy += (clusterCenter.y - node.y) * force;
      }

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges with energy absorption
      if (node.x < 0 || node.x > this.canvas.width) {
        node.vx *= -0.8; // Energy loss
        node.x = Math.max(0, Math.min(this.canvas.width, node.x));
        node.energy = Math.max(0, node.energy - 5);
      }
      if (node.y < 0 || node.y > this.canvas.height) {
        node.vy *= -0.8; // Energy loss
        node.y = Math.max(0, Math.min(this.canvas.height, node.y));
        node.energy = Math.max(0, node.energy - 5);
      }

      // Organic growth - spawn new nodes occasionally
      if (
        node.type === "hub" &&
        node.energy > 80 &&
        node.growthCooldown <= 0 &&
        this.nodes.length < this.config.maxNodes &&
        Math.random() < this.config.growthRate
      ) {
        this.spawnNewNode(node);
      }

      // Reset connections
      node.connections = [];
    });
  }

  private getClusterCenter(cluster: number): { x: number; y: number } {
    const clusterNodes = this.nodes.filter((n) => n.cluster === cluster);
    if (clusterNodes.length === 0) {
      return { x: this.canvas.width / 2, y: this.canvas.height / 2 };
    }

    const centerX =
      clusterNodes.reduce((sum, node) => sum + node.x, 0) / clusterNodes.length;
    const centerY =
      clusterNodes.reduce((sum, node) => sum + node.y, 0) / clusterNodes.length;

    return { x: centerX, y: centerY };
  }

  private spawnNewNode(parentNode: Node) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 30;
    const nodeTypes: Node["type"][] = ["processor", "sensor", "memory"];

    const newNode: Node = {
      x: parentNode.x + Math.cos(angle) * distance,
      y: parentNode.y + Math.sin(angle) * distance,
      vx: (Math.random() - 0.5) * this.config.nodeSpeed * 0.5,
      vy: (Math.random() - 0.5) * this.config.nodeSpeed * 0.5,
      size: this.config.nodeSize * 0.8,
      connections: [],
      type: nodeTypes[Math.floor(Math.random() * nodeTypes.length)],
      energy: 30,
      age: 0,
      cluster: parentNode.cluster,
      pulsePhase: Math.random() * Math.PI * 2,
      growthCooldown: 0,
    };

    // Keep within bounds
    newNode.x = Math.max(20, Math.min(this.canvas.width - 20, newNode.x));
    newNode.y = Math.max(20, Math.min(this.canvas.height - 20, newNode.y));

    this.nodes.push(newNode);
    parentNode.energy -= 30;
    parentNode.growthCooldown = 5; // 5 second cooldown
  }

  private findConnections() {
    for (let i = 0; i < this.nodes.length; i++) {
      const nodeA = this.nodes[i];

      for (let j = i + 1; j < this.nodes.length; j++) {
        const nodeB = this.nodes[j];
        const distance = Math.sqrt(
          Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
        );

        if (
          distance < this.config.connectionDistance &&
          nodeA.connections.length < this.config.maxConnections &&
          nodeB.connections.length < this.config.maxConnections
        ) {
          const strength = 1 - distance / this.config.connectionDistance;
          const energyFlow = Math.random() * strength;

          nodeA.connections.push({
            node: nodeB,
            distance: distance,
            strength: strength,
            energyFlow: energyFlow,
          });
          nodeB.connections.push({
            node: nodeA,
            distance: distance,
            strength: strength,
            energyFlow: energyFlow,
          });
        }
      }
    }
  }

  private updateEnergyParticles() {
    // Create new energy particles
    if (this.energyParticles.length < this.config.energyParticleCount) {
      this.nodes.forEach((node) => {
        if (node.connections.length > 0 && Math.random() < 0.02) {
          const connection =
            node.connections[
              Math.floor(Math.random() * node.connections.length)
            ];
          this.energyParticles.push({
            x: node.x,
            y: node.y,
            targetX: connection.node.x,
            targetY: connection.node.y,
            progress: 0,
            connection: connection,
            speed: 0.02 + Math.random() * 0.03,
            size: 1 + Math.random() * 2,
          });
        }
      });
    }

    // Update existing particles
    this.energyParticles = this.energyParticles.filter((particle) => {
      particle.progress += particle.speed;

      if (particle.progress >= 1) {
        // Particle reached destination, transfer energy
        particle.connection.node.energy = Math.min(
          100,
          particle.connection.node.energy + 2
        );
        return false;
      }

      // Update particle position
      particle.x =
        particle.x + (particle.targetX - particle.x) * particle.speed;
      particle.y =
        particle.y + (particle.targetY - particle.y) * particle.speed;

      return true;
    });
  }

  private drawConnections() {
    this.nodes.forEach((node) => {
      node.connections.forEach((connection) => {
        const opacity = this.config.connectionOpacity * connection.strength;

        // Neural synapse effect - pulsing based on energy flow
        const pulse =
          Math.sin(this.time * 2 + connection.energyFlow * 10) * 0.3 + 0.7;
        const lineWidth = 1 + connection.strength * 2 * pulse;

        // Check if mouse is near this connection
        const mouseDistance = Math.min(
          Math.sqrt(
            Math.pow(this.mouse.x - node.x, 2) +
              Math.pow(this.mouse.y - node.y, 2)
          ),
          Math.sqrt(
            Math.pow(this.mouse.x - connection.node.x, 2) +
              Math.pow(this.mouse.y - connection.node.y, 2)
          )
        );

        if (mouseDistance < this.config.mouseRadius) {
          this.ctx.strokeStyle = this.config.colors.highlight;
          this.ctx.globalAlpha = opacity * 1.5;
          this.ctx.lineWidth = lineWidth * 1.5;
        } else {
          // Use cluster colors for connections
          const clusterColor =
            this.config.colors.clusters[node.cluster] ||
            this.config.colors.connections;
          this.ctx.strokeStyle = clusterColor;
          this.ctx.globalAlpha = opacity * pulse;
          this.ctx.lineWidth = lineWidth;
        }

        // Draw connection with gradient effect
        const gradient = this.ctx.createLinearGradient(
          node.x,
          node.y,
          connection.node.x,
          connection.node.y
        );
        gradient.addColorStop(0, this.ctx.strokeStyle);
        gradient.addColorStop(0.5, this.config.colors.energy);
        gradient.addColorStop(1, this.ctx.strokeStyle);

        this.ctx.strokeStyle = gradient;
        this.ctx.beginPath();
        this.ctx.moveTo(node.x, node.y);
        this.ctx.lineTo(connection.node.x, connection.node.y);
        this.ctx.stroke();
      });
    });

    this.ctx.globalAlpha = 1;
    this.ctx.lineWidth = 1;
  }

  private drawNodes() {
    this.nodes.forEach((node) => {
      const mouseDistance = Math.sqrt(
        Math.pow(this.mouse.x - node.x, 2) + Math.pow(this.mouse.y - node.y, 2)
      );

      let size = node.size;
      let color =
        this.config.colors.clusters[node.cluster] || this.config.colors.nodes;
      let opacity = this.config.nodeOpacity;

      // Mouse interaction
      if (mouseDistance < this.config.mouseRadius) {
        size *= 1.5;
        color = this.config.colors.highlight;
        opacity = 1;
      }

      // Node type specific effects
      const pulse = Math.sin(node.pulsePhase + this.time * 3) * 0.2 + 0.8;
      const energyIntensity = node.energy / 100;

      switch (node.type) {
        case "hub":
          size *= 1.4;
          // Draw outer ring for hubs
          this.ctx.strokeStyle = color;
          this.ctx.globalAlpha = opacity * 0.5;
          this.ctx.lineWidth = 2;
          this.ctx.beginPath();
          this.ctx.arc(node.x, node.y, size * 1.5 * pulse, 0, Math.PI * 2);
          this.ctx.stroke();
          break;

        case "processor":
          // Square shape for processors
          this.ctx.fillStyle = color;
          this.ctx.globalAlpha = opacity * energyIntensity;
          const halfSize = size * pulse;
          this.ctx.fillRect(
            node.x - halfSize,
            node.y - halfSize,
            halfSize * 2,
            halfSize * 2
          );

          // Inner glow
          const gradient = this.ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            size
          );
          gradient.addColorStop(0, this.config.colors.energy);
          gradient.addColorStop(1, "transparent");
          this.ctx.fillStyle = gradient;
          this.ctx.globalAlpha = opacity * 0.3;
          this.ctx.beginPath();
          this.ctx.arc(node.x, node.y, size * 2, 0, Math.PI * 2);
          this.ctx.fill();
          return;

        case "sensor":
          // Triangle for sensors
          this.ctx.fillStyle = color;
          this.ctx.globalAlpha = opacity * energyIntensity;
          this.ctx.beginPath();
          this.ctx.moveTo(node.x, node.y - size * pulse);
          this.ctx.lineTo(
            node.x - size * pulse * 0.866,
            node.y + size * pulse * 0.5
          );
          this.ctx.lineTo(
            node.x + size * pulse * 0.866,
            node.y + size * pulse * 0.5
          );
          this.ctx.closePath();
          this.ctx.fill();
          return;

        case "memory":
          // Hexagon for memory
          this.ctx.fillStyle = color;
          this.ctx.globalAlpha = opacity * energyIntensity;
          this.ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = node.x + Math.cos(angle) * size * pulse;
            const y = node.y + Math.sin(angle) * size * pulse;
            if (i === 0) this.ctx.moveTo(x, y);
            else this.ctx.lineTo(x, y);
          }
          this.ctx.closePath();
          this.ctx.fill();
          return;
      }

      // Default circular node with energy-based pulsing
      this.ctx.fillStyle = color;
      this.ctx.globalAlpha = opacity * energyIntensity;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, size * pulse, 0, Math.PI * 2);
      this.ctx.fill();

      // Energy indicator
      if (node.energy > 50) {
        const energyGradient = this.ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          size * 1.5
        );
        energyGradient.addColorStop(0, this.config.colors.energy);
        energyGradient.addColorStop(1, "transparent");
        this.ctx.fillStyle = energyGradient;
        this.ctx.globalAlpha = (node.energy / 100) * 0.3;
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, size * 1.5, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });

    this.ctx.globalAlpha = 1;
  }

  private drawEnergyParticles() {
    this.energyParticles.forEach((particle) => {
      const alpha = 1 - particle.progress; // Fade out as they travel
      this.ctx.fillStyle = this.config.colors.energy;
      this.ctx.globalAlpha = alpha * 0.8;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1;
  }

  private animate() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.updateNodes();
    this.findConnections();
    this.updateEnergyParticles();
    this.drawConnections();
    this.drawNodes();
    this.drawEnergyParticles();

    requestAnimationFrame(() => this.animate());
  }

  public destroy() {
    this.isRunning = false;
    window.removeEventListener("resize", this.handleResize);
    this.canvas.removeEventListener("mousemove", this.handleMouseMove);
  }
}
