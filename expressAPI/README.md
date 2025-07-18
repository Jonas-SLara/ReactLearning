uma api usando express e o driver pg com outras dependecias importantes
sem ORM para um crud de restaurantes e os pratos servidos, 

dependencias exploradas:

npm init
npm install dotenv pg express

docker compose up -d

docker exec -t db_restaurantes pg_dump -U postgres -d restaurantes > dump.sql

api-node/
    src/
        config/           # Configurações como conexão com o banco
        controllers/      # Lógica da aplicação, o "cérebro" das rotas
        models/           # Funções de acesso ao banco (queries SQL)
        routes/           # Definições das rotas (endpoints)
        middlewares/      # (opcional) Funções intermediárias, validações, logs
        server.js         # Ponto de entrada da aplicação
    .env                  # Variáveis de ambiente (como senha do banco)
    package.json
    README.md
    docker-compose.yml    # banco postgres
    init-db/
        dump.sql