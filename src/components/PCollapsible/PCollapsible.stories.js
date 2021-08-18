import { PCollapsible } from './index';
import { PCard } from '../PCard';
import { PStack, PStackItem } from '../PStack';
import { PButton } from '../PButton';
import { PTextContainer } from '../PTextContainer';
import { PLink } from '../PLink';

export default {
    title: 'Behaviour / Collapsible',
    component: PCollapsible,
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
        PCollapsible, PCard, PStack, PStackItem, PButton, PTextContainer, PLink
    },
    data() {
        return {
            isOpen: true,
        };
    },
    template: `
      <div style="height: 200px;">
        <PCard sectioned>
          <PStack vertical>
            <PStackItem>
              <PButton
                  @click="handleToggle"
                  :aria-expanded="isOpen"
                  aria-controls="basic-collapsible"
              >
                Toggle
              </PButton>
            </PStackItem>
            <PStackItem>
              <PCollapsible
                  :open="isOpen"
                  id="basic-collapsible"
                  :transition="{duration: '500ms', timingFunction: 'ease-in-out'}"
                  :expandOnPrint="true"
              >
                <PTextContainer>
                  <p>
                    Your mailing list lets you contact customers or visitors who
                    have shown an interest in your store. Reach out to them with
                    exclusive offers or updates about your products.
                  </p>
                  <PLink url="javascript:void(0)">Test link</PLink>
                </PTextContainer>
              </PCollapsible>
            </PStackItem>
          </PStack>
        </PCard>
      </div>`,
    methods: {
        handleToggle() {
            this.isOpen = !this.isOpen;
        }
    }
})

export const Collapsible = Template.bind({});
