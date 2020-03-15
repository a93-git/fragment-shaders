#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

vec3 color() {
    return vec3(1.0, 0.0, 0.0);
}

void main() {
    vec3 color = color();
    gl_FragColor = vec4(color, 1.0);
}