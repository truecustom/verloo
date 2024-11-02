import { Meta, StoryObj } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types';

import { ContentListComponent } from './content-list.component';

type ComponentWithCustomControls = ContentListComponent & {};

const meta: Meta<ComponentWithCustomControls> = {
  // TODO: Make sure this title path is correct, uncomment tile, then remove this comment. OR remove both comment and title
  // title: 'Components/Content List',
  component: ContentListComponent,
  // decorators: [moduleMetadata({ imports: [] }), applicationConfig({ providers: [ importProvidersFrom() ]})],
  parameters: {
    docs: { description: { component: `ContentList` } },
    // layout: 'fullscreen',
  },
  argTypes: {
    /** === Input Mapping === */
    // input: { options: ['---', ...Object.values(YourEnum)], mapping: YourEnum & { '---': undefined }, control: { type: 'select' }}
    /** === Output Actions === */
    // inputChange: { action: 'inputChange', table: { disable: true } }
    /** === Control Hide === */
    // someControl: { table: { disable: true } }
    /** === Control Disable === */
    // someControl: { control: { disable: true } }
  },
  args: {},
};
export default meta;

export const ContentList: StoryObj<ComponentWithCustomControls> = {
  args: {}, // Overrides args from default
  render: (args): StoryFnAngularReturnType => ({ props: args }),
}
