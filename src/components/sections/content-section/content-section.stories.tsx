import type { Meta, StoryObj } from '@storybook/react';
import { ContentSection } from './content-section';

const meta: Meta<typeof ContentSection> = {
  title: 'Sections/ContentSection', // Organiza no menu do Storybook
  component: ContentSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ContentSection>;

// Cenário 1: Texto na Esquerda, Imagem na Direita (Padrão)
export const Default: Story = {
  args: {
    title: 'Nossa Fundação',
    text: 'O Terreiro Axé foi fundado com o propósito de levar luz e caridade a todos...',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800',
    reverse: false,
  },
};

// Cenário 2: Imagem na Esquerda, Texto na Direita (Invertido)
export const Inverted: Story = {
  args: {
    title: 'Nossos Valores',
    text: 'Respeito, humildade e amor ao próximo são os pilares que sustentam nossa casa.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800',
    reverse: true,
  },
};