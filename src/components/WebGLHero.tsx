import { CanvasScene, ShaderPlane } from 'pax3d/three';
import { withBase } from '../lib/paths.js';

const fragmentShader = `
precision highp float;

varying vec2 vUv;

uniform float uProgress;
uniform float uVelocity;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform sampler2D uTexture;
uniform float uHasTexture;

void main() {
  vec2 uv = vUv;
  vec2 p = uv - 0.5;
  float time = uTime * 0.00008;
  float d = length(p);

  vec2 drift = vec2(
    sin(uv.y * 7.0 + time * 2.0 + uProgress * 3.0),
    cos(uv.x * 6.0 - time * 1.6)
  ) * 0.014;
  vec2 distorted = uv + drift;

  vec3 image = vec3(0.04, 0.05, 0.14);
  if (uHasTexture > 0.5) {
    image = texture2D(uTexture, distorted).rgb;
  }

  float lum = dot(image, vec3(0.299, 0.587, 0.114));
  vec3 navy = vec3(0.043, 0.063, 0.349);
  vec3 blue = vec3(0.09, 0.39, 0.81);
  vec3 gold = vec3(0.94, 0.773, 0.106);

  vec3 colour = mix(navy, blue, smoothstep(0.06, 0.8, lum));
  float band = smoothstep(0.52, 0.05, abs(p.y + sin(uv.x * 4.0 + time) * 0.12));
  colour = mix(colour, gold, band * 0.28);
  colour = mix(colour, image, 0.2);

  float glow = smoothstep(0.72, 0.0, d + 0.06 * sin(uv.x * 5.0 + time * 2.0));
  colour += gold * glow * 0.12;

  float vignette = 1.0 - smoothstep(0.32, 0.92, d) * 0.68;
  colour *= vignette;

  float grain = fract(sin(dot(uv * uResolution, vec2(12.9898, 78.233)) + uTime) * 43758.5453);
  colour += (grain - 0.5) * 0.022;

  gl_FragColor = vec4(colour, 1.0);
}
`;

export default function WebGLHero() {
	return (
		<CanvasScene
			className="hero-webgl"
			dpr={1.5}
			alpha={true}
			antialias={false}
			zCamera={3}
			aria-hidden="true"
		>
			<ShaderPlane
				source={withBase('/media/students.jpg')}
				match="#hero"
				fragmentShader={fragmentShader}
				damping={0.08}
				depth={0}
			/>
		</CanvasScene>
	);
}
