import React from 'react';
import { render } from '@testing-library/react';
import Social from './Social'; 
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

test('renderiza o componente social com o URL correto', () => {
    const url = 'https://example.com';
    const { getByText } = render(<Social url={url}>Button Text</Social>);
    
    expect(getByText('Button Text')).toBeInTheDocument();
    expect(getByText('Button Text')).toHaveAttribute('href', url);
  });
  
  describe('Header component', () => {
    test('renderiza o cabeçalho com botão de logout e links de navegação', () => {
      render(<Header />);

      // Verifica se o cabeçalho foi renderizado
      const headerElement = screen.getByRole('header', { name: /admin-header/i });
      expect(headerElement).toBeInTheDocument();

      // Verifica se o botão de logout está renderizado
      const logoutButton = screen.getByRole('button', { name: /logout/i });
      expect(logoutButton).toBeInTheDocument();

      // Verifica se os links de navegação foram renderizados
      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(2);
      expect(links[0]).toHaveTextContent('Links');
      expect(links[1]).toHaveTextContent('Rede social');
    });
  
    test('chama a função handleLogout quando o botão de logout é clicado', async () => {
      const signOutMock = jest.fn();
      jest.mock('firebase/auth', () => ({
        signOut: (auth) => signOutMock(auth),
      }));
  
      render(<Header />);
      const logoutButton = screen.getByRole('button', { name: /logout/i });
      fireEvent.click(logoutButton);
  
      expect(signOutMock).toHaveBeenCalledTimes(1);
    });
  });
    