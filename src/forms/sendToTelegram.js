import {ref} from "vue";
import {useQuasar} from "quasar";
import axios from "axios";

const $q = useQuasar()
/* Init input */
const nameInput = ref('')
const phoneInput = ref('')


/*----------------------------------------- Функция получения последней заявки  --------------------------------------*/
let count
let lastId

const getLastId = async ()=>{
    let next_id = await axios.get('https://jil-mos.isp.sprint.1t.ru/assets/getInfo.php')
    let id = await next_id.data
    lastId = await id.split('}')
    count = lastId.length-1
    console.log(count)
}

/*----------------------------------------- Функция отправки  в телеграм  --------------------------------------*/
const emit = defineEmits(['closeModal'])
const sendFormToCall = async () => {
    try {
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
    } catch (e) {
        console.log(e)
    }
}
