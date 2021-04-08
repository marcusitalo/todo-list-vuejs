<template>
  <div class="title">
    <header class="current-date">
      <div class="date">
        <span class="day">{{ date.dayNum }}</span>
        <span class="month">{{ date.month }}</span>
        <span class="year">{{ date.year }}</span>
        <div class="today">
          <span>{{ date.dayName }}</span>
        </div>
      </div>
    </header>
    <img src="@/assets/images/logo.png" class="logo" />
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      tasks: [],
      task: "",
      date: {
        dayNum: "",
        month: "",
        year: "",
        dayName: "",
      },
      week: [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
      ],
      months: [
        "JAN",
        "FEV",
        "MAR",
        "ABR",
        "MAI",
        "JUN",
        "JUL",
        "AGO",
        "SET",
        "OUT",
        "NOV",
        "DEZ",
      ],
    };
  },
  mounted: function() {
    this.getCurrentDay();
  },
  methods: {
    getCurrentDay: function() {
      const today = new Date();
      this.date.dayNum = ("0" + today.getDate()).slice(-2);
      this.date.month = this.months[today.getMonth()];
      this.date.year = today.getFullYear();
      this.date.dayName = this.week[today.getDay()];
    },
  },
};
</script>

<style scoped>
.title {
  position: fixed;
  display: flex;
  top: 10px;
  left: 10px;
}
.logo {
  width: 80px;
  margin: 0px;
}

header {
  color: white;
  border: 1px solid;
  background-color: #00000066;
  width: 78px;
}
.date {
  display: flex;
  flex-flow: column;
  width: 78px;
  top: 11px;
  position: relative;
}
.day {
  font-size: 22px;
  margin-top: -10px;
  font-family: "Oswald";
}
.month {
  font-size: 13px;
  margin-top: -7px;
  font-family: "Oswald";
}
.year {
  font-size: 11px;
  margin-top: -3px;
  font-family: "Oswald";
}
.today {
  font-size: 7px;
  font-family: "Oswald";
}
</style>
