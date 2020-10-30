import React, { useState } from 'react';
import HTTPMethod from '../../components/HTTPMethodBadge';
import CommonLayout from '../../layouts/Common';
import Dialog from '../../components/Dialog';
import Input from '../../components/Input';
import Accordion from '../../components/Accordion';
import { Form } from '@unform/web';
import { data } from '../../data';
import TypescriptCodeEditor from '../../components/TypescriptCodeEditor';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

const functionkk = `
// exemplo de funcionamento

interface GetUsersResponse {
  CODIGO: number;
  NOME: string;
  LOGIN: string;
  SITUACAO: number;
  DATA_INCLUSAO: Date | null;
  DATA_ULTIMO_LOGIN: Date | null;
  CPF: string;
  FOTO: string | null;
  FUNCAO: string;
  LIBERADA_VENDA: boolean;
}

async function execute() {
  const { api } = window;

  const response = await api.post('/session', {
    LOGIN: 'edvaldo.santana@experiencesolucoes.com.br',
    SENHA: '142536',
  });
  const token = 'Bearer ' + response.data.payload.token;
  
  const allusers = await api.get<GetUsersResponse>('/users', {
    headers: {
      Authorization: token,
    }
  });

  return window.response(allusers.data, null, 4);
}
execute();

`;

const Main: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [ficData, setFicData] = useState(functionkk);

  async function createSession() {
    const response = await api.get('/users/mathrocha12100');

    return JSON.stringify(response.data, null, 4);
  }

  return (
    <CommonLayout>
      <Accordion label="Sessão" defaultExpanded>
        <Accordion
          label="/session"
          HTTPMethod={HTTPMethod}
          description="Rota de login"
          method="POST"
        ></Accordion>
      </Accordion>
      <TypescriptCodeEditor
        title="Exemplo Chamada a api"
        defaultValue={ficData}
        headerButton={{
          label: 'Executar',
          onClick: async () => {
            return await createSession();
          },
        }}
      />

      {/* {data.map((dt) => (
        <Accordion key={Math.random()} label={dt.sectionName} defaultExpanded>
          {dt.sectionRoutes.map((a) => (
            <Accordion
              key={Math.random()}
              HTTPMethod={HTTPMethod}
              method={a.method}
              label={a.route}
              description={a.description}
            >
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet.
              </p>
            </Accordion>
          ))}
        </Accordion>
      ))} */}

      <Dialog open={open} setOpen={setOpen}>
        <Form onSubmit={() => {}}>
          <Input name="tdadwa" label="teste" />
        </Form>
        <span>teste</span>
        <button onClick={() => setOpen(false)}>fechar</button>
      </Dialog>
    </CommonLayout>
  );
};

export default Main;
