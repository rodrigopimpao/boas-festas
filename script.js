// Lista de pessoas
const pessoas = [
  "Caroline",
  "Elisangela",
  "Elizabeth",
  "Gilmara",
  "Karen",
  "Larissa",
  "Priscila",
  "Sabrina",
  "Siria",
  "Vinícius",
  "Wellington"
];

// Mensagens
const mensagens = [
  "que o próximo ano seja repleto de saúde, paz e boas conquistas ✨",
  "foi um prazer compartilhar mais um ano de aprendizados com você 🤍",
  "que 2025 traga novas oportunidades e muitas realizações 🌟",
  "seu comprometimento faz a diferença no nosso dia a dia 👏",
  "que nunca faltem motivos para sorrir e celebrar 😊",
  "boas festas e um Ano Novo cheio de momentos especiais 🎆",
  "que o próximo ano venha com equilíbrio, sucesso e felicidade 🍀",
  "gratidão por fazer parte de um time tão diverso e colaborativo 🤝",
  "que cada desafio do novo ano venha acompanhado de crescimento 📈"
];

// Pega o nome da URL
function getNomeFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("nome");
}

// Mostra mensagem personalizada
function mostrarMensagem() {
  const nome = getNomeFromURL();
  const msg = mensagens[Math.floor(Math.random() * mensagens.length)];

  const texto = nome
    ? `🎄 ${nome}, ${msg}`
    : `🎄 ${msg}`;

  document.getElementById("mensagem").innerText = texto;
}

// Gera lista de links
const lista = document.getElementById("lista-pessoas");

pessoas.forEach(nome => {
  const li = document.createElement("li");
  const link = document.createElement("a");

  link.href = `?nome=${encodeURIComponent(nome)}`;
  link.innerText = nome;

  li.appendChild(link);
  lista.appendChild(li);
});

// Mensagem inicial
mostrarMensagem();
