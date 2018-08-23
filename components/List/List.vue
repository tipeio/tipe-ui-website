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
    padding-left: 5px;
  }
  & .tipe-list-heading {
    color: var(--text-purple);
    font-size: 1.2rem;
    font-weight: 700;
    height: 2.5rem;
  }
  & .tipe-list-sub-heading {
    font-size: 0.8rem;
    color: var(--text-black);
    font-weight: 500;
  }
}

.tipe-list-list-item:hover {
  background-color: #e6ebff;
  border-right: 3px solid var(--dark-purple);
}
</style>
