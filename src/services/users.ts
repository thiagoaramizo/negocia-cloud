import { DecodeTokenUserType, UserType } from "@/@types/UserType";
import jwt from "jsonwebtoken";

// TODO Incluir secret nos ambientes
const SECRET = "12345";

function createToken(user: UserType) {
  return jwt.sign(
    {
      username: user.username,
      userId: user.id,
      userEmail: user.email,
    },
    SECRET!
  );
}

function readToken(token: string) {
  try {
    return jwt.verify(token, SECRET!);
  } catch (err) {
    throw new Error("Token inválido");
  }
}

export function auth(token: string) {
  return readToken(token);
}

export function decodeToken(token: string): DecodeTokenUserType {
  return jwt.decode(token) as DecodeTokenUserType;
}

export async function login(body: { email: string; pass: string }) {
  // TODO Implementar validação com API de autenticação
  if (body.email !== "teste@email.com")
    throw new Error("Usuário não encontrado");
  if (body.pass !== "12345") throw new Error("Senha incorreta");
  const userTest: UserType = {
    username: "UsuárioTeste",
    id: "73118f40-4bf2-11ee-be56-0242ac120002",
    email: "teste@email.com",
    pass: "",
    avatar: "",
  };
  const token = createToken(userTest);
  return token;
}
