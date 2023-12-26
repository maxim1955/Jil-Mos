<template>
  <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="100"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide>
      <div style="border: 1px solid black; padding: 3%; max-width: 350px; border-radius: 20px; min-height: 350px;">
        <p>Обратилась в фирму СТМ по замене счетчиков воды.</p>
        <p>Позвонили, обсудили заранее удобное время, в связи с загруженностью работы, оно очень ограниченное.</p>
        <p>На следующий день мастер позвонил за час и приехал во время, как и договаривались.<br/>Все очень быстро,
          аккуратно, чист...<a href="https://otzovik.com/review_15083228.html"
                                       style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">Подробнее</a>
        </p>
        <p>
          <a
            href="https://otzovik.com/reviews/kompaniya_po_poverke_schetchikov_sovremennie_tehnologii_v_metrologii/?order=date_desc&amp;ratio=5%20"
            target="_blank" rel="noopener noreferrer">
            <img src="images/Otzovik11.png" alt="" width="91" height="42"/></a>
          Аноним55386
            <span style="color: yellow; font-size: 20px;">
              ★★★★★
            </span>
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div style="border: 1px solid black; padding: 3%; max-width: 350px; border-radius: 20px; min-height: 350px;">
        <p><span>Сегодня была поверка счетчика холодной воды. Приехал Мастер Грицай Александр позвонил с утра, но я не смог вовремя ответить, поэтому работы проводились позже чем могли бы. Мастер приехал со своим оборудованием и тапочками, что порадовало, пролил через оборудование воду, снял показатели на фо</span>...<strong><a
            href="https://maps.app.goo.gl/MMpMqoeBAu3xaGhi7" style="text-decoration: underline;" target="_blank"
            rel="noopener noreferrer">Подробнее</a></strong></p>
        <p><a
            href="https://www.google.com/maps/place/%D0%A1%D0%A2%D0%9C+%D0%A1%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8+%D0%B2+%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8/@55.8009897,37.6367814,17z/data=!3m1!4b1!4m6!3m5!1s0x46b5355d6b758c77:0x84b7cf8448259851!8m2!3d55.8009897!4d37.6367814!16s%2Fg%2F11rl2fwgj0?entry=ttu%20"
            target="_blank" rel="noopener noreferrer"><img src="images/google_logo.png" alt="" width="96" height="96"/></a> <span>VSADNIK 07</span>
          <strong><span style="color: yellow; font-size: 20px;">★★★★★</span></strong></p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="review-item">
        <div class="reviews-image">
          <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none">
            <path
                d="M38.5 76.3C59.3764 76.3 76.3 59.3764 76.3 38.5C76.3 17.6236 59.3764 0.700012 38.5 0.700012C17.6236 0.700012 0.700012 17.6236 0.700012 38.5C0.700012 59.3764 17.6236 76.3 38.5 76.3Z"
                fill="#909090"/>
          </svg>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
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
</script>
<style scoped>
.swiper {
  width: 100%;
}
</style>
