'use client';

import { useState } from 'react';
import '../../styles/dashboard-layout.css';

export interface DashboardLayoutProps {
  /** Conteúdo principal */
  children: React.ReactNode;
  /** Usuário atual */
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  /** Callback de logout */
  onLogout?: () => void;
}

/**
 * Layout do Dashboard
 * Componente wrapper com Sidebar lateral
 */
export const DashboardLayout = ({
  children,
  user = { name: 'Membro', email: 'membro@terreiro.com' },
  onLogout,
}: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: '🏠' },
    { label: 'Aulas', href: '/dashboard/aulas', icon: '📚' },
    { label: 'Financeiro', href: '/dashboard/financeiro', icon: '💳' },
    { label: 'Meu Perfil', href: '/dashboard/perfil', icon: '👤' },
    { label: 'Contato', href: '/dashboard/contato', icon: '📞' },
  ];

  return (
    <div className="dashboard-layout">
      {/* Overlay móvel */}
      {sidebarOpen && (
        <div
          className="dashboard-layout__overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`dashboard-layout__sidebar ${sidebarOpen ? 'dashboard-layout__sidebar--open' : ''}`}>
        <div className="dashboard-layout__sidebar-header">
          <h1 className="dashboard-layout__logo">TSR</h1>
          <button
            className="dashboard-layout__close-btn"
            onClick={() => setSidebarOpen(false)}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        <nav className="dashboard-layout__nav">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="dashboard-layout__nav-item"
            >
              <span className="dashboard-layout__nav-icon">{item.icon}</span>
              <span className="dashboard-layout__nav-label">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="dashboard-layout__sidebar-footer">
          <div className="dashboard-layout__user">
            <div className="dashboard-layout__user-avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <span>{user.name.charAt(0)}</span>
              )}
            </div>
            <div className="dashboard-layout__user-info">
              <p className="dashboard-layout__user-name">{user.name}</p>
              <p className="dashboard-layout__user-email">{user.email}</p>
            </div>
          </div>
          <button
            className="dashboard-layout__logout-btn"
            onClick={onLogout}
          >
            🚪 Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-layout__main">
        <header className="dashboard-layout__header">
          <button
            className="dashboard-layout__menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
          <h2 className="dashboard-layout__page-title">Área de Membros</h2>
        </header>

        <div className="dashboard-layout__content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
