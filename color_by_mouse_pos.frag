#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
    vec2 mouse_pos_normalize = u_mouse.xy / u_resolution;

    gl_FragColor = vec4(mouse_pos_normalize, 1.0, 1.0);
}