import React from 'react';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-json';
import Button from '../Button';
import { FaCopy, FaTrash } from 'react-icons/fa';
import './removeOutline.css';

import { Editor, EditorHeader } from './styles';

interface Props {
  title?: string;
  value: string;
  resetFunction: (arg: string) => void;
}

const JSONCodeEditor: React.FC<Props> = ({ title, value, resetFunction }) => {
  return (
    <>
      <EditorHeader>
        <div>
          <div className="typescript-icon">JSON</div>
          <strong>{title}</strong>
        </div>
        <div>
          <Button
            textColor="#fff"
            backgroundColor="#7159c1"
            label=""
            Icon={<FaCopy />}
            style={{ marginRight: 5 }}
            onClick={() => {}}
          />
          <Button
            textColor="#fff"
            backgroundColor="#7159c1"
            label=""
            Icon={<FaTrash />}
            style={{ marginRight: 5 }}
            onClick={() => resetFunction('')}
          />
        </div>
      </EditorHeader>
      <Editor
        id="editor"
        value={value}
        defaultValue={value}
        onValueChange={() => {}}
        highlight={(code) => highlight(code, languages.json, 'markup')}
        padding={15}
        readOnly
      />
    </>
  );
};
export default JSONCodeEditor;
