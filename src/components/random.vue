<template>
  <div class="container">
    <div class="classroom" :style="{ 'display' : classroomDisplay }">
      <h3>ห้อง</h3>
      <h1>{{ classroom[randomClassroomNum] || '?' }}</h1>
    </div>
    <div class="classnumber" :style="{ 'display' : classnumberDisplay }">
      <h3>เลขที่</h3>
      <h1>{{ randomClassnumberNum || '?' }}</h1>
    </div>
    <div class="lucky" :style="{ 'display' : luckyDisplay }">
      <h3>ผู้โชคดีได้แก่</h3>
      <h1>ห้อง {{ classroom[randomClassroomNum] }}</h1>
      <h1>เลขที่ {{ randomClassnumberNum }}</h1>
    </div>
    <br>
    <input type="button" value="สุ่ม" class="random-btn" @click="randomClassroomFunc()">
  </div>
</template>

<script>
export default {
  name: "random",
  data() {
    return {
      classroom: [],
      classlevel_num: this.$route.params.classlevel_nums,
      classlevel_room: this.$route.params.classlevel_rooms,
      classnumber: this.$route.params.classnumbers,
      randomClassroomNum: 0,
      randomClassroomDelay: 100,
      randomClassroomCount: 0,
      randomClassnumberNum: "",
      randomClassnumberDelay: 100,
      randomClassnumberCount: 0,
      classroomDisplay: "inline-block",
      classnumberDisplay: "inline-block",
      luckyDisplay: "none"
    };
  },
  methods: {
    randomClassroomFunc() {
      // Display classroom and classnumber and hide lucky
      this.classroomDisplay = "inline-block";
      this.classnumberDisplay = "inline-block";
      this.luckyDisplay = "none";

      // Get classroom
      this.classroom = [];
      for (let i = 1; i <= this.classlevel_room; i++) {
        this.classroom[i - 1] = this.classlevel_num + "/" + i;
      }
      // Number of classroom
      let lengthNum = this.classroom.length;
      let randomTimes = 45;
      this.randomClassroomNum = Math.floor(
        Math.random() * Math.floor(lengthNum)
      );
      this.randomClassroomCount += 1;
      if (this.randomClassroomCount > randomTimes / 2) {
        this.randomClassroomDelay += 10;
      }
      if (this.randomClassroomCount < randomTimes) {
        setTimeout(this.randomClassroomFunc, this.randomClassroomDelay);
      } else {
        this.randomClassroomDelay = 100;
        this.randomClassroomCount = 0;
      }
      if (this.randomClassroomCount == 0) {
        this.randomClassnumberFunc();
      }
    },
    randomClassnumberFunc() {
      // Number of student
      let lengthNum = this.classnumber;
      let randomTimes = 45;
      this.randomClassnumberNum = Math.floor(
        Math.random() * Math.floor(lengthNum)
      )+1;
      this.randomClassnumberCount += 1;
      if (this.randomClassnumberCount > randomTimes / 2) {
        this.randomClassnumberDelay += 10;
      }
      if (this.randomClassnumberCount < randomTimes) {
        setTimeout(this.randomClassnumberFunc, this.randomClassnumberDelay);
      } else {
        this.randomClassnumberDelay = 100;
        this.randomClassnumberCount = 0;
      }
      if (this.randomClassnumberCount == 0) {
        this.classroomDisplay = "none";
        this.classnumberDisplay = "none";
        this.luckyDisplay = "inline-block";
      }
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h3 {
  margin: 0;
}
.container {
  background: url(https://itcamp.in.th/14/static/img/bg-sec6.2d89848.png);
  background-size: cover;
  min-height: 100vh;
  color: #241b44 !important;
}

.classroom,
.classnumber,
.lucky {
  background: #fff;
  width: 20%;
  display: inline-block;
  margin: 25vh 30px 50px 30px;
  padding: 15px;
  border-radius: 5px;
  & > h3 {
    border-bottom: 2px dashed #ddd;
    padding-bottom: 8px;
    font-size: 28px;
  }
  & > h1 {
    padding-top: 8px;
    font-size: 48px;
  }
  box-shadow: 0 0 5px #fff;
}

.random-btn {
  font-family: "Kanit";
  font-size: 28px;
  background: #fff;
  border: 0;
  padding: 5px 35px;
  border-radius: 3px;
  box-shadow: 0 0 5px #fff;
}

@media screen and (max-width: 768px) {
  .lucky {
    width: 70%;
  }
}
</style>
