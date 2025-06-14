// neuron-matrix.frag: مؤثرات WebGL لعصبونات متحركة
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float n = sin(uv.x*20.0+u_time*2.0)*cos(uv.y*20.0-u_time*2.0);
  float glow = smoothstep(0.4,0.5,abs(n));
  vec3 color = mix(vec3(0.0,1.0,0.9), vec3(1.0,0.0,0.8), glow);
  gl_FragColor = vec4(color, 0.7+0.3*glow);
}
