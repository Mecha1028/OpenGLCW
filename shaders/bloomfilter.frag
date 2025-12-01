// bloomfilter.frag
#version 430

in vec2 texCoord;

// render-to-texture of the scene generated in the 1st pass
layout (binding=1) uniform sampler2D renderTex;

out vec4 colour_out;

void main()
{
    vec4 colour = texture(renderTex, texCoord);

    // check whether fragment output is higher than threshold, if so output as brightness color
    float brightness = dot(colour.rgb, vec3(0.2126, 0.7152, 0.0722));

    // LabA10 Bloom : TODO
    // filter the bright part based on a threshold
    // if the brightness is greater than the threhold, output (colour.rgb, 1.0)
    // otherwise output the black colour

}