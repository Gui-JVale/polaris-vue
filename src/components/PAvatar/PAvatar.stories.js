import PAvatar from './PAvatar';

export default {
    title: 'Images & Icons / Avatar',
    component: PAvatar,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        PAvatar,
    },
    template: `
        <PAvatar v-bind="$props"></PAvatar>`,
});

export const Avatar = Template.bind({});
