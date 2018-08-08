<template>
  <div>
    首页
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <!-- <i-switch></i-switch> -->
    <Switch></Switch>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState([
      'news'
    ])
  },
  methods: {
    ...mapMutations(['setNews'])
  },
  head() {
    return {
      title: "首页",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "首页description"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "首页descriptionkeywords,YAY,YAY交友,YAY交友APP,YAY约玩,吃鸡陪玩,lol陪玩,绝地求生陪玩,王者荣耀陪玩"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.news-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  li {
    width: 30%;
    margin: 10px 10%;
    img {
      width: 100px;
    }
  }
}
</style>

