import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { LoginForm } from './LoginForm';

const meta = {
  title: 'Components/Features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
    onGoogleLogin: fn(),
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Login - Estado Padrão
 * Formulário vazio pronto para entrada
 */
export const LoginDefault: Story = {
  args: {
    mode: 'login',
    isLoading: false,
  },
};

/**
 * Login - Com Erro
 * Senha ou email incorretos
 */
export const LoginComErro: Story = {
  args: {
    mode: 'login',
    error: 'Email ou senha inválidos. Tente novamente.',
    isLoading: false,
  },
};

/**
 * Login - Carregando
 * Durante autenticação
 */
export const LoginCarregando: Story = {
  args: {
    mode: 'login',
    isLoading: true,
  },
};

/**
 * Login - Sucesso
 * Após login bem-sucedido
 */
export const LoginSucesso: Story = {
  args: {
    mode: 'login',
    showSuccess: true,
    isLoading: false,
  },
};

/**
 * Signup - Estado Padrão
 * Formulário para criar nova conta
 */
export const SignupDefault: Story = {
  args: {
    mode: 'signup',
    isLoading: false,
  },
};

/**
 * Signup - Com Erro
 * Email já registrado
 */
export const SignupComErro: Story = {
  args: {
    mode: 'signup',
    error: 'Este email já está registrado. Faça login ou use outro email.',
    isLoading: false,
  },
};

/**
 * Signup - Senhas não correspondem
 * Validação de senha
 */
export const SignupSenhasDiferentes: Story = {
  args: {
    mode: 'signup',
    error: 'As senhas não correspondem. Tente novamente.',
    isLoading: false,
  },
};

/**
 * Signup - Sucesso
 * Após criação de conta
 */
export const SignupSucesso: Story = {
  args: {
    mode: 'signup',
    showSuccess: true,
    isLoading: false,
  },
};
