function logout() {
  console.log("HALO");
  firebase
    .auth()
    .signOut()
    .then(() => {
      alert("Berhasil LogOut");
      window.location.href = "index.html";
    })
    .catch((err) => alert(err));
}
