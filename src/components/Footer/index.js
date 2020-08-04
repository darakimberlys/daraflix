import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        
      </a>
      <p>
        Criado por
        {' '}
        <a href="https://www.linkedin.com/in/darakimberlys/">
          Dara Kimberly
        </a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
