<template>
  <div class="wrap">
    <div class="continer" @wheel="changeScreen">
      <div class="status">
        <span class="status__head">ステータス：</span>
        <span class="status__body">{{ countFlg ? '切り替え可能' : '切り替え制限中' }}</span>
      </div>

      <section id="fv" class="screen fv active">
        <p class="screen__text">{{ count }}ページ目 FV</p>
      </section>

      <section id="news" class="screen news next-active">
        <p class="screen__text">{{ count }}ページ目 NEWS</p>
      </section>

      <section id="profile" class="screen profile">
        <p class="screen__text">{{ count }}ページ目 PROFILE</p>
      </section>

      <section id="gallery" class="screen gallery">
        <p class="screen__text">{{ count }}ページ目 GALLERY</p>
      </section>

      <section id="other" class="screen other">
        <p class="screen__text">{{ count }}ページ目 OTHER</p>
      </section>

    </div>
  </div>
</template>



<style lang="scss">

  @keyframes upAnime {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .continer {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .status {
    position: relative;
    font-size: 20px;
    font-weight: bold;
    z-index: 1;
    &__head {
      color: #fff;
    }
    &__body {
      color: #ee7800;
    }
  }
  .screen {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-attachment:fixed;
    opacity: 0;
    pointer-events: none;
    &.active {
      opacity: 1;
      pointer-events: auto;
      animation: upAnime ease 2s;
    }
    &__text {
      position: absolute;
      font-size: 50px;
      color: #fff;
      font-weight: bold;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    &.fv {
      background-image: url("/images/bg_01.jpg");
    }
    &.news {
      background-image: url("/images/bg_02.jpg");
    }
    &.profile {
      background-image: url("/images/bg_03.jpg");
    }
    &.gallery {
      background-image: url("/images/bg_05.jpg");
    }
    &.other {
      background-image: url("/images/bg_04.jpg");
    }
  }
</style>



<script>

export default {

  data() {
    return {
      count: 1,
      countFlg: true,
    }
  },

  methods: {
    changeScreen: function(e) {
      const contents = document.querySelectorAll('.screen');

      if(this.countFlg) {
        if(e.deltaY > 100) {
          if(this.count < contents.length) {
            this.count++;
            this.countFlg = false;
            setTimeout(this.changeCountFlg,3000);
          }

        } else if(e.deltaY < -100) {
          if(this.count > 1) {
            this.count--;
            this.countFlg = false;
            setTimeout(this.changeCountFlg,3000);
          }
        }
      }

      for(let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
        
        contents[this.count - 1].classList.add('active');
      };
    },

    changeCountFlg: function(){
      return this.countFlg = true;
    },
  },

}
</script>
