import joi from 'joi';
 
export const modeloCarro = joi.object({
        nome: joi.string().min(3).required(),
        sigla: joi.string().length(3).required(),
        velocidadeMaxima: joi.number().min(1).required(),
        potencia: joi.number().min(1).required(),
        consumo: joi.number().min(0.1).required(),
});
 
 