import React, { useState, useRef } from 'react';
import * as typescript from 'typescript';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-typescript';
import Button from '../Button';
import { FaCopy } from 'react-icons/fa';
import './removeOutline.css';
import JSONCodeEditor from '../JSONCodeEditor';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Editor, EditorHeader, EditorFooter } from './styles';

interface Props {
  title?: string;
  defaultValue?: string;
  headerButton?: {
    label: string;
    onClick: () => string | Promise<string>;
  };
}

(window as any).api = api;
(window as any).response = (data: any) => {
  return JSON.stringify(data, null, 4);
};


const CodeInput: React.FC<Props> = ({ title, defaultValue, headerButton }) => {
  const [code, setCode] = useState(defaultValue || '');
  const [compileError, setCompileError] = useState('');
  const [compileResponse, setCompileResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const codeInputRef = useRef<any>(null);

  async function execute() {
    try {
      setLoading(true);
      const convertToJs = typescript.transpile(code);
      const compileJs = await eval(`${convertToJs}`);

      if (compileJs) {
        setCompileResponse(`${compileJs}`);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);

      setCompileError(`${err}`);
    }
  }

  return (
    <>
      <EditorHeader>
        <div>
          <div className="typescript-icon">TS</div>
          <strong>{title}</strong>
        </div>
        <div>
          <Button
            textColor="#fff"
            backgroundColor="#7159c1"
            label=""
            Icon={<FaCopy />}
            style={{ marginRight: 5 }}
            onClick={() =>
              toast.success('Copiado!', {
                autoClose: 2000,
              })
            }
          />

          {headerButton?.label && (
            <Button
              textColor="#fff"
              backgroundColor="#7159c1"
              label={headerButton.label}
              onClick={execute}
              loading={loading}
            />
          )}
        </div>
      </EditorHeader>
      <Editor
        id="editor"
        value={code}
        defaultValue={code}
        onValueChange={setCode}
        highlight={(code) => highlight(code, languages.typescript, 'markup')}
        padding={15}
        ref={codeInputRef}
        onChange={() => {
          if (compileError) {
            setCompileError('');
          }
        }}
      />
      <JSONCodeEditor
        resetFunction={setCompileResponse}
        value={compileResponse}
        title="Resposta Api"
      />
      {compileError && <EditorFooter>{compileError}</EditorFooter>}
    </>
  );
};
export default CodeInput;
