### e-coleta - Web e/ou Mobile
-------------

# [Editor.md](https://pandao.github.io/editor.md/en.html "Editor.md")

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

Descrição
-------------

### Principais Tecnologias:

> **Back-End:** NodeJS e TypeScripr

> **Front-End:** ReactJS e React Native

> **Banco de Dados:** SQLite3

### Ferramentas:

> **IDE:** Visual Studio Code

> **Controle de versão (GIT):** Fork

> **Client Rest (Tests):** Insomnia

### Configuração do arquivo package.json:
> **Subir server:** "dev": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts"

> **Datasource:** "knex:migrate": "knex --knexfile knexfile.ts migrate:latest"

> **Insets:** "knex:seed": "knex --knexfile knexfile.ts seed:run"

### Framework:

> **Semelhante ao Jakarta Persistence:** knexjs

> **API de Mapas:** Leafletjs (React-Leaflet)

> **Consulta UF / Cidade:** API do IGGE

### Comandos:

**Subir server:** `$ npm run dev`

**Executar Migration ("semelhante ao Flyway"):** `$ npm run knex:migrate` 

**Inserts:** `$ npm run knex:seed`

![2560x1080](https://user-images.githubusercontent.com/7306453/83935429-ea393100-a78f-11ea-9f22-17ae8c82ba76.jpg)
