export default function Validation() {
  const form = document.querySelector("[data-newsletters]");

  const ShowResponse = async () => {
    const msg = document.querySelector("[data-msg]");
    const spinner = document.querySelector("[data-spinner]");

    const Class = "active";
    spinner.classList.add(Class);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        spinner.classList.remove(Class);
        resolve();
      }, 1500);
    });
    msg.classList.add(Class);
  };

  const SendInfo = async function (email) {
    try {
      const options = {
        method: "POST",
        body: email,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      };

      const url = "http://localhost:1337/Emails";

      fetch(url, options);
      ShowResponse();
    } catch (e) {
      console.log(e);
    }
  };

  const errorInput = (campo, msg) => {
    const p = document.createElement("p");
    p.innerHTML = msg;
    p.classList.add("error-text");
    campo.insertAdjacentElement("afterend", p);
  };

  const validValuefromInputs = (email) => {
    const isEmail = /\S+@\S+\.\S+/;
    return isEmail.test(email);
  };

  const validInput = (e) => {
    e.preventDefault();

    const input = form.querySelector("input");
    const ps = document.querySelectorAll(".error-text");

    const msgs = [
      "Campo vazio, preencha com o seu email",
      "Email ja foi enviado",
      "Preencha com um email valido",
    ];

    ps.forEach((p) => p.remove());
    // remover erros

    if (!input.value) {
      errorInput(e.currentTarget, msgs[0]);
    } else {
      const isTrue = validValuefromInputs(input.value);
      if (isTrue) {
        form.addEventListener("submit", () => {
          const email = JSON.stringify({ email: input.value.toLowerCase() });

          const mailObject = JSON.parse(email);

          const checkObject = JSON.parse(localStorage.getItem("email"));

          if (checkObject === null) {
            localStorage.setItem("email", email);
            return send(email);
          }
          if (checkObject.email === mailObject.email) {
            errorInput(form, msgs[1]);
          } else {
            send(email);
          }

          function send(email) {
            SendInfo(email);
            form.style.display = "none";
          }
        });
      } else {
        errorInput(e.currentTarget, msgs[2]);
      }
    }
  };

  form.addEventListener("submit", (e) => validInput(e));
}
