import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().required(),
  cep: Yup.string().length(8).required(),
  cpf: Yup.string().length(11).required(),
});
export default schema;
