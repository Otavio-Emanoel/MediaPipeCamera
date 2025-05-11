# 📸 Camera Web App com MediaPipe

Aplicativo web que utiliza MediaPipe para aplicar filtros em tempo real e detectar faces para efeitos especiais.

## 📋 Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager)
- Navegador moderno com suporte a WebRTC

## 🚀 Como Começar

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/MediaPipe.git
cd MediaPipe
```

2. **Instale as dependências**
```bash
npm install
```

3. **Gere os certificados SSL para HTTPS local**
```bash
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes
```

4. **Inicie o servidor**
```bash
npx http-server -S -C cert.pem -K key.pem
```

## 🎨 Recursos

### Filtros Disponíveis
- Normal
- Preto e Branco (P&B)
- Sépia
- Saturado
- Contraste
- Desfoque
- Vintage
- Dramatic
- Aesthetic
- Cinema
- Retro
- Dark
- Filtro de Cachorro (com detecção facial)

### Funcionalidades
- Câmera em tempo real
- Diversos filtros estilo Instagram
- Detecção facial com MediaPipe
- Efeito especial de cachorro que segue o rosto
- Captura de fotos com filtros

## 📁 Estrutura do Projeto

```
MediaPipe/
├── src/
│   ├── assets/
│   │   └── dog-filter/
│   ├── scripts/
│   │   └── index.js
│   └── styles/
│       ├── filters.css
│       ├── globals.css
│       └── video.css
├── node_modules/
├── .gitignore
├── index.html
├── cert.pem (gerado localmente)
└── key.pem (gerado localmente)
```

## ⚠️ Observações Importantes

- Arquivos `.pem` não são incluídos no repositório por segurança
- Cada máquina deve gerar seus próprios certificados
- HTTPS é necessário para acessar a câmera

## 📝 Licença

Este projeto está sob a licença MIT.

## ✨ Tecnologias Utilizadas

- MediaPipe (Google)
- JavaScript
- HTML5
- CSS3
- Node.js

---

Desenvolvido por Otavio