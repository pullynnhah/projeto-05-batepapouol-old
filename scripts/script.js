function renderLogin() {
  page.innerHTML = `
    <section class="login">
      <img src="images/uol.png" alt="logo bate-papo uol" />
  
      <div>
        <input type="text" placeholder="Digite seu nome" />
        <button onclick="login()">Entrar</button>
      </div>
    </section>
  `;
}

function login() {
  message.from = loginInput.value;
  loginInput.value = "";

  const promise = axios.post(`${API_URI}/participants`, {name: message.from});
  promise.then(() => alert("works!"));
  promise.catch(login);
}

const API_URI = "https://mock-api.driven.com.br/api/v6/uol";

const page = document.querySelector(".page");

renderLogin();
const loginInput = document.querySelector(".login input");

const message = {
  from: null,
  to: "Todos",
  text: null,
  type: "message",
};
