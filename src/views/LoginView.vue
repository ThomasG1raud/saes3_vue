<template>
  <div class="main">
    <section id="image gauche"></section>
    <div id="rond"></div>
    <section>
        <div class="login">
          <h1> Log in </h1>
          <hr id="hrLogin">
          <div>
            <img src="../assets/instagram.png">
            <img src="../assets/twitter.png">
            <img src="../assets/facebook.webp">

          </div>
        </div>
        <div>
          <label for="E-mail"> E-mail </label>
          <input type="email" id="e-mailId" name="utilisateur" placeholder="Entrez votre E-mail">
          <hr>
        </div>

        <div>
          <label for="password"> Mot de passe </label>
          <input type="password" id="passwordId" name="passwordUtilisateur" placeholder="Entrez votre Mot de passe">
          <hr>
        </div>

        <div id="submit">
          <input type="submit" id="submitButton" name="submit" value="se connecter">
        </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style scoped>

.main {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-bottom: 0;
}


#hrLogin {
  width: 10%;
  margin-top: 0;
  margin-bottom: 25px;
}

section {
  width:25%;
  height: 50%;
  border: solid;


}

.login {
  margin: 10% 0;
}

hr {
  width: 100%;
}

div {
  margin: 25px;
}

input{
  width: 50%;
  height: 100%;

}

#submit {
  height: 10%;
}
#submitButton {
  border-radius: 50px;
}

#rond {
  position: absolute;
  margin: 0;
  border: solid;
  width: 3%;
  height: 5%;
  border-radius:100px;
  border: solid;
}
</style>