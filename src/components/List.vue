<template>
  <div class="todo-container">
    <section v-bind:class="{ show: show, 'todo-list': show, hidden: !show }">
      <div class="tasks-container">
        <div
          class="task-container"
          v-for="(task, index) in tasks"
          v-bind:class="{ checked: !task.state }"
          :key="index"
        >
          <div class="task-card">
            <details>
              <summary class="task">{{ task.title }}</summary>
              <hr />
              <p>
                {{ task.description }}
              </p>
              <code v-if="task.url">
                <a target="_new" :href="task.url">{{ task.url }}</a>
              </code>
              <label>{{ "✎" + task.created_at }}</label>
              <label>{{
                task.completed_at ? "✓" + task.completed_at : ""
              }}</label>
            </details>
          </div>
          <div class="task-options">
            <span class="removeTask" v-on:click="deleteTask(task)"></span>
            <span class="checkTask" v-on:click="checkTask(task, $event)"></span>
          </div>
        </div>
      </div>
    </section>
    <button
      v-bind:class="{ completed: completed, 'add-task-btn': true }"
      v-on:click="changeSections"
    >
      <span>{{ show ? "+" : "◀" }}</span>
    </button>
    <section v-bind:class="{ show: !show, 'todo-list': !show, hidden: show }">
      <h1>Add Tasks</h1>
      <label for="title">Title<span title="required">*</span></label>
      <input type="text" name="title" id="title" v-model="title" />
      <sup v-if="errors['title']">{{ errors["title"] }}</sup>
      <label for="description"
        >Description<span title="required">*</span></label
      >
      <textarea
        type="text"
        name="description"
        id="description"
        v-model="description"
      ></textarea>
      <sup v-if="errors['description']">{{ errors["description"] }}</sup>
      <label for="url">Link</label>
      <input type="text" name="url" id="url" v-model="url" />
      <input type="submit" value="Add to list" @click="addTask" />
    </section>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      tasks: [],
      task: "",
      completed: false,
      show: true,
      title: "",
      description: "",
      url: "",
      errors: [],
    };
  },
  created() {
    if (localStorage.data) {
      let data = JSON.parse(localStorage.data);
      if (data.dateCache != this.getDateFormat()) {
        localStorage.removeItem(data);
        this.tasks = [];
      } else {
        this.tasks = data.tasks;
      }
    } else {
      this.setInLocalStorage();
    }
  },
  methods: {
    addTask: function() {
      this.checkForm();
      this.registerTask();
      this.changeComplete();
    },
    registerTask: function() {
      var objTask = {
        created_at: this.getCurrentDate(),
        completed_at: null,
        title: this.title,
        description: this.description,
        url: this.url,
        state: true,
      };
      this.tasks.unshift(objTask);
      this.setInLocalStorage();
    },
    checkForm: function(e) {
      if (this.title && this.description) {
        return true;
      }
      if (!this.title) {
        this.errors["title"] = "Title is required.";
      }
      if (!this.description) {
        this.errors["description"] = "Description is required.";
      }
      this.showError();
      e.preventDefault();
    },
    showError() {
      setTimeout(() => {
        this.errors = [];
      }, 3000);
    },
    changeComplete: function() {
      this.completed = !this.completed;
      setTimeout(() => {
        this.completed = false;
      }, 2000);
      this.title = "";
      this.description = "";
      this.url = "";
    },
    changeSections: function() {
      this.completed = false;
      this.show = !this.show;
    },
    setInLocalStorage: async function() {
      const data = {
        dateCache: this.getDateFormat(),
        tasks: this.tasks,
      };
      localStorage.data = JSON.stringify(data);
    },
    getCurrentDate: function() {
      const today = new Date();
      return (
        ("0" + today.getDate()).slice(-2) +
        "/" +
        ("0" + today.getMonth()).slice(-2) +
        "/" +
        today.getFullYear() +
        " " +
        today.getHours() +
        ":" +
        today.getMinutes()
      );
    },
    getDateFormat() {
      return this.getCurrentDate()
        .slice(0, 10)
        .replaceAll("/", "");
    },
    checkTask: function(task, e) {
      task.completed_at = task.state ? this.getCurrentDate() : null;
      task.state = !task.state;
      const taskElement = e.target.parentNode.parentNode;
      taskElement.classList.toggle("checked");

      this.setInLocalStorage();
    },
    deleteTask: function(task) {
      this.tasks.shift(task);
      this.setInLocalStorage();
    },
  },
};
</script>

<style scoped>
@import "../assets/css/keyframe/animateDown.css";
.todo-container {
  width: 50vw;
  background-color: #ffffff;
  height: 70vh;
  margin: auto;
  margin-top: 100px;
  box-shadow: 0px 0px 10px 1px #333;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 20px;
}
section.todo-list {
  width: 100vw;
  position: relative;
  margin: 5px 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.show {
  transition: 5s;
  display: block;
}
.hidden {
  transition: 5s;
  display: none;
}
.tasks-container {
  overflow-y: auto;
  padding: 5px;
  height: 60vh;
}
.task-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3em;
  border: 1px solid gray;
  margin: 5px;
  border-radius: 10px;
  text-align: left;
}
.task-card {
  flex: 10;
  flex-basis: auto;
}
.task-options {
  text-align: left;
  flex: 2;
}
details {
  transition: 5s;
  margin: 5px;
}
details p {
  font-family: "Oswald";
}
details[open] p {
  animation: animateDown 0.5s linear forwards;
}
summary.task {
  font-weight: 600;
  width: 100%;
}
code {
  display: block;
  background-color: #7b7360;
  padding: 10px;
  margin: 10px 0px;
  border-left: 5px solid #565247;
  word-break: break-all;
}
code a {
  color: #ffffff;
}
.removeTask,
.checkTask {
  height: 20px;
  width: 20px;
  transition: 1s;
  cursor: pointer;
  display: inline-block;
  margin: 0px 5px;
  margin-top: 5px;
}
.removeTask {
  background-image: url("../assets/images/trash.png");
  background-size: 100%;
  opacity: 0;
  transition: 1s;
}
.checkTask {
  background-image: url("../assets/images/checkbox.png");
  background-size: 100%;
  background-position: 0px -18px;
}
.checked .checkTask {
  background-position: 0px 0px;
}
.task-container:hover .removeTask {
  opacity: 1;
  transition: 1s;
}
.checked .removeTask {
  display: none;
}
.task-container label {
  font-size: 12px;
  padding: 10px 5px;
}
.task-container label:first-child {
  color: coral;
}
.task-container label:last-child {
  color: green;
}
button.add-task-btn {
  border: 0px;
  background-color: #565247;
  font-size: 30px;
  color: #fff;
  transition: 1s;
  cursor: pointer;
  border-radius: 15px;
  width: 50px;
  transition: 2s;
}
button.add-task-btn.completed:before {
  opacity: 1;
  transition: 2s;
}
button.add-task-btn:before {
  content: "Task added ✓";
  position: absolute;
  width: 19px;
  color: #ffffff;
  font-size: 11px;
  -ms-writing-mode: tb-rl;
  writing-mode: tb-rl;
  -webkit-text-orientation: upright;
  text-orientation: upright;
  top: 20px;
  text-transform: uppercase;
  opacity: 0;
  transition: 3s;
}
.completed:before {
  opacity: 1;
  transition: 3s;
}
h1 {
  margin: 0px;
  color: #6a6453;
}
label {
  text-align: left;
  padding: 10px 5px;
}
#title,
#url,
#description {
  border: 1px solid gray;
  padding: 10px;
  border-radius: 10px;
}
textarea#description {
  height: 150px;
  resize: none;
}
input[type="submit"] {
  margin: 15px 0px;
  padding: 10px;
  background-color: #565247;
  color: #ffffff;
  font-size: 15px;
  border-radius: 10px;
  cursor: pointer;
  border: 0px;
}
sup {
  text-align: left;
  font-size: 9px;
  color: #d24444;
  margin-left: 7px;
}
@media screen and (max-width: 800px) {
  section.todo-list[data-v-264bddce] {
    margin: 0px;
  }
  .todo-container {
    width: 90vw !important;
    margin-top: 18vw !important;
  }
  .removeTask {
    display: block;
    opacity: 1;
  }
  .task-options[data-v-264bddce] {
    text-align: left;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .task-container label[data-v-264bddce] {
    font-size: 9px;
  }
}
@media screen and (max-width: 576px) {
  .todo-container {
    width: 95vw !important;
    margin-top: 35vw !important;
  }
  section.todo-list[data-v-264bddce] {
    margin: 0px;
  }
  .removeTask {
    display: block;
    opacity: 1;
  }
  .task-options[data-v-264bddce] {
    text-align: left;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .task-container label[data-v-264bddce] {
    font-size: 8px;
  }
}
</style>
