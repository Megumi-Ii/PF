<template>
<div class="wrapper">
<header>
  <main>MeguRoom</main>
  <nav>
  <ul>
      <li><a href="#MyCareer">MyCareer</a></li>
      <li><a href="#MySkills">MySkills</a></li>
      <li><a href="#MyFavorites">MyFavorites</a></li>
      <li><a href="#Contact">Contact</a></li>
  </ul>
  </nav>
</header>
<body>
   <router-view/>
</body>
<footer>
  <div class="SNS">
    <p>MeguRoom CONTACT</p>
    <div class="icons">
 <div id="instagram">
   <a href="https://about.instagram.com/">
<img src="../src/assets/instagram.png" alt="" width="50px">
   </a>
 </div>
 <div id="twitter">
   <a href="https://twitter.com/">
<img src="../src/assets/twitter.webp" alt="" width="50px"> 
   </a>
 </div>
 <div id="EyeEm">
    <a href="https://eyeem.com/omegu625">
<img src="../src/assets/EyeEm.webp" alt="" width="50px">
    </a>
 </div>
  </div>
  </div>
  <div class="contact" id="Contact">
      <p>気になる方は私にお問い合わせください。</p>
      <form>
        <input type="email" placeholder="メールアドレスを入力" />
        <input type="submit" value="お問い合わせ" />
      </form>
    </div>
  <h5>copyright2022</h5>
</footer>
</div>
</template>

<style scoped>
#app {
 font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  width: 100%;
}
header {
  height: 100%;
}
main{
 font-family: cursive;
 margin-top: 30px;
 margin-left: 5% ;
 font-size: 2.5rem;
 position: absolute;
}

nav {
  font-family: Georgia, serif;
  text-align: center;
 
}
nav a {
   text-decoration: none;
   margin:  3%;
   font-size: 16px;
   
}
nav li{
  font-weight: bold;
  color: goldenrod;
  display: inline;
  cursor:pointer;
  justify-content: space-around;
  
}
nav li:focus-visible {
    color: #03a9f4;
}

h5 {
  text-align: center;
  margin: 100px auto;
}
.SNS {
  margin: 100px auto ;
 
}
.SNS p {
  font-family: cursive;
  text-align: center;
  font-size: 20px;
}
.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
     margin: 100px auto ;
}
.icons {
  display: flex;
  justify-content: space-around;
  margin: 10%;
 
}
.icons img {
 border-radius: 10px;
}
.icons img:hover {
  scale: 1.3;
}
@media screen and (min-width: 760px){
  header {
    display: flex;
  }
  nav{
    margin-top: 30px;
    margin-left: 45%;
  }
  nav a {
    font-size:20px;
    margin: 5%;
  }
  .icons {
  display: flex;
  margin: 5%;
}
  .SNS p {
    font-size: 2rem;
  }
}

</style>

<script>



</script>
