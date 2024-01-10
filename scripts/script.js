const container = document.querySelector(".container");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.href = "dashboard.html";
  } else {
    Landing();
  }
});

const Landing = () => {
  const element = document.createElement("div");
  element.classList.add("Landing");
  element.innerHTML = `
        <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
        </div>      
  
        <div id="form">
            <h3>Login Here</h3>
            <label for="email">Email</label>
            <input type="email" placeholder="Email" name="email" id="email" />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" name="password" id="password" />

            <button data-button="login">Log In</button>
            <button data-button="register">Register</button>
            <button data-button="forgot">Forgot Passwords</button>
        </div>
    `;

  container.innerHTML = "";
  container.appendChild(element);

  // mengambil input field
  const email = element.querySelector("#email");
  const password = element.querySelector("#password");

  // mengambil button
  const loginBtn = element.querySelector(`[data-button="login"]`);
  const registerBtn = element.querySelector(`[data-button="register"]`);
  const forgotPass = element.querySelector(`[data-button="forgot"]`);

  registerBtn.onclick = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((cred) => {
        alert(`Berhasil Membuat Akun`);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message); // Error
      });
  };

  loginBtn.onclick = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((cred) => {
        alert(`Berhasil Login`);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message); // Error
      });
  };
};


