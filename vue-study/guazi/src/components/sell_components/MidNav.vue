<template>
  <div class="total-header">
    <a href></a>
    <div class="phone-area">
      <input class="phone-input" placeholder="请输入手机号码，6744万车主已提交" />
      <button class="phone-btn-1">高价卖车</button>
      <button class="phone-btn-2">快速估价</button>
    </div>
    <div class="phone">
      免费咨询：
      <span>400-023-1529</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MidNav"
};
</script>

<style scoped>
.total-header {
  width: 100%;
  height: 64px;
  background-color: #fff;
  position: fixed;
  top: 0;
  border: 1px solid rgba(163, 163, 163, 0.5);
}
a {
  display: block;
  background-image: url(https://image.guazistatic.com/gz01190923/15/39/f3eebb2bedbd15fc6fb8e3226bf35e44.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 55px;
  height: 55px;
  margin-top: 5px;
  margin-left: 165px;
  float: left;
  text-indent: -9999px;
}
.phone-area {
  position: relative;
  z-index: 1;
  width: 755px;
  height: 55px;
  padding-top: 10px;
  margin: 0 0 0 280px;
}
.phone-input {
  float: left;
  width: 388px;
  height: 45px;
  padding: 19px 15px;
  line-height: 18px;
  color: #495056;
  font-size: 18px;
  font-family: "microsoft yahei";
  border: 1px solid rgba(163, 163, 163, 0.5);
  background: #fff;
  box-sizing: border-box;
}
.phone-btn-1 {
  background: #22ac38;
  margin-right: 15px;
}
.phone-btn-2 {
  background: #6ac579;
  margin-right: 15px;
}
.phone-btn-1,
.phone-btn-2 {
  float: left;
  width: 128px;
  height: 45px;
  border: none;
  font-size: 20px;
  font-family: "microsoft yahei";
  color: #fff;
}
.phone {
  width: 300px;
  height: 20px;
  padding-left: 30px;
  line-height: 20px;
  font-size: 22px;
  color: #495056;
  background-position: 0 0;
  position: absolute;
  right: 125px;
  top: 22px;
}
.phone {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABI5JREFUWAntWF9oW2UUP+feJE2H7USpUAhubkmz/pFNhw92wiJb22Ss2axm4oN7UoQ6fHFPIgxfFBGZPomIOgXFNXVNV1yazkmHCoKICmv6ZwmNuD9QULe269Y1ucfzMe92e//k3iY3Pi0v9/vO+Z3f+eXc7zvflwDc/VRXAXQaHoslmsCrBGClNJ9Op/JO46rF2QqM9iaeAJn6kfBJQGgCgiWF8NXMyYGPqk3uJN5S4I54vKEBfW8B4EuI6NGSEdBlZam4bWxsaE5rr8VYMiON7N9/b6NU9zWi9LJenMAjYDPWe18wi3XbZirQD963WUZXuWRc+hd3706sL4dxw2cQ2LX36RAnf96OHBE2yvdA3A5Xrd8gUJKkFq5evRNi3jgHGWe5jp1w2GEMArkyPrsg1Y9Anbv2PBVS57V4GgUq8LfjRIjrfD5PxDG+AqBB4ArALBAtOOUiwsecYivBGQR+OwIXCWHSCRkRFUmB006wlWIMAgGSJVDolB0hAfyuKBTPjAwM2GGr8ZsI5G2JmCSCG1bELC6/srCya2xkMG2FcctuKjA9nMxy7xi1TEJ07cyZoX8s/S46TAUK/hIVjwJQySLXw9HeA89a+Fw1y1Zs+enJP4Jb2rfyuduqx/ASYDNsD2xuO144n13U+92cW1ZQJFFWikf45mIqQBx19V54j2E1PUksKygE5s9PzW0Ot/u5YDvF3PBB7AiG26/mpid+MvhcMpStoMixfBXe4bX4S5l8b3bHE2VvPmVibV22AsfHk4tKEfq57VwzY+NX7ZcQj0XjibCZv1pb2VeskudnshdDra18/GFMtWmfLLKBm2dnILTpRGFmZknrq3bsSKBIkpvK/hwMt23g9bjNLCnvlGYPejua7msbunAhWzTDVGKzfcUaUlqg5Vf4R9OPGtuqIVdyz/oH4MNIJLLqN8wtUELu6elrXhXgYLLmFtHdm3hIkvA7FrPRip8U+vjPPPRPTCRvCkws1heAOvkTPiIf5ekPWIKj6ZHkWat4rX3NAkVwV7xvh4yeUyyyUUumHXP/HOabzmEqFf2y13OM1+/2O34+oQi/ILx5ZDSVKtyxG0cVCRQ0fNQ9BxJ9zmvS5HX+l+jWvVLmDbTOmJqbF8ElAuX1zPDgp2Z+YXO8SfQEuZmJc8EtHYtcxR697/YcsY7FeW/PdQOObeAvuC8Ubt+0IdDy/ezs1HUdpHKBgkicIMGWVnE9i+iJ1zRH2Cr5pC4+lcZz09m/tLEVV1AlYcKzbojkL9nMN3k5P5X9RuUWz7W0GW3cqvHoycE3FFAOl7mercJbTojm9T5XBArSTGrwXYXgIK/8K/okTub8+2ZZQfxKj3VNoCDODCe/JKXUzcl+1Seym/OfAO+fTiV/0+OqXoN6wtzM5KVAa8txWZH9/MofKduG1GCC1PX5uUOFQsFwRFbcB1Xucs/ufc90SoCvcTuJcqM2LQb3wc9uXMFD4tZkxlVTgWrC6N7E4yThAUTayffvB9nOQzxHpHzAG8yw7tQ48fxfBKoJxSVCbmy837PskTKZE5dV+91nLSvwL3OQTLJiJepeAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: 20px 20px;
}
</style>