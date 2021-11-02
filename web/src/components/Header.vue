<template>
  <header>
    <span>
      <a href="#">Home</a>
    </span>
    <nav>
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
        >
          <a :href="item.href">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const items = ref([
      {
        title: 'Portfolio',
        href: '#portfolio'
      }
    ]);

    return { items };
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: fit-content;
  padding: 1rem 1.5rem;
  background-color: var(--color-bg2);

  span {
    font-weight: bold;
    font-size: 1.3rem;
  }
}

ul {
  display: flex;
  list-style: none;

  li {
    &:not(:last-child) {
      margin-right: 1rem;
    }

    a {
      color: var(--color-text);
      transition: color .2s;

      &:hover {
        color: var(--color-accent);
        filter: brightness(.9);
      }
    }
  }
}
</style>