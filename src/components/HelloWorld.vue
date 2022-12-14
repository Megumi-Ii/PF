<template>
    <div class="main">
       <div class="aboutme">
    <section class="showcase">
      <video src="../assets/bridge.mp4" autoplay="" loop="" muted=""></video>
    </section>
      <h1 id="MyCareer">My Career</h1>
        <p>☆2017年3月ー明海大学外国語学部英米語学科卒業</p>
        <p>☆2017年4月ー株式会社ライフクリエイトに入社ー長野県・富山県勤務</p>
        <p>⇨ヨガのインストラクターとして勤務</p>
        <p>☆2018年11月ーリハテラス株式会社に転職</p>
        <p>⇨ヨガのインストラクター及び介護職員として勤務</p>
        <p>☆2020年4月ーフィットネスガーデン馬橋に転職</p>
        <p>⇨ヨガとダンスのインストラクターとして勤務</p>
        <p>☆2022年3月ーJUT JOYに転職</p>
    </div>
    <div class="MySkills">
      <h2 id="MySkills">My Skills</h2>
    <div class="SkillsContents">
      <div class="html">
        <p>HTML <a>10ヶ月</a></p>
        <img src="@/assets/HTML.png" alt="" width="480px" />
      </div>
      <div class="css">
        <p>CSS <a>10ヶ月</a></p>
        <img src="@/assets/css.png" alt="" width="480px" />
      </div>
      <div class="javascript">
        <p>JavaScript <a>3ヶ月</a></p>
        <img src="@/assets/JS.png" alt="" width="480px" />
      </div>
    </div>
    </div>
    <div class="MyFavorites">
      <h3 id="MyFavorites">My favorites</h3>
      <div class="container">
      <div class="interior">
        <p>INTERIOR</p>
      </div>
      <div class="text">
        <a>DIYで和室を洋室化にしたり、キッチンをフレンチ風にしたり、お風呂のタイルを現代風にしたりと快適な空間を創れるように意識しています！<br>DIYの写真を紹介しています⬇︎</a>
         <div class="textbox" id="MORE">MORE</div>
        </div>
      </div>
      <div class="container">
      <div class="handmade">
        <p>HANDMADE</p>
      </div>
      <div class="text">
        <a>物作りが好きで、昨年からアクセサリー作りにハマっています！お店でパーツ選んで月２に何個か作っています！<br>ピアスやネックレス等紹介しています⬇︎</a>
         <div class="textbox" id="MORE">MORE</div>
        </div>
      </div>
      <div class="container">
      <div class="camera">
       <p>CAMERA</p>
      </div>
       <div class="text">
        <a>愛用の一眼レフのNikon5600で写真を撮っています！風景も人を撮るのも好きで、旅行に行ったり何かイベントがある時は欠かせません！<br>写真を紹介しています⬇︎</a>
        <div class="textbox" id="MORE">MORE</div>
        </div>
      </div>
     <div class="container">
      <div class="travel">
        <p>TRAVEL</p>
      </div>
      <div class="text">
        <a>海外旅行も国内旅行も大好きです！文化の違いや現地の方と触れあうことで沢山の経験ができる事に魅力を感じています！<br>旅行先の紹介をしています⬇︎</a>
         <div class="textbox" id="MORE">MORE</div>
        </div>
     </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};

</script>


<style scoped>
@charset "UTF-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Georgia, serif;
}

.main {
  opacity: 100%;
  text-align: center;
  margin-bottom: 100px;
  margin-top: 0;
}
.aboutme p{
  background-color: rgba(20, 20, 20, 0.2);
}
.showcase video {
  position: absolute;
  top: 140px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 60%;
}
h1,
h2,
h3 {
  font-size: 2.6rem;
  font-weight: bold;
  margin: 200px auto;
  text-align: center;
}

.MySkills {
  margin: 200px auto;
}
.SkillsContents {
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 10%;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
}
.SkillsContents p {
  font-size: 2rem;
  margin: 50px auto;
}
.SkillsContents a {
  color: goldenrod;
}
.SkillsContents :hover {
  scale: 1.1;
  background-color: darkcyan;
}
.container {
  display: flex;
  flex-flow: column;
  margin: 200px auto;
}
.MyFavorites {
  background-color: burlywood;
  width: 100%;
  height: 100%;
  padding: 5% 0;
}

.MyFavorites p {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  background-color: rgba(20, 20, 20, 0.6);
  cursor: pointer;
  transition: 0.5s;
}
.MyFavorites p:hover {
  color: goldenrod;
}
.interior,
.handmade,
.camera,
.travel {
  background-size: cover;
  height: 60vh;
  width: 100%;
  background-position: 50%;
}
.interior {
  background-image: url(../assets/interior.jpg);
}
.handmade {
  background-image: url(../assets/handmade.JPG); 
}
.camera {
  background-image: url(../assets/home.JPG);
}
.travel {
  background-image: url(../assets/travel.JPG); 
}
.text {
  font-size: 20px;
  padding: 8px 10px;
  vertical-align: center;
  background-color: white;
  height: 100%;
  line-height: 2.6rem;
}
.textbox {
  text-align: center;
  border: solid 2px #333;
  margin: 10% 0;
}

.textbox:hover {
  cursor: pointer;
  color:goldenrod;
  background-color: #333;
}

@media screen and (min-width: 760px){
  .nav a {
    font-size:20px;
  }
  .SkillsContents {
   display: flex;
   margin: 3px;
}
.MySkills img {
  width: 80%;
}
  .container {
   display: flex;
   flex-flow: row;
   width: 92%;
}
  .text {
  height: 60vh;
  font-size: 22px;
  line-height: 3rem;
  width: 700px;
  background-color: #333;
}
  .MyFavorites a {
  color: white;
  }
  .textbox {
  text-align: center;
  color: white;
  border: solid 3px white;
  font-size: 1.8rem;
 
}

.textbox:hover {
  cursor: pointer;
  color:goldenrod;
  background-color: white;
}

}
</style>
