<template>
  <div id="nav" class="flex flex-col ">
    <router-link to="/landing">Landing</router-link> |
    <router-link to="/login-failed">LoginFailed</router-link> |
    <router-link to="/register-failed">RegisterFailed</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/restore-pass">RestorePass</router-link> |
    <router-link to="/restore-pass-code">RestorePassCode</router-link> |
    <router-link to="/restore-pass-code-error">RestorePassCodeError</router-link> |
    <router-link to="/restore-pass-error">RestorePassError</router-link> |
    <router-link to="/restore-pass-new">RestorePassNew</router-link> |
    <router-link to="/restore-pass-success">RestorePassSuccess</router-link> |
  </div>
  <router-view/>
</template>

<script>


export default {
  components: {}
}
</script>
