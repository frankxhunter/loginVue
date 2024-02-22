<template>
  <div class="contenedor">
    <div class="profilesContent">
      <div class="search">
        <v-icon class="icon_search" size="24" color="white">mdi-magnify</v-icon>
        <input type="text" placeholder="Search"/>
      </div>
      <div class="card_profiles" v-for="profile in profiles" :key="profile.id">
        <v-avatar class="avatar_profiles" color="primary" size="54">
          <img :src="profile.url" alt="" />
        </v-avatar>
        <div class="text_title_chat">
          <div class="name_text_title_chat">{{ profile.name }}</div>
          <div class="lastSeen_text_title_chat">Hola que tal</div>
        </div>
      </div>
    </div>
    <div class="chatContent">
      <div class="title_chat">
        <v-avatar class="avatar_profiles" color="primary" size="45">
          <img :src="profileCurrent.url" alt="" />
        </v-avatar>
        <div class="text_title_chat">
          <div class="name_text_title_chat">{{ profileCurrent.name }}</div>
          <div class="lastSeen_text_title_chat">Last seen 32 mint ago</div>
        </div>
        <v-divider></v-divider>
        <button class="button_title_chat">
        <v-icon color="white">mdi-magnify</v-icon>
        </button>
         <button class="button_title_chat">
        <v-icon color="white">mdi-phone</v-icon>
        </button>
         <button class="button_title_chat">
        <v-icon color="white">mdi-dots-vertical</v-icon>
        </button>
        
      </div>
      <div class="content_chat" id="scroll" v-for-updated="updateScroll">
        <div
          class="message_content_chat"
          v-for="message in messagesCurrent"
          :key="message.id"
          v-for-updated="updateScroll"
          :class="{ message_myself: message.myself }"
        >
          {{ message.text }}
          <p class="time_message_content_chat" style="margin: 0">5:45pm</p>
        </div>
      </div>
      <v-form class="form_chat">
        <input class="input_form" type="text" v-model="messageCurrent" placeholder="Message"/>
        <button class="button_form" @click.prevent="sendMessage">
          <v-icon class="icon_button_form" color="#766ac8" size="20"
            >mdi-send</v-icon
          >
        </button>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageCurrent: "",
      profileCurrent: {
        name: "Jhon",
        url: "https://cdn.vuetifyjs.com/images/john.jpg",
      },
      messagesCurrent: [
        {
          myself: true,
          text: "Hola como estas",
        },
        {
          myself: false,
          text: "Hola como estas",
        },
        {
          myself: false,
          text: "Hola como estas",
        },
      ],
      profiles: [
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          name: "Jhon",
          url: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
      ],
    };
  },
  methods: {
    sendMessage() {
      this.messagesCurrent.push({
        text: this.messageCurrent + "",
        myself: true,
      });
      this.messageCurrent = "";
    },
    updateScroll() {
      const scroll = document.getElementById("scroll");
      scroll.scrollTop = scroll.scrollHeight;
    },
  },
};
</script>

<style>
* {
  color: #ffffff;
}
.contenedor {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  height: 100vh;
  scrollbar-width: thin;
  scrollbar-color: #888 #f5f5f5;
}
::-webkit-scrollbar {
  width: 1px;
  background-color: #181717;
}
::-webkit-scrollbar-thumb {
  background-color: #888;
}
::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}
.profilesContent {
  background-color: #212121;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.search {
    display: flex;

  margin: 20px;
  background-color: #3f3f3f;
  font-size: 16px;
  border-radius: 30px;
}
.search input:focus {
  outline: none;
}
.icon_search{
    margin: 5px;
}
.button_title_chat{
    margin: 2px 5px;
}
.card_profiles {
  display: flex;
  align-items: center;
  margin: 5px;
  border-radius: 15px;
}
.card_profiles:hover {
  background-color: #292929;
}
.avatar_profiles {
  margin: 3px;
  margin-left: 10px;
}

.chatContent {
  padding: 0;
  background-image: url("../assets/pattern.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  grid-template-columns: 1.4fr;
  grid-template-rows: 0.3fr 3.5fr 0.4fr;
  gap: 0px 0px;
  grid-template-areas:
    "titleChat"
    "contentChat"
    "inputChat";
}
.title_chat {
  grid-area: titleChat;
  background-color: #212121;
  display: flex;
  align-content: center;
  padding: 5px 7px;
}
.text.title_chat {
  display: flex;
  flex-direction: column;
}
.name_text_title_chat {
  margin: 0;
  font-size: 20px;
  padding-left: 5px;
}
.lastSeen_text_title_chat {
  margin: 0;
  font-size: 12px;
  color: #aaaaaa;
  padding-left: 5px;
}
.content_chat {
  grid-area: contentChat;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  padding: 10px;
  height: 84vh;
}

.message_content_chat {
  background-color: #212121;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  max-width: 65%;
  border-radius: 15px;
  align-self: flex-start;
}
.message_myself {
  align-self: flex-end;
  background-color: #766ac8;
}

.time_message_content_chat {
  display: inline;
  font-size: 12px;
  right: 0;
  bottom: 0;
  text-align: right;
  right: 0;
  color: #aaaaaa;
}
.form_chat {
  grid-area: inputChat;
  display: flex;
  padding: 0.25rem;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rem;
  padding: 0 3rem;
  box-sizing: border-box;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 20px;
}
.input_form {
  background-color: #212121;
  border: none;
  padding: 0 1rem;
  flex-grow: 1;
  border-radius: 2rem;
  margin: 0.15rem;
}
.input_form:focus {
  outline: none;
}
.button_form {
  background-color: #212121;
  border: none;
  width: 2rem;
  margin: 0.25rem;
  border-radius: 50%;
  outline: none;
  color: black;
  display: grid;
}
.icon_button_form {
  margin: auto;
}
</style>