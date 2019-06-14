<template>
	<div>
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
            label: "注册"
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
    submitHandler(e) {
      console.log("注册ok");
      e.preventDefault();
      console.log("submit", e);
      this.$http
        .get("/api/reg", { params: this.model })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="">
</style>