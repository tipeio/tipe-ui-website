<template>
  <div class="tipe-list-el">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang="postcss">
.tipe-list-el {
  padding: 0;
  margin: 0;
  & a {
    font-size: 1rem;
    text-decoration: none;
  }
  & .tipe-list-item {
    padding: 0;
    display: flex;
    align-items: center;
    height: 2rem;
  }

  & .tipe-list-list-item {
    color: var(--text-purple-gray);
    font-family: Lato, sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
  & .tipe-list-heading {
    color: var(--text-purple);
    font-size: 1.125rem;
    font-weight: bold;
    height: 2.5rem;
    font-family: Lato, sans-serif;
    line-height: 22px;
  }
  & .tipe-list-sub-heading {
    font-size: 0.8rem;
    color: var(--text-black);
    font-weight: 500;
  }
}

.tipe-list-list-item:hover {
  opacity: 0.7;
}

.tipe-list-list-item.active {
  color: var(--text-teal);
}
</style>
