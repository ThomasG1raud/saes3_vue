<template>
  <div id="bigDiv">

    <div id="cardLeft">
      <img src="../assets/imagePrincipalVitrine.jpg">
    </div>

    <div id="rond">
      <p id="fleche">⇺</p>
    </div>


    <div class="card">
      <h1>Login</h1>
      <form action="/" method="post" id="form-register">
        <div class="div-form">
          <label for="email">Email : </label>
          <input type="email" name="email" id="email" required placeholder="Email">
        </div>
        <div class="div-form">
          <label for="password">Mot de passe : </label>
          <input type="password" name="password" id="password" required placeholder="Mot de passe">
        </div>
        <p>
          Toujours pas de compte ? <a href="#/register">S'inscrire</a>
        </p>
        <div class="div-form">
          <input type="submit" value="Se connecter">
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "RegisterView"
}
</script>

<style scoped>
.card {
  width: 30%;
  height: 500px;
  display: grid;
  background: none;
  /*border: 1px solid var(--blue);*/
  box-shadow: 0 0 10px #cccccc;
  border-radius: 0 30px 30px 0;
}

#cardLeft {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 500px;
  background: none;
  /*border: 1px solid var(--blue);*/
  box-shadow: 0 0 10px #cccccc;
  border-radius: 30px 0 0 30px;
  overflow: hidden;

}

#form-register {
  display: flex;
  flex-direction: column;
}

.div-form {
  margin: 0 auto;
  width: fit-content;
}

input {
  display: block;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid var(--light);
  color: var(--dark);
  box-shadow: 0 0 1px;
  margin-bottom: 20px;
  margin-top: 10px;
}

input::placeholder {
  color: var(--dark);
}

input[type=submit] {
  background-color: var(--light);
  color: var(--blue);
  border-color: var(--blue);
  border-radius: 25px;
}

label {
  display: block;
  text-align: left;
}

#bigDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  padding:200px ;
}

img {
  height: 100%;
  background: none;
  /*border: 1px solid var(--blue);*/
  box-shadow: 0 0 10px #cccccc;
  border-radius: 30px;
}

#rond {
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: white;
}


</style>