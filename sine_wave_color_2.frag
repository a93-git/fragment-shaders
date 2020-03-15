#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 normalized_coords = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        abs(cos(u_time * normalized_coords.x)),
        abs(cos(u_time * normalized_coords.y)),
        0.5,
        1.0
    );

}