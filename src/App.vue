<template>
  <div id="app">
    <appnav></appnav>
    <transition :name="'appRouter'+direction">
      <router-view></router-view>
    </transition>     
  </div>
</template>

<script>
import appnav from './components/appnav';


export default {
  name: 'App',
  components:{
    appnav
  },
  computed:{
    direction(){
      return this.$store.state.direction
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.appRouterRight-enter-active,.appRouterRight-leave-active{
    will-change: transform;
    transition: all 300ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
}
.appRouterRight-enter{
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
 .appRouterRight-leave-active{
  opacity: 0;
  transform: translate3d(100%, 0, 0);
} 

.appRouterLeft-enter-active,.appRouterLeft-leave-active {
    will-change: transform;
    transition: all 300ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .appRouterLeft-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .appRouterLeft-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
