<template>
  <div id="app">
    <Header></Header>
    <MainHeader></MainHeader>
    <Topic></Topic>
    <Product></Product>
    <About></About>
    <Partner></Partner>
    <Youtube></Youtube>
    <Price></Price>   
    <Store></Store>
    <Post></Post>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainHeader from "./components/MainHeader.vue";
import Topic from "./views/Topic.vue";
import Product from "./views/Product.vue";
import About from "./views/About.vue";
import Partner from "./views/Partner.vue";
import Youtube from "./views/Youtube.vue";
import Price from "./views/Price.vue";
import Store from "./views/Store.vue";
import Post from './views/Post.vue';
import Footer from './components/Footer.vue';


export default {
  name: "App",
  components: {
    Header,
    MainHeader,
    Topic,
    Product,
    About,
    Partner,
    Youtube,
    Price,
    Store,
    Post,
    Footer
  },
   data() {
    return {
    
    };
  },
  mounted(){
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
