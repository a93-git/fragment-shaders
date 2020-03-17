#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 coords = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        abs(sin(u_time)), 
        abs(sin(u_time * 0.09)), 
        abs(sin(u_time * 0.12)), 
        1.0);
}