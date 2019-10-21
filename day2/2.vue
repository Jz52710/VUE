<template>
<el-container class="login-layout">
    <div class="login-box">
        <div class="login-left">
            <img src="../../assets/images/login_logo.png">
        </div>
        <div class="login-right">
            <h3>用户登录</h3>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm2" label-width="0" class="demo-ruleForm" size="middle">
                <el-form-item  prop="username">
                    <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
    <div class="copyright">
        Copyright ©2018 dingai, All Rights Reserved.
    </div>
</el-container>
</template>
<script>
export default {
  name: "Login",
  data:function(){
      return {
            ruleForm: {
                username:"",
                password:""
            },
            rules:{
                username:{
                    required: true,
                    message: "用户名不能为空",
                    trigger: 'blur'
                },
                password:{
                    required: true,
                    message: "密码不能为空",
                    trigger: "blur"
                }
            }
      }
  },
  methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message.success('登陆成功');
            this.$router.push({name:"Main"});
          } else {
            this.$message.error('登陆失败');
            return false;
          }
        });
      }
  }
};
</script>
<style lang="less">
.login-layout {
  background: url(../../assets/images/login_bg.jpg) no-repeat center center/cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    display: flex;
    .login-left{
        width:240px;
        border-right:1px solid rgba(255,255,255,0.2);
        img{
            width:100%;
            margin-top:20px;
        }
    }
    .login-right{
        width: 280px;
        margin-left:26px;
        h3{
            line-height: 40px;
            color: #fff;
            font-size: 16px;
        }
    }
  }
    .copyright{
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 12px;
        color: rgba(255,255,255,0.5);
        position: absolute;
        width: 100%;
        bottom: 0;
    }
}
</style>


