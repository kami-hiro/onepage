<template>
  <div class="wrap">
    <div class="continer">
      <section id="fv" class="section-fixed fv active">
        <p class="">1ページ目</p>
      </section>

      <section id="news" class="section-fixed news">
        <p class="">2ページ目</p>
      </section>

      <section id="profile" class="section-fixed profile">
        <p class="">3ページ目</p>
      </section>

      <section id="other" class="section-fixed other">
        <p class="">4ページ目</p>
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
  .section-fixed {
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
    &.fv {
      background-image: url("https://placehold.jp/111/1366x768.png");
    }
    &.news {
      background-image: url("https://placehold.jp/333/1366x768.png");
    }
    &.profile {
      background-image: url("https://placehold.jp/666/1366x768.png");
    }
    &.other {
      background-image: url("https://placehold.jp/999/1366x768.png");
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

  mounted() {
    window.addEventListener('wheel',this.scrollSwitch);
  },


  methods: {
    scrollSwitch: function(e) {
      const scrollDistance = e.deltaY;
      let contents = document.querySelectorAll('.section-fixed');
      
      if(this.countFlg) {
        if (scrollDistance > 200) {
          // 下のコンテンツに移動
          this.count++;
          console.log(`実装後 ${this.count}`);
          if(this.count > contents.length) {
            this.count = contents.length;
          }
          setTimeout(function () {
            this.countFlg = true;
          },5000);
        } else if (scrollDistance < -200) {
          // 上のコンテンツに移動
          this.count--;
          if(this.count < contents.length) {
            this.count = 1;
          }
        }
      }
      for(let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active')
      };
      contents[this.count - 1].classList.add('active');
    },
  },
}
</script>
