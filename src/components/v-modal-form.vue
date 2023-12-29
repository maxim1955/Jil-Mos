<template>
  <q-dialog
      :model-value="persitstent"
      persistent transition-show="scale"
      transition-hide="scale"
      @hide="emit('closeModal',false)">
    <div class="recall_form flex column q-mt-lg justify
      center">
      <div class="flex justify-end q-pb-lg">
        <q-btn flat v-close-popup icon="close" color="red" class="btn_close"/>
      </div>
      <div class="text-center text-white posit Rubik500 fz-32 q-pb-lg items-end">ОСТАВЬТЕ ЗАЯВКУ</div>
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
          mask="+7(###)###-##-##"/>
      <div class="flex">
        <div class="fz-16 Rubik500 text-white">Даю согласие на обработку персональных
          <br> данных
          <label class="container">
            <input type="checkbox" v-model="checkBoxInput">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <q-btn class="q-pt-sm q-px-md form_send_btn fz-16 Rubik500 cursor"  @click="sendFormToCall">
        ОТПРАВИТЬ
        <q-tooltip>
          Для отправки заполните все поля
        </q-tooltip>
      </q-btn>
    </div>
  </q-dialog>

</template>
<script setup>
import {ref} from "vue";
import {useQuasar} from "quasar";
import axios from "axios";

const $q = useQuasar()
/* Init input */
const nameInput = ref('')
const phoneInput = ref('')
const checkBoxInput = ref(true)
const regexpName = /^[а-яА-ЯёЁ\s]/;
const props = defineProps({
  persitstent: {
    type: Boolean,
    required: true
  }
})


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
        message: 'Ваша заявка <b>process</b> в процессе <br/>' +
            '<span class="text-amber text-italic">Пожалуйста подождите....</span>',
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
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: relative;
  left: 10%;
  bottom: 24px;
  display: block;
  height: 25px;
  width: 25px;
  background-color: #eee;
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
  position: absolute;
  display: none;
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

.btn_close {
  max-width: fit-content;
}
</style>
