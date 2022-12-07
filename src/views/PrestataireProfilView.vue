<template>
  <div id="card">
    <h1>Information du compte</h1>
    <form action="/" method="post" id="form-register">
      <div class="div-form">
        <label for="name">Nom : </label>
        <input type="text" name="name" id="name" required placeholder="Nom" :value="prestataire.name">
      </div>
      <div class="div-form">
        <label for="email">Email : </label>
        <input type="email" name="email" id="email" required placeholder="Email" :value="prestataire.email">
      </div>
      <div class="div-form">
        <label for="password">Texte de présentation : </label>
        <pre type="text" id="text-presentation" placeholder="Mot de passe">{{ prestataire.text }}</pre>
      </div>
      <div class="div-form">
        <label for="confirm-password">Image de profil : </label>
        <input type="file" name="image-profil" id="image-profil" required accept="image/png, image/jpg, image/jpeg">
        <img :src="require('@/assets/'+prestataire.imagePrestataire)" alt="image du profil">
      </div>
      <div class="div-form">
        <label for="confirm-password">Image du stand : </label>
        <input type="file" name="image-stand" id="image-stand" required accept="image/png, image/jpg, image/jpeg">
        <img :src="require('@/assets/'+prestataire.imageStand)" alt="image du stand">
      </div>
      <div class="div-form">
        <input type="submit" value="Mettre à jour les informations du compte">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PrestataireProfilView",
  data: () => ({
    prestataire: {
      name: "Nom du prestataire",
      email: "email@exemple.fr",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagePrestataire: "prestataire.png",
      imageStand: "stand.png"
    }
  })
}
</script>

<style scoped>
  #card {
    max-width: 1000px;
    display: grid;
    margin: 40px auto;
    background: none;
    box-shadow: 0 0 10px #cccccc;
    border-radius: 30px;
  }
  #form-register {
    display: flex;
    flex-direction: column;
  }
  .div-form {
    margin: 0 auto;
    width: fit-content;
    padding-left: 50px;
    padding-right: 50px;
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
  input[type=file] {
    display: none;
  }
  input[type=submit] {
    background-color: var(--light);
    color: var(--blue);
    border-color: var(--blue);
    border-radius: 25px;
  }
  input[type=submit]:hover {
    background-color: var(--blue);
    color: var(--light);
  }
  label {
    display: block;
    text-align: left;
  }
  pre {
    word-break: break-all;
    white-space: break-spaces;
    text-align: justify;
  }
</style>