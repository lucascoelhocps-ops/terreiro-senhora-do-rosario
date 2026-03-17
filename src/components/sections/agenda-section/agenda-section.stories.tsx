import type { Meta, StoryObj } from '@storybook/react';
import { AgendaSection } from './agenda-section';

const meta: Meta<typeof AgendaSection> = {
  title: 'Sections/AgendaSection',
  component: AgendaSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AgendaSection>;

export const Default: Story = {};