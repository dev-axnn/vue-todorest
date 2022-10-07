<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>

    <a @click="kakaoLogout()">logout</a>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const kakaoLogin = () => {
      window.Kakao.Auth.login({
        scope: "profile_nickname, profile_image, account_email",
        success: getKakaoAccount,
      });
    };

    const kakaoLogout = () => {
      // window.Kakao.Auth.logout((response) => {
      //   console.log(response);
      // });
      // if (!window.Kakao.Auth.getAccessToken()) {
      //   console.log("Not logged in.");
      //   return;
      // }
      // window.Kakao.Auth.logout(function () {
      //   alert("로그아웃 되었습니다.", window.Kakao.Auth.getAccessToken());
      // });
      // window.Kakao.API.request({
      //   url: "/v2/user/unlink",
      //   success: function (response) {
      //     console.log(response);
      //   },
      //   fail: function (error) {
      //     console.log(error);
      //   },
      // });
      // window.Kakao.init(window.kakaoKey); // 초기화
      // window.Kakao.isInitialized();

      // if (!window.Kakao.Auth.getAccessToken()) {
      //   // 토큰이 있는지 확인 (토큰 가져와보기)
      //   console.log("Not logged in.");
      //   return;
      // }

      // window.Kakao.Auth.logout(function () {
      //   // 카카오 로그아웃
      //   console.log(window.Kakao.Auth.getAccessToken());
      // });
      if (!window.Kakao.Auth.getAccessToken()) {
        console.log("Not logged in.");
        return;
      }

      window.Kakao.Auth.logout((response) => {
        //로그아웃
        alert("로그아웃");
        console.log("access token:", window.Kakao.Auth.getAccessToken());
        console.log("log out:", response);
      });
    };

    const getKakaoAccount = () => {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname; //카카오 닉네임
          const email = kakao_account.email; //카카오 이메일
          console.log("nickname", nickname);
          console.log("email", email);
          //로그인 처리 구현
          console.log(kakao_account);
          alert("로그인 성공!");
          router.push({
            name: "Todos",
          });
        },
        fail: (error) => {
          // this.$router.push("/errorPage");
          console.log(error);
        },
      });
    };
    return {
      kakaoLogin,
      kakaoLogout,
    };
  },
};
</script>

<style></style>
