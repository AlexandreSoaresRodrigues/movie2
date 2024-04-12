import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'


import { Input } from '../../components/input'


import { Container, Form, Avatar } from "./styles";

import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>

      <Form>
        <Avatar>
          <img
            src="https://github.com/AlexandreSoaresRodrigues.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova atual"
          type="password"
          icon={FiLock}
        />

          <Button title="Salvar" />

      </Form>
    </Container>
  )
}