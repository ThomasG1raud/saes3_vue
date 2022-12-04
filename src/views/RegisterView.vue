<template>
  <div>
    <form action="/" method="post" id="form-register">
      <div class="div-form">
        <label for="lastname">Nom : </label>
        <input type="text" name="lastname" id="lastname" required placeholder="Nom">
      </div>
      <div class="div-form">
        <label for="firstname">Prénom : </label>
        <input type="text" name="firstname" id="firstname" required placeholder="Prénom">
      </div>
      <div class="div-form">
        <label for="email">Email : </label>
        <input type="email" name="email" id="email" required placeholder="Email">
      </div>
      <div class="div-form">
        <label for="password">Mot de passe : </label>
        <input type="password" name="password" id="password" required placeholder="Mot de passe">
      </div>
      <div class="div-form">
        <label for="confirm-password">Confirmer le mot de passe : </label>
        <input type="password" name="confirm-password" id="confirm-password" required placeholder="Confirmer le mot de passe">
      </div>
      <p>
        Déjà un compte ? <a href="#/login">Connexion</a>
      </p>
      <div class="div-form">
        <input type="submit" value="Créer un compte">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterView"
}
</script>

<style scoped>
  #form-register {
    margin: 100px;
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
</style>