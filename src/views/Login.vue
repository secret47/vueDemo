<template>
  <div>
    <img class="logo" src="../assets/logo.png" alt="">
    <cube-form :model="model" :schema="schema" @submit="submitHandler">
    </cube-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              //校验规则
              required: true,
              type: "string",
              min: 3,
              max: 15
            },
            trigger: "blur",
            messages: {
              required: "用户名不能为空",
              min: "用户名不能少于3个字符",
              max: "用户名不能超过15个字符"
            }
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              //密码的配置规则，type要是password，这样输入进去就是***密码，eye是输入密码时，密码框旁边的小眼睛。
              type: "password",
              eye: {
                open: false,
                reverse: false
              }
            },
            rules: {
              //校验规则
              required: true,
              type: "string",
              min: 3,
              max: 15
            },
            trigger: "blur",
            messages: {
              required: "密码不能为空",
              min: "密码不能少于3个字符",
              max: "密码不能超过15个字符"
            }
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: "standard" // classic fresh
      }
    };
  },
  methods: {
    // submitHandler(e) {
    //   e.preventDefault();
    //   console.log("submit", e);
    //   this.$http
    //     .get("/api/login", { params: this.model })
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     });
    // }
    async submitHandler(e) {
      //阻止默认行为
      e.preventDefault();
      try {
        const result = await this.$http.get("/api/login", {
          params: this.model
        });
        if (result.data.code == 0) {
          //登录成功
          this.$store.commit("setToken", result.data.token);
          window.localStorage.setItem("token", result.data.token);
          this.$router.replace("/index");
          if (this.$route.query.redirect) {
            this.$router.replace(this.$route.query.redirect);
          } else {
            this.$router.replace("/index");
          }
        } else {
          alert(result.data.msg);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style>
.logo {
  width: 100%;
  height: 300px;
}
</style>