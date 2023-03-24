<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">
        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <form>
            <h3 class="fw-normal mb-3 pb-3">Log in</h3>
            <div class="form-outline mb-4">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control form-control-lg"
                v-model="form.email"
                required
                :class="{ 'error': !form.email }"/>
            <transition name="fade">
              <p v-if="!form.email" class="error-text">Email is required.</p>
            </transition>
            </div>
            <div class="form-outline mb-4">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control form-control-lg"
              v-model="form.password"
              required
              :class="{ 'error': !form.password }"/>
            <transition name="fade">
              <p v-if="!form.password" class="error-text">Password is required.</p>
            </transition>
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
  data() {
    return {
      form: {
        email: null,
        password: null,
      }
    }
  },
  methods: {
    LoginPage(){
      if(this.form.email !== null && this.form.password !== null) {
        this.$store.dispatch("auth/login", this.form)
          .then(res => {
            this.$message.success("Successfully Login")
            this.$router.push("/profile");
          }).catch( err=> {
          this.$message.error(err)
        })
      } else {
        this.$message.error("Please enter field required")
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.error {
  border-color: red;
}
.error-text {
  color: red;
}
</style>
