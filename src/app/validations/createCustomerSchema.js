import * as Yup from 'yup';


const schema = Yup.object().shape({
  email: Yup.string().required(),
  cep: Yup.number().required(),
  cpf: Yup.number().required(),
});

export default schema;
