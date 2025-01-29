import joi from 'joi';
 
// Validação para modelo de carro
export const modeloCarro = joi.object({
  nome: joi.string().min(3).required().messages({
    "string.min": "O nome do carro deve ter pelo menos 3 caracteres.",
    "any.required": "O nome do carro é obrigatório",
  }),      
  sigla: joi.string().length(3).required().messages({
    "string.length": " A sigla deve ter exatamente 3 caracteres.",
    "any.required": " A silgla é obrigatoria.",   
  }),
  velocidadeMaxima: joi.number().min(1).required().messages({
    "number.min": " A velocidade maxima deve ser maior ou igual a 1.",
    "ani.required": " A velocidade maxima é obrigatoria.",           
  }),
  potencia: joi.number().min(1).required().messages({
    "number.min": " A deve ser maior ou igual a 1.",
    "any.required": " A potência máxima é obrigatoria", 
  }),
  consumo: joi.number().min(0.1).required().messages({
    "number.min": " O consumo deve ser maior ou igual a 0.1.",
    "any.required": " O consumo é obrigatorio",
  }),
});
 
 
// Validação para atualização de carro.
export const modeloAtualizacaoCarro = joi.object({
        nome: joi.string().min(3), // Nome do carro, pelo menos 3 caracteres
        sigla: joi.string().length(3),  // Sigla ou modelo, 3 caracteres
        velocidadeMaxima: joi.number().min(1),  // Potência minima é 1 Cv
        potencia: joi.number().min(1),  // Velocidade miníma de 1km/h
        consumo: joi.number().min(0.1), // Ano de fabricação
});