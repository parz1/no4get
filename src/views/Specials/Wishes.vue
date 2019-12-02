<template>
  <v-app>
    <v-stepper v-model="step" vertical>
      <v-stepper-step :complete="step > 1" step="1">
        WhoRU
        <small>填入您的信息</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-form v-model="valid">
          <v-row no-gutters>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="您的名称"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="nick"
                :rules="nickRules"
                label="您的昵称"
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" md="4">
              <v-text-field
                v-model="phone"
                label="您的电话"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        
        <v-alert v-if="!valid" type="info">我也厌倦了填问卷，但若您能留下联系方式，小寿星就能给您回信，我绝不会让其他人看见您的联系方式</v-alert>
        <v-alert v-else type="success">谢谢！你真好！</v-alert>
        <v-btn color="primary" @click="step = 2">Next</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="step > 2" step="2">
        填写您的祝福语
        <small>填入您的信息</small>
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="step = 3">Next</v-btn>
        <v-btn text @click="step--">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="step > 3" step="3">图片</v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="step = 4">继续</v-btn>
        <v-btn text @click="step--">返回</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">隐私</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="step = 1">预览</v-btn>
        <v-btn text>返回</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-app>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      step: 1,
      valid: false,
      name: '',
      nick: '',
      phone: '',
      nameRules: [
        v => !!v || '您需要填入您的姓名',
        v => v.length <= 10 || '您太长了！',
      ],
      nickRules: [
        v => v.length <= 10 || '您太长了！',
      ],
      email: '',
      emailRules: [
        v => !!v || '请输入邮箱',
        v => /.+@.+/.test(v) || '您输入的邮箱不合法',
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>