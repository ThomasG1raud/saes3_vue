<template>
  <div>
    <form action="/" method="post" id="form-register">
      <div class="div-form">
        <label for="lastname">Nom : </label>
        <input type="text" name="lastname" id="lastname" required>
      </div>
      <div class="div-form">
        <label for="firstname">Prénom : </label>
        <input type="text" name="firstname" id="firstname" required>
      </div>
      <div class="div-form">
        <label for="email">Email : </label>
        <input type="email" name="email" id="email" required>
      </div>
      <div class="div-form">
        <label for="password">Mot de passe : </label>
        <input type="password" name="password" id="password" required>
      </div>
      <div class="div-form">
        <label for="confirm-password">Confirmer le mot de passe : </label>
        <input type="password" name="confirm-password" id="confirm-password" required>
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
    margin: 10px;
  }
  input {
    padding: 10px;
    border-radius: 10px;
    border: 3px solid;
    background-color: #EEEEEE;
  }
</style>