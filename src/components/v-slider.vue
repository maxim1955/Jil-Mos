<template>
  <div class="container">
    <swiper
        :modules="modules"
        :slidesPerView="3"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="{
        '320': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '640': {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1120': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      '1300': {
        slidesPerView: 3.5,
        spaceBetween: 50,
      },
    }"
    >
      <swiper-slide v-for="rev of reviewsList" class="flex justify-center items-center">
        <div style="" class="review-item flex column justify-between">
          <p class="Rubik500">
            {{ rev.name }}
            <span style="color: yellow; font-size: 20px;" v-for="n of rev.rating">
              ★
            </span>
            {{ rev.rating }}
          </p>
          <p class="Rubik500 text-grey-8 review-text">
            {{ rev.body }}
          </p>
          <a :href="rev.link"
             style="text-decoration: underline;" target="_blank" rel="noopener noreferrer" class="review-link link-3">
            <span class="text">Подробнее</span>
            <span class="img">
            <svg viewBox="0 0 48 20"
                 fill="none"
                 stroke="#1160e8"
                 stroke-width="3">
              <path d="M1,19l9-9-9-9"/>
              <path d="M11,19l9-9-9-9"/>
              <path d="M21,19l9-9-9-9"/>
            </svg>
    </span>
          </a>
          <p class="Rubik500 text-grey-8">

            <a
                :href="rev.rating"
                target="_blank" rel="noopener noreferrer" class="review-link">
              <img :src="rev.image" class="img_reviews"/>
            </a>
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>
<script setup>
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
const modules = [Navigation, Pagination, Scrollbar, A11y];
const reviewsList = [
  {
    name: 'Аноним5533586',
    rating: 5,
    body: "Обратилась в фирму СТМ по замене счетчиков воды.Позвонили, обсудили заранее удобное время, в связи с загруженностью работы, оно очень ограниченное.На следующий день мастер позвонил за час и приехал во время, как и договаривались.Все очень быстро, аккуратно, чист.",
    link: 'https://otzovik.com/review_15083228.html',
    image: 'src/assets/reviews_img/otzovik_reviews.png'
  },
  {
    name: 'Vasiliy377',
    rating: 5,
    body: 'Приехал мастер, сделал поверку, счетчики не прошли, сделал замену. Все понравилось, сделал хорошо. Спасибо!',
    link: 'https://otzovik.com/review_15178878.html',
    image: 'src/assets/reviews_img/otzovik_reviews.png'
  },
  {
    name: 'Макар Зубко',
    rating: 5,
    body: 'Оператор очень внимательная и позитивная девушка: все обстоятельно разъяснила, объяснила, оформила заказ. Мастер пришел в указанное время. Вежливый, аккуратный, все четко по делу. Поверил счетчики, оформил документы. Сразу видно, что человек знает свою работу. Цена хорошая. Замечений нет, работой доволен, обращюсь еще.',
    link: 'https://zoon.ru/msk/utility_service/kompaniya_stm_na_prospekte_mira/#comment6580894e619e7a760c0d1b1b',
    image: 'src/assets/reviews_img/zoon_reviews.png'
  },
  {
    name: 'Юлия Леонова',
    rating: 5,
    body: 'Мастера вызвала для поверки счетчиков на выходной день, человек приехал точно к оговоренному времени (и даже еще за час позвонил и предупредил), с работой долго не возился (максимум минут 20—30 ушло на все), по завершении выдал документы и чек. Профессиональный подход не может не радовать, поэтому смело рекомендую организацию.',
    link: 'https://zoon.ru/msk/utility_service/kompaniya_stm_na_prospekte_mira/#comment655e360565633558ce063e0e',
    image: 'src/assets/reviews_img/zoon_reviews.png'
  },
  {
    name: 'Ольга П.',
    rating: 5,
    body: 'Благодарю сотрудника СТМ - мастера Рузаева за отличную работу. Поверка водосчетчика была проведена очень профессионально, все грамотно объяснил, по приборам показал, как проводится поверка, я очень довольна работой! Мастер заранее предупредил о визите и прибыл вовремя, а также хочу отметить отличную работу всей команды и спасибо диспетчеру за все информацию, которую мне рассказали перед приходом сотрудника, сообщили номер заявки, объяснили, что я должна сделать после проверения поверки.\n' +
        'Буду и в следующий раз обращаться в эту организацию, когда наступит срок для другого счетчика.\n' +
        'Спасибо всем!',
    link: 'https://yandex.ru/web-maps/org/136170273560/reviews?reviews[publicId]=faum5uv856ye0zcda3j0qj3x58&utm_source=review',
    image: 'src/assets/reviews_img/yandex_reviews.png'
  },
  {
    name: 'Никита Сахаров',
    rating: 5,
    body: 'Спасибо огромное мастеру Евтееву Григорию! Всё очень оперативно, аккуратно! Позвонил за час, пришел минута в минуту! Рассказал как будет проходить поверка. Во время поверки рассказал про все тонкости, что бывает со счетчиками, какие лучше ставить, как влияет качество воды и труб на состояние приборов учета. Организация работы тоже на высоте - позвонили оставить заявку на поверку и сразу же в ближайший день назначили дату! Всем поверять счетчики только в СТМ!!!',
    link: 'https://yandex.ru/web-maps/org/136170273560/reviews?reviews[publicId]=euh7401frhxzvj6q1q1hbg9494&utm_source=review',
    image: 'src/assets/reviews_img/yandex_reviews.png'
  },
  {
    name: 'VSADNIK 07',
    rating: 5,
    body: 'Сегодня была поверка счетчика холодной воды. Приехал Мастер Грицай Александр позвонил с утра, но я не смог вовремя ответить, поэтому работы проводились позже чем могли бы. Мастер приехал со своим оборудованием и тапочками, что порадовало, пролил через оборудование воду, снял показатели на фото, повесил у счетчика спец.бирку, заполнил бумаги, принял оплату, все быстро и четко! Меня все устроило! Делаю у них поверку уже не первый раз, и менять компанию пока не вижу смысла!',
    link: 'https://maps.app.goo.gl/MMpMqoeBAu3xaGhi7',
    image: 'src/assets/reviews_img/google_reviews.png'
  },
  {
    name: 'Александр Чапарский',
    rating: 5,
    body: 'Появилась необходимость сделать поверку 4 приборов учёта воды. Заказал поверку в этой конторе, были сомнения из-за отзывов. Как я понял, это отзывы тех, у кого счётчики поверку не прошли. К счастью, это не мой случай. Все 4 прибора годны, поверку делал сотрудник Евтеев',
    link: 'https://maps.app.goo.gl/nk9sEhQRA1bRKrcR9',
    image: 'src/assets/reviews_img/google_reviews.png'
  }
]
</script>
<style>
.swiper {
  width: 90% !important;
}

.swiper-slide {
  display: flex !important;
}

.img_reviews {
  width: 50%;
}

.review-link {
  font-family: 'Rubik-regular';
  text-decoration: none !important;
  font-size: 15px;
}

.review-link:hover {
  color: purple !important;

}

a svg *,
a span.text {
  -webkit-transition-duration: 200ms;
  -o-transition-duration: 200ms;
  transition-duration: 200ms;
  -webkit-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  shape-rendering: geometricPrecision;
}

a.link-3 {
  color: #1160e8;
}

a.link-3 svg {
  width: 40px;
}

a.link-3:hover span.text {
  -webkit-transform: translate(-10px, 0);
  -ms-transform: translate(-10px, 0);
  transform: translate(-10px, 0);
}

a.link-3:hover svg path {
  -webkit-transform: translate(10px, 0);
  -ms-transform: translate(10px, 0);
  transform: translate(10px, 0);
}

a.link-3 svg path:nth-child(1),
a.link-3:hover svg path:nth-child(3) {
  opacity: 0;
}

a.link-3:hover svg path:nth-child(1),
a.link-3 svg path:nth-child(3) {
  opacity: 1;
}

.review-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  box-orient: vertical;
}

</style>
