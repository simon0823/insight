<template>
  <nav id="nav-container">
    <div id="logo-container">
      <img src="../../assets/twitch.png" alt="logo">
    </div>
    <ul class="nav flex-column">
      <router-link tag="li" to="/" class="nav-item" active-class="active" exact>
        <a class="nav-link">홈</a>
      </router-link>
      <router-link tag="li" to="/news" class="nav-item" active-class="active">
        <a class="nav-link">뉴스</a>
      </router-link>
      <router-link tag="li" to="/business" class="nav-item" active-class="active">
        <a class="nav-link" href="#">비즈니스</a>
      </router-link>
      <router-link tag="li" to="/life" class="nav-item" active-class="active">
        <a class="nav-link" href="#">라이프</a>
      </router-link>
      <router-link tag="li" to="/enterSports" class="nav-item" active-class="active">
        <a class="nav-link" href="#">연예·스포츠</a>
      </router-link>
      <router-link tag="li" to="/photo" class="nav-item" active-class="active">
        <a class="nav-link" href="#">포토</a>
      </router-link>
      <router-link tag="li" to="/people" class="nav-item" active-class="active">
        <a class="nav-link" href="#">피플</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style scoped>
  #nav-container {
    width: 15%;
    height: 100vh;
    float: left;
    background-color: #4b367c;
  }
  #logo-container {
    padding: 60px 15px;
  }
  #logo-container > img {
    width: 100%;
  }
  .nav-item {
    margin-bottom: 15px;
    color: rgba(255,255,255,0.5);
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }
  .nav-link {
    padding: 10px 16px;
    color: inherit;
    text-align: center;
    font-size: 17px;
  }
  .nav-link > a {
    color: inherit;
  }
  .active {
    color: rgba(255,255,255,1);
  }
</style>
