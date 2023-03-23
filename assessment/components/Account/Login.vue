<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">
        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <form>
            <h3 class="fw-normal mb-3 pb-3">Log in</h3>
            <div class="form-outline mb-4">
              <input type="email" class="form-control form-control-lg" />
              <label class="form-label">Email address</label>
            </div>
            <div class="form-outline mb-4">
              <input type="password" class="form-control form-control-lg" />
              <label class="form-label">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button" @click="LoginPage">Login</button>
            </div>
            <p>Don't have an account? <nuxt-link to="/register" class="link-info">Register here!</nuxt-link></p>
          </form>
        </div>
      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="/background.jpeg"
             alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    LoginPage(){
      this.$router.push("/profile")
    }
  }
}
</script>

<style scoped>

</style>
