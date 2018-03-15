<template>
  <div class="hello">
    <li>{{mes}}</li>
    <li v-text="reverseMes"></li>
    <li>{{reverseMes}}</li>
    <input type="text" v-model.lazy="str">
    {{str}}
  </div>
</template>

<script>
import qs from 'qs';
export default {
  name: 'HelloWorld',
  data () {
    return {
      arr:['a','b'],
      mes:'hello',
      str:'my is string'
    }
  },
  computed:{
    reverseMes(){
      return this.mes.split('').reverse().join('')
    }
  },
  // methods:{
  //   name(){
  //     //console.log(this.$store.commit('names'))
  //     this.$store.commit('names');
  //     //console.log('123')
  //   },
  //   yanchi(n){
  //     this.$store.dispatch('time',n)
  //   },
  // },
  created(){
    this.$axios('http://jsonplaceholder.typicode.com/users',{
      params:{
        id:5
      }
    }).then(res => console.log(res))
      .catch(err => console.log(err))
    console.log(this.HOST)

    let urll = this.HOST + '/Cycle/GetOptions'
    this.$axios(urll)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    console.log(this.$data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    margin: 10px;
    padding: 10px;
    list-style: none
  }
</style>
