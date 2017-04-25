<template>
  <div class="app">
    <nav>
      <router-link
        :to="{ name: 'home' }"
        exact>
        Home
      </router-link>
      
      <router-link
        :to="{ name: 'search' }">
        Search
      </router-link>
    </nav>

    <router-view/>
  </div>
</template>

<style lang="less">
body {
  font-family: sans-serif;
  margin: 24px;
  background: #353333;
  color: white;
  font-size: 1.4rem;
}

a {
  color: white;
  text-decoration: none;
  border-bottom: solid 1px fade(white, 30%);
}

input {
  font-family: inherit;
  font-size: inherit;
  border: none;
  border-bottom: solid 1px fade(white, 30%);
  background: none;
  color: white;
  padding: 8px 6px;

  &:focus {
    border-bottom-color: white;
  }
}

nav {
  a {
    display: inline-block;
    margin-right: 12px;

    &.router-link-active {
      border-bottom-color: white;
    }
  }
}
</style>
