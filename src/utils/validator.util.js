export const Validador = {
  validarParametro: (parametros) => {
    if (!parametros || !Array.isArray(parametros)) {
      return true;
    }

    const parametrosInvalidos = parametros
      .filter((p) => {
        const attr = Object.keys(p)[0];
        return (
          p[attr] === null ||
          p[attr] === undefined ||
          (typeof p[attr] === 'number' && isNaN(p[attr])) ||
          (typeof p[attr] === 'string' && p[attr] === '')
        );
      })
      .map((p) => Object.keys(p)[0]);

    if (parametrosInvalidos.length) {
      throw new Error(`Os seguintes parametros sao obrigatorios: ${parametrosInvalidos.join(', ')}`);
    }
    return true;
  },
};
