<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">
        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <form>
            <h3 class="fw-normal mb-3 pb-3">Register</h3>
            <div class="form-outline mb-4">
              <label class="form-label">Fullname</label>
              <input type="text" class="form-control form-control-lg" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label">Email address</label>
              <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label">Password</label>
              <input type="password" class="form-control form-control-lg" />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label">Upload Photo for Profile Picture</label>
              <el-upload
                class="upload-demo"
                :action="uploadUrl"
                :on-success="handleSuccess"
                :before-upload="beforeUpload"
                :file-list="fileList"
                :headers="headers"
                :data="uploadData"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :on-remove="handleRemove"
                :on-preview="handlePreview"
                :show-file-list="false"
              >
                <el-button size="small" type="primary">
                  <i class="el-icon-plus"></i>
                  Click to Upload
                </el-button>
                <div slot="tip" class="el-upload__tip">
                  jpg/png files with a size less than 500kb
                </div>
              </el-upload>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button">Register</button>
            </div>
            <p>Already have an account! <nuxt-link to="/" class="link-info">Login here?</nuxt-link></p>
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
  name: "Register",
  data() {
    return {
      form: {
        file: null,
        type: null
      },
    };
  },
  methods: {
    handlePreview(file) {
      console.log(file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    beforeUpload(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      console.log(files, fileList);
    }
  }
}
</script>

<style scoped>

</style>
