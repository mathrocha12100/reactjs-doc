import React, { useState } from 'react';
import HTTPMethod from '../../components/HTTPMethodBadge';
import CommonLayout from '../../layouts/Common';
import Dialog from '../../components/Dialog';
import Input from '../../components/Input';
import Accordion from '../../components/Accordion';
import { Form } from '@unform/web';
import { data } from '../../data';

const Main: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <CommonLayout>
      {data.map((dt) => (
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
      ))}

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
