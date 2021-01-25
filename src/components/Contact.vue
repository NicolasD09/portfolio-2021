<template>
  <div class="contact__container" id="Me-contacter">
    <div class="w-1/4 h-20 bg-red-700 rounded-lg error_message">
      <p>Tous les champs doivent être remplis</p>
    </div>
    <div class="w-1/4 h-20 bg-green-600 rounded-lg email_sent">
      <p>Votre message a bien été envoyé !</p>
    </div>
    <div class="main__container">
      <Title>Contact</Title>
      <div class="grid grid-cols-2 contact__main__container">
        <div class="flex flex-grow contact__form__container">
          <form class="flex flex-col gap-6" action="">
            <div class="input-group">
              <input
                v-model="surname"
                type="text"
                class="input-area"
                required
                id="surname"
              />
              <label for="surname" class="label">Nom</label>
            </div>
            <div class="input-group">
              <input
                v-model="name"
                type="text"
                class="input-area"
                required
                id="name"
              />
              <label for="name" class="label">Prénom</label>
            </div>
            <div class="input-group">
              <input
                v-model="email"
                type="email"
                class="input-area"
                required
                id="email"
              />
              <label for="email" class="label">Adresse mail</label>
            </div>
            <div class="input-group">
              <input
                v-model="objet"
                type="text"
                class="input-area"
                required
                id="objet"
              />
              <label for="objet" class="label">Objet</label>
            </div>
            <div class="input-group">
              <textarea
                class="input-area text-area"
                cols="50"
                rows="20"
                required
                v-model="message"
                id="message"
              ></textarea>
              <label for="message" class="label">Message</label>
            </div>
            <div class="hidden input-group">
              <input
                v-model="honeypot"
                class="input-area"
                required
                id="phone"
                type="tel"
              />
              <label for="phone" class="label">Phone</label>
            </div>
            <Button @click="submitForm" class="self-start">Envoyer</Button>
          </form>
        </div>
        <div
          class="flex flex-col items-center justify-center flex-grow text-34 contact__email__container text-light"
        >
          <p>Sinon, directement par e-mail :</p>
          <span class="text-orange">nicdx.dev@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

import Title from "../components/Title";
import Button from "./Button.vue";

export default {
  setup() {
    let email = ref("");
    let surname = ref("");
    let name = ref("");
    let objet = ref("");
    let message = ref("");
    let honeypot = ref("");

    const submit = () => {
      console.log(
        surname.value,
        name.value,
        email.value,
        objet.value,
        message.value
      );
      const popup = document.querySelector(".email_sent");
      popup.classList.toggle("active");
      setTimeout(() => {
        popup.classList.toggle("active");
      }, 3000);
    };

    const submitForm = async () => {
      if (
        name.value == "" ||
        surname.value == "" ||
        email.value == "" ||
        objet.value == "" ||
        message.value == "" ||
        honeypot.value != ""
      ) {
        this.errorEmail();
      } else if (honeypot.value == "") {
        await axios
          .post("https://submit-form.com/5yaFzLJu-zSPW8AwfjbL_", {
            surname: surname.value,
            name: name.value,
            email: email.value,
            object: objet.value,
            message: message.value,
          })
          .then((res) => {
            name.value = "";
            surname.value = "";
            email.value = "";
            objet.value = "";
            message.value = "";
            const popup = document.querySelector(".email_sent");
            popup.classList.toggle("active");
            setTimeout(() => {
              popup.classList.toggle("active");
            }, 3000);
          })
          .catch((res) => console.error(res));
      }
    };

    return {
      name,
      surname,
      objet,
      message,
      submitForm,
      email,
      submit,
      honeypot,
    };
  },
  components: { Title, Button },
};
</script>

<style scoped>
.input-group {
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
}

.input-group .input-area.text-area {
  height: 150px;
  padding-top: 5px;
}

.input-group .input-area {
  outline: none;
  border: 2px solid #dadce0;
  height: 50px;
  font-size: 18px;
  border-radius: 5px;
  padding-left: 10px;
  width: 100%;
  transition: all .3s ease-out;
}

/* .input-group .input-area:valid + .label {
  top: -15px;
  padding: 0 3px;
  font-size: 14px;
  color: #8d8d8d;
} */

.input-group .input-area:focus {
  border: 2px solid #7b61ff;
  transform: scale(1.04,1.04);
}

.input-group .label {
  color: #8d8d8d;
  position: absolute;
  top: 14px;
  left: 10px;
  background: #fdfdfd;
  transition: 300ms ease-in-out;
}

.input-group .input-area:focus + .label {
  top: -11px;
  padding: 0 3px;
  font-size: 14px;
  color: #7b61ff;
}

.hidden {
  display: none;
}

.error_message {
  position: absolute;
  top: 3em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  color: white;
  font-size: 19px;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.35);
  transition: all 0.5s ease-in-out;
  opacity: 0;
}

.error_message.active,
.email_sent.active {
  opacity: 1;
}
.email_sent {
  position: absolute;
  top: 3em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.35);
  transition: all 0.5s ease-in-out;
  color: white;
  font-size: 19px;
  opacity: 0;
}
</style>
