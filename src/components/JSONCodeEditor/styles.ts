import styled from 'styled-components';
import ReactEditor from 'react-simple-code-editor';
import theme from '../../styles/themes/editor';
import { colorIsTooLight } from '../../functions/stringFunctions';
import { darken, lighten } from 'polished';

export const EditorHeader = styled.div`
  background: ${() =>
    !colorIsTooLight(theme.background)
      ? darken(0.05, theme.background)
      : lighten(0.05, theme.background)};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${() => (colorIsTooLight(theme.background) ? '#333' : '#fff')};

  div {
    display: flex;
    align-items: center;

    div.typescript-icon {
      background: #999;
      color: #eaff00;
      padding: 8px;
      border-radius: 3px;
      max-width: 55px;

      font-weight: bold;

      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
  }
`;

export const Editor = styled(ReactEditor)`
  background: ${theme.background};
  color: ${theme.jsonKey};
  outline: none;
  border: 0;
  font-size: 20px;
  line-height: 1.6;


  span.keyword {
    color: ${theme.keywordColor};
  }
  span.operator {
    color: ${theme.operatorColor};
  }
  span.number {
    color: ${theme.numberColor};
  }
  span.function {
    color: ${theme.functionColor};
  }

  span.punctuation {
    color: ${theme.punctuationColor};
  }

  span.string {
    color: ${theme.stringColor};
  }

  span.builtin {
    color: ${theme.builtinColor};
  }

  span.class-name {
    color: ${theme.classNameColor};
  }

  span.constant {
    color: ${theme.constant};
  }
`;

export const EditorFooter = styled.div`
  background: #ff1744;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
`;
