<template>
  <div class="recall_form flex column q-mt-lg justify-center">
    <div class="text-center text-white posit Rubik500 fz-32 q-pb-lg">ОСТАВЬТЕ ЗАЯВКУ</div>
    <q-input
        v-model="nameInput"
        type="text"
        outlined class="q-pb-md"
        label="Введите ваше имя"
        label-color="white"
        color="white"
        :rules="[ (val,rules) => val.length >= 3 || 'Минимальное количество 3 знака!!', (val,rules) => regexpName.test(nameInput) || 'Ввод только кириллица']"
    />
    <q-input
        v-model="phoneInput"
        type="text"
        outlined class="q-pb-md"
        label="Введите ваш телефон"
        label-color="white"
        color="white"
        mask="+7(###)###-##-##"
    />
    <div class="flex no-wrap items-center">
      <div class="fz-16 Rubik500 text-white">Даю согласие на обработку персональных данных</div>
      <div class="">
        <label class="container">
          <input type="checkbox" v-model="checkBoxInput">
          <span class="checkmark"></span>
        </label></div>
    </div>

    <q-btn class="q-pt-sm q-px-md form_send_btn fz-16 Rubik500" @click="sendFormToCall">
      ОТПРАВИТЬ
      <q-tooltip>
        Для отправки заполните все поля
      </q-tooltip>
    </q-btn>
  </div>
</template>
<script setup>
import {ref} from "vue";
import axios from "axios";
import {useQuasar} from "quasar";

const $q = useQuasar()
const regexpName = /^[а-яА-ЯёЁ\s]/;


/* Init input */
const nameInput = ref('')
const phoneInput = ref('')
const checkBoxInput = ref(true)

/*----------------------------------------- Функция получения последней заявки  --------------------------------------*/
let count
let lastId
const getLastId = async () => {
  let next_id = await axios.get('https://jil-mos.isp.sprint.1t.ru/assets/getInfo.php')
  let id = await next_id.data
  lastId = await id.split('}')
  count = lastId.length - 1
  console.log(count)
}
/*----------------------------------------- Функция отправки  в телеграм  --------------------------------------*/
const emit = defineEmits(['closeModal'])
const sendFormToCall = async () => {
  try {
    if (phoneInput.value.length < 16 || nameInput.value.length <= 3 || checkBoxInput.value === false) {
      $q.notify({
        message: 'Не все поля заполнены',
        icon: 'warning',
        color: 'red'
      })
    } else {
      $q.loading.show({
        message: 'Ваша заявка <b>process</b> в процессе <br/><span class="text-amber text-italic">Пожалуйста подождите....</span>',
        html: true
      })
      await getLastId()
      let res = await axios.post("https://jil-mos.isp.sprint.1t.ru/assets/telegramRequest.php", {
        Project: 'Жилищник',
        title: 'Заявка на услугу!',
        id: count,
        name: nameInput.value,
        phone: phoneInput.value
      })
      if (res.status === 200) {
        emit('closeModal', false)
        document.cookie = "Call=true ; path=/index.html ; max-age=86400"
        console.log('OK')
        $q.loading.hide()
        nameInput.value = ''
        phoneInput.value = ''
      } else {
        console.log('Error')
        alert('ERROR')
      }
      emit('reCallback', false)
    }
  } catch (e) {
    console.log(e)
  }
}


</script>
<style scoped>
/* The container */
.container {
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: relative;
  display: block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
}

.unCheckmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: relative;
  display: none;
}

.container .unCheckmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #ee1212;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
