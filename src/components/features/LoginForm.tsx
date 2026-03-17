'use client';

import { useState } from 'react';
import '../../styles/login-form.css';

export interface LoginFormProps {
  /** Modo de exibição: login ou signup */
  mode?: 'login' | 'signup';
  /** Callback ao enviar formulário */
  onSubmit?: (data: { email: string; password: string }) => void;
  /** Estado de carregamento */
  isLoading?: boolean;
  /** Mensagem de erro */
  error?: string;
  /** Mostrar sucesso */
  showSuccess?: boolean;
  /** Callback para Google Login */
  onGoogleLogin?: () => void;
}

/**
 * Formulário de Login/Signup
 * Integração com Supabase Auth (Google OAuth + Email/Senha)
 */
export const LoginForm = ({
  mode = 'login',
  onSubmit,
  isLoading = false,
  error,
  showSuccess = false,
  onGoogleLogin,
}: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const isSignup = mode === 'signup';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="login-form">
      <div className="login-form__container">
        <div className="login-form__header">
          <h1 className="login-form__title">
            {isSignup ? 'Crie sua Conta' : 'Bem-vindo de Volta'}
          </h1>
          <p className="login-form__subtitle">
            {isSignup
              ? 'Junte-se à nossa comunidade de fé e conhecimento'
              : 'Acesse sua área de membro'}
          </p>
        </div>

        {showSuccess && (
          <div className="login-form__success">
            ✓ {isSignup ? 'Conta criada com sucesso!' : 'Login realizado com sucesso!'}
          </div>
        )}

        {error && <div className="login-form__error">✗ {error}</div>}

        <form className="login-form__form" onSubmit={handleSubmit}>
          <div className="login-form__group">
            <label htmlFor="email" className="login-form__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="login-form__input"
              placeholder="seu.email@exemplo.com"
              disabled={isLoading}
            />
          </div>

          <div className="login-form__group">
            <label htmlFor="password" className="login-form__label">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="login-form__input"
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>

          {isSignup && (
            <div className="login-form__group">
              <label htmlFor="confirmPassword" className="login-form__label">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="login-form__input"
                placeholder="••••••••"
                disabled={isLoading}
              />
            </div>
          )}

          <button
            type="submit"
            className="login-form__submit"
            disabled={isLoading}
          >
            {isLoading ? 'Processando...' : isSignup ? 'Criar Conta' : 'Entrar'}
          </button>
        </form>

        <div className="login-form__divider">ou</div>

        <button
          type="button"
          className="login-form__google"
          onClick={onGoogleLogin}
          disabled={isLoading}
        >
          <span className="login-form__google-icon">🔐</span>
          Continuar com Google
        </button>

        <p className="login-form__footer">
          {isSignup
            ? 'Já tem uma conta? Entre aqui'
            : 'Não tem conta? Crie uma agora'}
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
