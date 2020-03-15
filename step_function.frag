#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.141

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct) {
    return smoothstep(pct-0.02, pct, st.y) -
            smoothstep(pct, pct+0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    // float y = smoothstep(0.2, 0.5, st.x) - smoothstep(0.5, 0.8, st.x);
    // float y = st.x;
    float y = pow(st.x, 2.0);
    // float y = step(0.5, st.x);
    // float y = step(st.x, 0.5);
    // float y = smoothstep(0.0, 1.0, st.x);

    vec3 color = vec3(y);

    // Plot a line 
    float pct = plot(st, y);

    color = ((1.0 - pct) * color) + (pct * vec3(0.0, 1.0, 0.0));

    gl_FragColor = vec4(color, 1.0);
}