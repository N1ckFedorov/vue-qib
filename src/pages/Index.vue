<template>
  <div id="nav" class="flex flex-col ">
    <router-link to="/landing">Landing</router-link> |
    <router-link to="/login-failed">LoginFailed</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
  </div>
  <router-view/>
</template>

<script>


export default {
  components: {}
}
</script>
