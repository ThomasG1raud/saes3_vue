<template>
  <footer class="footer">

    <section class="section" id="section1">
      <img src="@/assets/logo_sae_white.png" alt="logo du site">
    </section>

    <section class="section" id="section2">
      <div class="divHr">
        <hr>
      </div>
      <div class="divPhraseAccroche"><h1>Rejoignez-Nous</h1></div>
      <div class="divHr">
        <hr>
      </div>
    </section>

    <section class="section" id="section3">
      <img class="imageResaux" src="@/assets/facebook.webp">
      <img class="imageResaux" src="@/assets/twitter.png">
      <img class="imageResaux" src="@/assets/instagram.png">
    </section>

    <section class="section" id="section4">
      <div class="divPage">page1</div>
      <div class="divPage">page2</div>
      <div class="divPage">page3</div>
      <div class="divPage">page4</div>
      <div class="divPage">page5</div>
    </section>

    <section class="section" id="section5">
      <p>&copy; <span>{{getYear}}</span> All Rights Reserved by Merveaux Julien, Lehmann Lucas, Giraud Thomas, Guillou Aurelien and Lebreuil Thibault</p>
    </section>

  </footer>
</template>

<script>
export default {
  name: "FooterView",
  computed: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #383636;
  color: #FFFFFF;
}

section {
  height: auto;
  width: 100%;
}

#section1 {
  height: auto;
}

#section2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

#section4 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  padding: 15px;
}

#section5 {
  background-color: #2a2929;
  color: #FFFFFF;
}

img {
  height: 100px;
}

.divHr {
  width: 25%;
}

hr {
  width: 100%;
}

.divPhraseAccroche {
  width: auto;
  margin: 0 5%;
}

.imageResaux {
  height: 30px;
  margin: 0 3px;
}

.divPage {
  height: auto;
  width: auto;
  margin: 2% 3%
}

</style>