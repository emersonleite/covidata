/* Configuração de domínio no github pages */
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/covidata/" : "/",
  outputDir: "docs",
};
