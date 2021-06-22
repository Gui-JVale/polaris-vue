import PImage from './PImage';

export default {
    title: 'Images & Icons / Image',
    component: PImage,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        PImage,
    },
    template: `
        <PImage 
            v-bind="$props"
        ></PImage>`
});

export const Image = Template.bind({});

Image.args = {
    source: "https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg",
    alt: "Black choker necklace",
    height: "100",
    width: "100",
}
