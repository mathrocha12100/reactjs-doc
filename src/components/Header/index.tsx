import React, { useState, useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';
import { darken, lighten } from 'polished';
import { AppContext } from '../../App';
import { FaMoon, FaSun } from 'react-icons/fa';

const IconContainer: React.FC<{mode: 'dark' | 'light'}> = ({ mode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      justifyContent: mode === 'dark' ? 'flex-start' : 'flex-end',
      marginRight: mode === 'dark' ? 0 : 10,
      marginLeft: mode === 'light' ? 0 : 10,
    }}
  >
    {mode === 'dark' ? <FaMoon color="#333" /> : <FaSun color="#fff" />}
  </div>
);

const Header: React.FC = () => {
  const { header, title } = useContext(ThemeContext);
  const [on, setOn] = useState(title === 'dark');
  const { toggleTheme } = useContext(AppContext);

  function toggle(value: boolean) {
    setOn(value);
    toggleTheme();
  }

  return (
    <Container>
      <h1>XPro Api</h1>

      <Switch
        onChange={toggle}
        checked={on}
        checkedIcon={<IconContainer mode="dark" />}
        uncheckedIcon={<IconContainer mode="light" />}
        handleDiameter={20}
        offColor={darken(0.15, header.primary)}
        onColor={lighten(0.15, header.primary)}
      />
    </Container>
  );
};

export default Header;
