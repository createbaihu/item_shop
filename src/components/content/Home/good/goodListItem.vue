<template>
  <div id="good-list-item">
    <a :href="good.link">
      <img :src="good.show.img" alt="" />
      <div class="des">
        <p class="title">{{ good.title }}</p>
        <span class="price">{{ good.price }}</span>
        <span class="cfav">☆{{ good.cfav }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "goodListItem",
  props: ["good"],
  data() {
    return {};
  },
};
</script>
<style scoped>
#good-list-item {
  width: 47%;
  margin-bottom: 5px;
}
#good-list-item img {
  width: 100%;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}
.price {
  color: var(--color-high-text);
}
</style>
