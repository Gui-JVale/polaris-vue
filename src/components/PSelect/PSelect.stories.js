import { PSelect } from './index';
import { PBadge } from '../PBadge';

export default {
    title: 'Forms / Select',
    component: PSelect,
    argTypes: {
        options: {
            table: {
                defaultValue: {
                    summary: '[]',
                    detail: `[{
    key: 'text',
    value: 'text'
}]`,
                },
            },
        },
        id: {
            table: {
                type: {
                    summary: 'string | number',
                },
            },
        },
        change: {
            table: {
                defaultValue: {
                    summary: '()',
                    detail: '(value)',
                },
            },
        },
        input: {
            table: {
                defaultValue: {
                    summary: '()',
                    detail: '(value)',
                },
            },
        },
    },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        PSelect, PBadge
    },
    data() {
        return {
            selectedOption: '',
        };
    },
    template: `
        <div>
          <PSelect
              v-model="selectedOption"
              v-bind="$props"
              @change="changeEvent"
          />
          <br />
          <p v-if="selectedOption">Selected Value: <PBadge>{{selectedOption}}</PBadge></p>
        </div>`,
    methods: {
        changeEvent(value) {
            console.log('Change Event: ', typeof value, value);
        },
    }
});

export const Select = Template.bind({});

Select.args = {
    label: 'Sort by',
    options: [
        {label: 'Newest update', value: 'newestUpdate'},
        {label: 'Oldest update', value: 'oldestUpdate'},
        {label: 'Most spent', value: 'mostSpent'},
        {label: 'Most orders', value: 'mostOrders', disabled: true},
        {label: 'Last name A–Z', value: 'lastNameAlpha', hidden: true},
        {label: 'Last name Z–A', value: 'lastNameReverseAlpha'},
    ],
    placeholder: 'Select Option',
}
