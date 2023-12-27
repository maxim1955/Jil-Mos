<template xmlns="http://www.w3.org/1999/html">
  <q-page class="flex flex-center items-center ">
    <v-modal-form :persitstent="openFormModal" @close-modal="openFormModal=false"/>
    <v-policy :check-toggle="modalPolicy" @close_policy="modalPolicy = false"/>
    <terms-of-use :check-toggle="modalTerms"/>
    <div class="main_promo">
      <div class="container">
        <h1 class="main_promo_title Rubik500">
          Поверка счетчиков воды <br> в Москве от
          <span class=" Rubik500 fz-650" style="color: rgba(212, 61, 70, 1)">650₽</span><br>
          <span class="fz-home">НА ДОМУ БЕЗ СНЯТИЯ</span>
        </h1>
        <q-form class="flex column form_main">
          <div class="flex form_gap">
            <q-input
                v-model="nameInput"
                type="text"
                class="input_form fz-32"
                label-color="white"
                label="Ваше имя*"
                color="white"
                :rules="[ (val,rules) => val.length >= 3 || 'Минимальное количество 3 знака!!', (val,rules) => regexpName.test(nameInput) || 'Ввод только кириллица']"

            />
            <q-input
                v-model="phoneInput"
                type="text"
                label="Телефон *"
                label-color="white"
                class="input_form"
                color="white"
                mask="+7(###)###-##-##"
            />
            <button
                type="submit"
                rounded
                class="btn_submit anim_btn"
                @click="sendFormToCall"
                style="background: rgba(214, 67, 80, 1)"
                :disabled="nameInput.length <3 || phoneInput.length<16"
            >
              ЗАКАЗАТЬ ПОВЕРКУ
              <span class="flare"></span>
            </button>
          </div>
          <p class="text-white pol_conf Rubik500">Отправляя форму, я даю свое согласие на обработку
            <a href="#" class="arrow-3" @click="modalPolicy = true">персональных данных</a>
          </p>
        </q-form>
      </div>
    </div>
    <section class="">
      <div class="container">
        <div class="main_cards flex justify-center items-center">
          <div class="item_card">
            <div class="item_image">
              <svg xmlns="http://www.w3.org/2000/svg" width="215" height="137" viewBox="0 0 215 137" fill="none">
                <path
                    d="M76.3897 52.2498C76.2374 52.0974 76.085 52.0974 76.085 52.0974C76.085 52.0974 76.085 52.0974 76.2374 52.0974C76.2374 52.0974 76.2373 52.0974 76.085 52.0974H75.9327H75.7803C75.7803 52.0974 75.7803 52.0974 75.6279 52.2498C75.6279 52.2498 75.6279 52.2498 75.6279 52.4021C75.6279 52.4021 75.6279 52.4021 75.6279 52.5545V52.7068C75.6279 52.7068 75.7803 52.7068 75.7803 52.8592H75.9327C75.9327 52.8592 75.9326 52.8592 76.085 52.8592C76.085 52.8592 76.085 52.8592 75.9327 52.8592C75.9327 52.8592 75.9326 52.8592 75.7803 52.8592H75.9327H76.085H76.2374C76.2374 52.8592 76.2374 52.8592 76.3897 52.7068C76.3897 52.7068 76.3897 52.7068 76.3897 52.5545V52.4021C76.5421 52.4021 76.5421 52.4021 76.3897 52.2498C76.5421 52.4021 76.5421 52.2498 76.3897 52.2498Z"
                    fill="#C62D61"/>
                <path
                    d="M46.4878 53.7205V87.9693L41.0117 87.7934L40.1956 87.7672L39.5213 88.2278L27.6588 96.331H2.50233L2.54965 45.4404H28.198L40.0707 53.3047L40.6983 53.7205H41.4512H46.4878Z"
                    fill="white" stroke="#C73768" stroke-width="5"/>
                <path
                    d="M175.492 88.2281L174.817 87.7673L174.001 87.7934L168.512 87.9694V53.7205H173.56H174.314L174.941 53.3044L186.808 45.4404H212.45L212.497 96.331H187.348L175.492 88.2281Z"
                    fill="white" stroke="#C73768" stroke-width="5"/>
                <path
                    d="M174.402 68.4998C174.402 104.955 144.903 134.5 108.523 134.5C72.1437 134.5 42.6445 104.955 42.6445 68.4998C42.6445 32.0448 72.1437 2.49976 108.523 2.49976C144.903 2.49976 174.402 32.0448 174.402 68.4998Z"
                    fill="white" stroke="#C73768" stroke-width="5"/>
                <path
                    d="M87.4133 34.0906H122.424C126.636 34.0906 130.058 37.4837 130.058 41.6599V92.0355C130.058 96.2117 126.636 99.6048 122.424 99.6048H87.4133C83.2015 99.6048 79.7793 96.2117 79.7793 92.0355V41.6599C79.7793 37.4837 83.2015 34.0906 87.4133 34.0906Z"
                    stroke="#C62D61" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M137.674 59.9915H101.107V104.175H137.674V59.9915Z" fill="white"/>
                <path
                    d="M118.629 101.128C127.464 101.128 134.626 93.6241 134.626 84.3681C134.626 75.1121 127.464 67.6086 118.629 67.6086C109.793 67.6086 102.631 75.1121 102.631 84.3681C102.631 93.6241 109.793 101.128 118.629 101.128Z"
                    stroke="#C62D61" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M113.297 83.8611L118.629 88.9397L134.627 73.7039" stroke="#C62D61" stroke-width="2"
                      stroke-miterlimit="10"/>
                <path d="M79.7793 53.8971H89.835L96.5388 44.7556" stroke="#C62D61" stroke-width="2"
                      stroke-miterlimit="10"/>
                <path
                    d="M79 48.9998C88.3888 48.9998 96 42.9556 96 35.4998C96 28.0439 88.3888 21.9998 79 21.9998C69.6112 21.9998 62 28.0439 62 35.4998C62 42.9556 69.6112 48.9998 79 48.9998Z"
                    fill="white"/>
                <path d="M97 33.9998L80 49.9998" stroke="#C62D61" stroke-width="2" stroke-miterlimit="10"/>
              </svg>
            </div>
            <div class="item_text">
              Полный комплект документов для ТСЖ и УК
              Внесение в результатов “АРШИН”
            </div>
          </div>
          <div class="item_card flex items-center ">
            <div class="item_image">
              <svg xmlns="http://www.w3.org/2000/svg" width="215" height="137" viewBox="0 0 215 137" fill="none">
                <path
                    d="M46.487 53.7198V87.9686L41.0111 87.7927L40.1949 87.7665L39.5207 88.2271L27.6583 96.3302H2.50233L2.54965 45.4397H28.1975L40.07 53.304L40.6977 53.7198H41.4506H46.487Z"
                    fill="white" stroke="#3697D1" stroke-width="5"/>
                <path
                    d="M175.493 88.2274L174.819 87.7665L174.003 87.7927L168.514 87.9687V53.7198H173.562H174.315L174.943 53.3037L186.809 45.4397H212.451L212.498 96.3302H187.349L175.493 88.2274Z"
                    fill="white" stroke="#3697D1" stroke-width="5"/>
                <path
                    d="M174.394 68.5C174.394 104.955 144.895 134.5 108.516 134.5C72.1373 134.5 42.6387 104.955 42.6387 68.5C42.6387 32.045 72.1373 2.5 108.516 2.5C144.895 2.5 174.394 32.045 174.394 68.5Z"
                    fill="white" stroke="#3697D1" stroke-width="5"/>
                <path
                    d="M139.036 106H73.964C68.984 106 65 102.018 65 97.0409V41.9591C65 36.9819 68.984 33 73.964 33H139.036C144.016 33 148 36.9819 148 41.9591V97.0409C148 102.018 144.016 106 139.036 106Z"
                    stroke="#2C93D0" stroke-width="3" stroke-miterlimit="10"/>
                <path d="M153 66H108V111H153V66Z" fill="white"/>
                <path
                    d="M132 109C143.046 109 152 100.046 152 89C152 77.9543 143.046 69 132 69C120.954 69 112 77.9543 112 89C112 100.046 120.954 109 132 109Z"
                    stroke="#2C93D0" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M130 78V90.675L140 91" stroke="#2C93D0" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M85 23V39" stroke="#2C93D0" stroke-width="5" stroke-miterlimit="10"/>
                <path d="M109 23V39" stroke="#2C93D0" stroke-width="5" stroke-miterlimit="10"/>
                <path d="M132 23V39" stroke="#2C93D0" stroke-width="5" stroke-miterlimit="10"/>
                <path d="M88.3377 55.9751H81.6836V62.6292H88.3377V55.9751Z" fill="#2C93D0"/>
                <path d="M101.644 55.9751H94.9895V62.6292H101.644V55.9751Z" fill="#2C93D0"/>
                <path d="M114.956 55.9751H108.302V62.6292H114.956V55.9751Z" fill="#2C93D0"/>
                <path d="M128.262 55.9751H121.608V62.6292H128.262V55.9751Z" fill="#2C93D0"/>
                <path d="M88.3377 69.2841H81.6836V75.9382H88.3377V69.2841Z" fill="#2C93D0"/>
                <path d="M101.644 69.2841H94.9895V75.9382H101.644V69.2841Z" fill="#2C93D0"/>
                <path d="M88.3377 82.5916H81.6836V89.2456H88.3377V82.5916Z" fill="#2C93D0"/>
                <path d="M101.644 82.5916H94.9895V89.2456H101.644V82.5916Z" fill="#2C93D0"/>
                <path d="M114.956 69.2841H108.302V75.9382H114.956V69.2841Z" fill="#2C93D0"/>
              </svg>
            </div>
            <div class="item_text">
              Приезд метролога в назначенное время
              Обходительное общение с клиентом
            </div>
          </div>
          <div class="item_card">
            <div class="item_image">
              <svg width="215" height="137" viewBox="0 0 215 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M46.8448 54.7367V89.207L41.3098 89.0295L40.4948 89.0034L39.8212 89.4628L27.867 97.6152H2.50233L2.55003 46.41H28.41L40.3743 54.322L41.0014 54.7367H41.7533H46.8448Z"
                    fill="white" stroke="#E4974E" stroke-width="5"/>
                <path
                    d="M175.191 89.4632L174.518 89.0034L173.702 89.0295L168.154 89.2072V54.7367H173.258H174.01L174.637 54.3217L186.595 46.41H212.449L212.497 97.6152H187.139L175.191 89.4632Z"
                    fill="white" stroke="#E4974E" stroke-width="5"/>
                <path
                    d="M175.494 68.5C175.494 104.943 145.849 134.5 109.263 134.5C72.6776 134.5 43.0332 104.943 43.0332 68.5C43.0332 32.0571 72.6776 2.5 109.263 2.5C145.849 2.5 175.494 32.0571 175.494 68.5Z"
                    fill="white" stroke="#E4974E" stroke-width="5"/>
                <path
                    d="M148.416 56.6348C149.013 55.4404 149.312 54.2459 149.61 53.0515V52.7529C149.61 47.9751 145.728 43.7946 140.95 43.7946L120.944 42.8988L122.138 36.6281C122.735 32.4475 122.138 28.267 120.346 24.6837L119.152 22.5935C117.958 20.2047 115.569 18.7116 113.18 18.1144H112.881C109.895 17.5172 106.909 19.3088 106.312 22.2949C106.312 22.5935 106.312 22.8921 106.312 23.4893V28.8642C106.312 31.5517 105.715 33.9406 104.222 36.3294L97.6524 47.0793C96.7565 48.871 94.965 49.7668 92.8747 49.7668H86.0066H85.708C83.9164 47.3779 80.9303 46.1835 76.7498 46.1835H67.7916C66.8958 46.1835 66 47.0794 66 47.9752C66 48.871 66.8958 49.7668 67.7916 49.7668H73.1663V80.2248C73.1663 81.1206 74.0624 82.0165 74.9582 82.0165C75.8541 82.0165 76.7498 81.1206 76.7498 80.2248V49.4682C81.8261 49.4682 83.9165 51.5585 83.9165 56.6348V89.1831C83.9165 94.558 81.8261 96.3496 76.7498 96.3496H67.7916C66.8958 96.3496 66 97.2455 66 98.1413C66 99.0371 66.8958 99.933 67.7916 99.933H76.7498C82.722 99.933 86.0067 97.5441 87.2011 92.7664H94.3677C95.5622 92.7664 97.055 93.0649 98.2494 93.3635L104.52 94.8566C108.701 96.051 113.18 96.3497 117.659 95.7525L135.874 93.6622C141.249 93.065 145.43 88.2872 145.43 82.9123V82.0165C145.43 81.7179 145.43 81.7178 145.43 81.4192C147.818 79.6276 149.013 76.9401 149.311 74.2527V73.0582C149.311 72.1624 149.013 71.5652 148.714 70.6693C151.402 68.8777 152.895 66.1902 152.895 63.2041V62.3083C153.193 59.3223 151.103 56.9334 148.416 56.6348ZM149.61 62.9056C149.61 65.5931 147.52 67.9819 144.832 68.2805L138.263 69.1763C137.367 69.1763 136.471 70.0721 136.471 70.968C136.471 71.8638 137.367 72.7596 138.263 72.7596H138.561L145.131 71.8638H145.43C145.728 72.1624 145.728 72.461 145.728 72.7596V73.954C145.728 76.6415 143.936 79.0304 141.249 79.329L136.471 79.9262C135.576 79.9262 134.68 80.8221 134.68 82.0165C134.68 82.9123 135.575 83.8081 136.77 83.8081H137.068L141.846 82.9123H142.145C142.145 86.4956 139.457 89.7802 135.575 90.0788L117.36 92.1691C113.478 92.4677 109.298 92.1692 105.715 91.2733L99.4439 89.7803C97.9509 89.4817 96.1593 89.1831 94.6663 89.1831H87.7982V56.6348C87.7982 55.4404 87.7982 54.2459 87.4996 53.0515H92.8747C96.1594 53.0515 98.8468 51.2598 100.638 48.5724L107.208 37.8225C108.999 35.135 109.895 31.8504 109.895 28.5657V23.1907C109.895 22.5935 110.194 21.9963 110.492 21.6977C110.791 21.3991 111.388 21.1004 111.985 21.399H112.284C113.777 21.6976 115.27 22.5935 115.867 24.0866L117.062 26.1768C118.555 29.1629 119.152 32.4476 118.555 35.7323L117.36 42.6002H115.27C114.374 42.6002 113.478 43.1974 113.478 44.3919C113.478 45.2877 114.076 46.1835 115.27 46.1835L140.95 47.378C143.937 47.378 146.027 49.7668 146.027 52.7529V53.0515C146.027 55.1417 144.534 56.6348 142.444 56.6348H137.068C136.173 56.6348 135.277 57.5307 135.277 58.4265C135.277 59.3223 136.173 60.2181 137.068 60.2181H147.818C148.714 60.2181 149.61 61.1139 149.61 62.0097V62.9056Z"
                    fill="#E4974E"/>
                <path
                    d="M75.2562 85.5996C74.3604 85.5996 73.4646 86.4955 73.4646 87.3913V90.9746C73.4646 91.8704 74.3604 92.7663 75.2562 92.7663C76.152 92.7663 77.0477 91.8704 77.0477 90.9746V87.3913C77.0477 86.1968 76.152 85.5996 75.2562 85.5996Z"
                    fill="#E4974E"/>
              </svg>
            </div>
            <div class="item_text ">
              Фиксированная цена на поверку счетчиков
              Скидки для пенсионеров и инвалидов
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="q-py-xl q-px-md ">
      <div class="container">
        <div class="plus_company flex justify-center ">
          <div class="list_plus flex column no-wrap">
            <div class="item_plus ">
              <div class="flex items-center">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40002 5.70007V15.6001L10.2 20.6001L19 15.6001V5.70007L10.2 0.700073L1.40002 5.70007Z"
                        stroke="#5D99B6" stroke-miterlimit="10"/>
                </svg>
                <div class="q-pl-lg  Rubik400 item_plus__text fz-26">
                  Комфорт
                </div>
              </div>
              <p class="q-pt-sm items_plus__subtitle Rubik400 fz-16">Наша компания работает для вас ежедневно, без
                выходных и праздников.
                Мы всегда ответим на звонок и подберём удобное для вас время</p>
            </div>
            <div class="item_plus ">
              <div class="flex items items-center">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40002 5.70007V15.6001L10.2 20.6001L19 15.6001V5.70007L10.2 0.700073L1.40002 5.70007Z"
                        stroke="#5D99B6" stroke-miterlimit="10"/>
                </svg>
                <div class="q-pl-lg Rubik400 item_plus__text fz-26">
                  Качество
                </div>
              </div>
              <p class="q-pt-sm items_plus__subtitle Rubik400 fz-16">Мы всегда проследим за качеством выполнения работ
                на всех этапах</p>
            </div>
            <div class="item_plus">
              <div class="flex items-center">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40002 5.70007V15.6001L10.2 20.6001L19 15.6001V5.70007L10.2 0.700073L1.40002 5.70007Z"
                        stroke="#5D99B6"
                        stroke-miterlimit="10"/>
                </svg>
                <div class="q-pl-lg Rubik400 item_plus__text fz-26">
                  Доверие
                </div>
              </div>
              <p class="q-pt-sm items_plus__subtitle Rubik400 fz-16">
                Жилищник - лидер рейтингов по поверке счетчиков воды в Москве
              </p>
            </div>
          </div>
          <div class="company_info justify-center flex bg-grey-3 q-pt-lg q-px-md">
            <div class="info_arshin flex">
              <div class="flex items-center">
                <svg width="72" height="40" viewBox="0 0 72 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.79999 8.20007H0.200012V39.6001H5.79999V8.20007Z" fill="black"/>
                  <path d="M71.7 8.20007H66.1V39.6001H71.7V8.20007Z" fill="black"/>
                  <path d="M18.9 30.3H13.3V39.6001H18.9V30.3Z" fill="black"/>
                  <path d="M32.2 30.3H26.6V39.6001H32.2V30.3Z" fill="black"/>
                  <path d="M45.3 30.3H39.7V39.6001H45.3V30.3Z" fill="black"/>
                  <path d="M58.6 30.3H53V39.6001H58.6V30.3Z" fill="black"/>
                  <path
                      d="M14.68 24.7061C14.5059 24.7061 14.358 24.6451 14.2361 24.5233C14.1142 24.4014 14.0533 24.2534 14.0533 24.0793V7.0787C14.0533 6.88719 14.1055 6.7305 14.21 6.60864C14.3319 6.48677 14.4885 6.42583 14.68 6.42583H21.6788C23.7853 6.42583 25.4393 6.92201 26.6405 7.91437C27.8418 8.90672 28.4424 10.3517 28.4424 12.2494C28.4424 14.1296 27.8418 15.5572 26.6405 16.5322C25.4393 17.4897 23.7853 17.9685 21.6788 17.9685H17.8399V24.0793C17.8399 24.2708 17.779 24.4275 17.6571 24.5494C17.5352 24.6538 17.3786 24.7061 17.187 24.7061H14.68ZM21.5482 15.0437C22.558 15.0437 23.324 14.8086 23.8463 14.3386C24.386 13.8511 24.6558 13.146 24.6558 12.2233C24.6558 11.318 24.3947 10.6129 23.8724 10.108C23.3675 9.60311 22.5928 9.35067 21.5482 9.35067H17.7877V15.0437H21.5482ZM38.344 24.9672C35.9414 24.9672 34.0786 24.3579 32.7554 23.1392C31.4497 21.9031 30.7533 20.1534 30.6663 17.8901C30.6489 17.4201 30.6401 16.6541 30.6401 15.5921C30.6401 14.5127 30.6489 13.7292 30.6663 13.2417C30.7533 11.0133 31.4584 9.28103 32.7815 8.04494C34.1047 6.79144 35.9588 6.16469 38.344 6.16469C39.8934 6.16469 41.2427 6.43454 42.3917 6.97424C43.5408 7.49653 44.4287 8.21904 45.0554 9.14175C45.6996 10.0645 46.0391 11.1003 46.0739 12.2494V12.3016C46.0739 12.4409 46.0129 12.5628 45.8911 12.6672C45.7866 12.7543 45.6647 12.7978 45.5255 12.7978H42.9924C42.7834 12.7978 42.6267 12.7543 42.5223 12.6672C42.4178 12.5628 42.3308 12.3887 42.2611 12.1449C42 11.0655 41.5473 10.3082 40.9032 9.87296C40.259 9.42031 39.4059 9.19398 38.344 9.19398C35.8544 9.19398 34.5573 10.5868 34.4529 13.3723C34.4355 13.8424 34.4268 14.5649 34.4268 15.5398C34.4268 16.5148 34.4355 17.2547 34.4529 17.7596C34.5573 20.5451 35.8544 21.9379 38.344 21.9379C39.3885 21.9379 40.2329 21.7203 40.8771 21.285C41.5386 20.8324 42 20.0664 42.2611 18.987C42.3308 18.7432 42.4178 18.5778 42.5223 18.4908C42.6267 18.3863 42.7834 18.3341 42.9924 18.3341H45.5255C45.6822 18.3341 45.8127 18.3863 45.9172 18.4908C46.0391 18.5952 46.0913 18.7258 46.0739 18.8825C46.0391 20.0315 45.6996 21.0674 45.0554 21.9901C44.4287 22.9129 43.5408 23.6441 42.3917 24.1838C41.2427 24.7061 39.8934 24.9672 38.344 24.9672ZM53.8187 24.7061C53.6446 24.7061 53.4966 24.6451 53.3747 24.5233C53.2529 24.4014 53.1919 24.2534 53.1919 24.0793V9.69016H48.3607C48.1866 9.69016 48.0387 9.62923 47.9168 9.50736C47.7949 9.38549 47.734 9.2288 47.734 9.03729V7.0787C47.734 6.88719 47.7862 6.7305 47.8907 6.60864C48.0125 6.48677 48.1692 6.42583 48.3607 6.42583H61.7053C61.8968 6.42583 62.0535 6.48677 62.1754 6.60864C62.2972 6.7305 62.3582 6.88719 62.3582 7.0787V9.03729C62.3582 9.2288 62.2972 9.38549 62.1754 9.50736C62.0535 9.62923 61.8968 9.69016 61.7053 9.69016H56.9002V24.0793C56.9002 24.2534 56.8393 24.4014 56.7174 24.5233C56.613 24.6451 56.465 24.7061 56.2735 24.7061H53.8187Z"
                      fill="black"/>
                </svg>
              </div>
              <div class="info_arshin_text ">
                <p class="Rubik400 text-grey-6">РОССТАНДАРТ Федеральное агенство по техническому регулированию и
                  метрологии Информацию о внесении результатов</p>
                <p class="Rubik400 text-black">Информацию о внесении результатов проведения поверки можно посмотреть
                  в базе «АРШИН»</p>
                <a href="#" class="link_to_site Rubik400 fz-16">Перейти на сайт </a>
              </div>
            </div>
            <div class="info_servicePos q-pt-lg">
              <div class="dashed_border flex items-center justify-center q-pt-lg ">
                <div class="">
                  <svg width="81" height="72" viewBox="0 0 81 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.5 26.7001V18.0001L29.6999 14.9001L44.5 18.0001L-2.66481e-05 39.1V43.1C-2.66481e-05 43.1 -0.200003 60.2 29.9 70.6C29.9 70.6 55.9 65.2 61.8 42.8V11.5001C61.8 11.5001 49 1.00003 30.9 0.600034C12.8 0.200034 -2.66481e-05 11.3 -2.66481e-05 11.3V20.3L16.5 26.7001Z"
                        fill="#B9A69A"/>
                    <path
                        d="M16.8 46.7001L44.3 33.8V48.4001L34.1 55.9001C34.1 55.9001 29.1 59.9001 16.8 48.5001V46.7001Z"
                        fill="white"/>
                    <path
                        d="M70 71.3001C75.5781 71.3001 80.1 66.7782 80.1 61.2001C80.1 55.6221 75.5781 51.1001 70 51.1001C64.4219 51.1001 59.9 55.6221 59.9 61.2001C59.9 66.7782 64.4219 71.3001 70 71.3001Z"
                        fill="#ED184A"/>
                  </svg>
                </div>
                <div class="">
                  <p class=" fz-16 Rubik400" style="max-width: 500px">Информацию о наших партнеров можно посмотреть на
                    сайте Росаккредитации </p>
                  <p class=" fz-16 Rubik400" style="max-width: 500px">«Городская метрологическая служба»
                    <a href="https://pub.fsa.gov.ru/ral/view/35749/applicant">Проверить</a>
                    «СЕРВИСПОС» <a href="https://pub.fsa.gov.ru/ral/view/35773/applicant">Проверить</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg_blue check_district" style="width: 100%; height: 129px;position: relative">
      <div class="container">
        <div class="flex items-center justify-evenly check_district_box"
             style="position: absolute; top: 0;left: 0;bottom: 0;right: 0">
          <p class="text-white text-check_district Rubik500 fz-21">ВАЖНО! Поверяем счётчики воды во всех районах
            Москвы
          </p>
          <button class="bg-red text-white btn_district Rubik500 fz-16 anim_btn" @click="openFormModal = true">ЗАКАЗАТЬ
            УСЛУГУ
            <span class="flare"></span>
          </button>
        </div>
      </div>
    </section>
    <section class="step_check" id="step_check">
      <div class="flex column items-center how_check q-py-xl">
        <p class="step_title fz-32 text-bold Rubik500">КАК ПРОХОДИТ ПОВЕРКА</p>
        <p class="fz-26 Rubik400">счётчиков воды в Москве</p>
      </div>
      <div class="step_cards flex no-wrap justify-center">
        <div class="step_items flex justify-center items-center ">
          <div class="">
            <svg width="147" height="95" viewBox="0 0 147 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M83.5 26.2778V48.6402L80.4892 48.543L79.6693 48.5165L78.9932 48.9809L70.9568 54.5H54.5023L54.5338 20.5H71.3371L79.3835 25.8586L80.013 26.2778H80.7692H83.5Z"
                  fill="white" stroke="#6ED096" stroke-width="5"/>
              <path
                  d="M120.016 60.9812L119.34 60.5165L118.52 60.543L115.5 60.6403V38.2778H118.239H118.996L119.625 37.8583L127.667 32.5H144.466L144.498 66.5H128.048L120.016 60.9812Z"
                  fill="white" stroke="#6ED096" stroke-width="5"/>
              <path
                  d="M26.9838 60.9812L27.6601 60.5165L28.4801 60.543L31.5 60.6403V38.2778H28.7609H28.0043L27.3747 37.8583L19.3327 32.5H2.53382L2.50232 66.5H18.9518L26.9838 60.9812Z"
                  fill="white" stroke="#6ED096" stroke-width="5"/>
              <path
                  d="M118.5 47.5C118.5 72.3528 98.3528 92.5 73.5 92.5C48.6472 92.5 28.5 72.3528 28.5 47.5C28.5 22.6472 48.6472 2.5 73.5 2.5C98.3528 2.5 118.5 22.6472 118.5 47.5Z"
                  fill="white" stroke="#6ED096" stroke-width="5"/>
              <path
                  d="M92.1575 61H56.8425C54.6468 61 53 59.1564 53 57.1285V31.8715C53 29.6592 54.8298 28 56.8425 28H92.1575C94.3532 28 96 29.8435 96 31.8715V57.1285C96 59.3408 94.3532 61 92.1575 61Z"
                  stroke="#6ED096" stroke-width="4" stroke-miterlimit="10"/>
              <path d="M54 29L71.7545 45.5114C72.3036 46.0328 73.4018 46.2066 73.9509 45.6852L95 29" stroke="#6ED096"
                    stroke-width="4" stroke-miterlimit="10"/>
              <path d="M43.073 42V64.8385C43.073 64.8385 41.9535 71.8374 48.4836 70.9165H83" stroke="#6ED096"
                    stroke-width="3" stroke-miterlimit="10"/>
            </svg>
          </div>
          <div class="text-center">
            <p class="fz-26 Rubik400">Заявка</p>
            <p class="text-center step_text Rubik400 fz-16 text-grey-6">Вы звоните к нам в контакт центр или оставляете
              заявку на сайте</p>
          </div>
        </div>
        <div class="step_items flex justify-center items-center">
          <div class="">
            <svg width="149" height="95" viewBox="0 0 149 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M31.5 38.2778V60.6402L28.4892 60.543L27.6693 60.5165L26.9932 60.9809L18.9568 66.5H2.50231L2.53376 32.5H19.3371L27.3835 37.8586L28.013 38.2778H28.7692H31.5Z"
                  fill="white" stroke="#B96CD4" stroke-width="5"/>
              <path
                  d="M122.016 60.9812L121.34 60.5165L120.52 60.543L117.5 60.6403V38.2778H120.239H120.996L121.625 37.8583L129.667 32.5H146.466L146.498 66.5H130.048L122.016 60.9812Z"
                  fill="white" stroke="#B96CD4" stroke-width="5"/>
              <path
                  d="M120.5 47.5C120.5 72.3528 100.353 92.5 75.5 92.5C50.6472 92.5 30.5 72.3528 30.5 47.5C30.5 22.6472 50.6472 2.5 75.5 2.5C100.353 2.5 120.5 22.6472 120.5 47.5Z"
                  fill="white" stroke="#B96CD4" stroke-width="5"/>
              <path
                  d="M62.9231 46.4709L74.8255 35.9621L56.0856 17.4465C56.0856 17.4465 66.7217 11.9419 77.6111 17.4465C88.5004 22.9511 93.0588 40.4658 90.2731 46.7211L108 63.7355L91.5393 81L73.0528 63.235C73.0528 63.235 48.9949 66.9882 41.9042 47.2216C41.9042 47.2216 38.8652 38.7144 43.93 27.9553L62.9231 46.4709Z"
                  stroke="#B96CD4" stroke-width="4" stroke-miterlimit="10"/>
            </svg>
          </div>
          <div class="text-center">
            <p class="fz-26 Rubik400">Поверка</p>
            <p class="text-center step_text Rubik400 fz-16 text-grey-6">Производим с помощью переносной поверочной
              установки поверку счетчика, без
              его
              снятия</p>
          </div>
        </div>
        <div class="step_items flex justify-center items-center">
          <div class="">
            <svg width="155" height="99" viewBox="0 0 155 99" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M32.5 39.5741V63.3421L29.3264 63.2375L28.492 63.21L27.8085 63.6893L19.5237 69.5H2.50227L2.53487 33.5H19.9148L28.2095 39.1413L28.8458 39.5741H29.6154H32.5Z"
                  fill="white" stroke="#F29B4B" stroke-width="5"/>
              <path
                  d="M127.201 63.6897L126.518 63.21L125.683 63.2375L122.5 63.3423V39.5741H125.393H126.163L126.8 39.141L135.09 33.5H152.465L152.498 69.5H135.481L127.201 63.6897Z"
                  fill="white" stroke="#F29B4B" stroke-width="5"/>
              <path
                  d="M124.5 49.5C124.5 75.4814 103.657 96.5 78 96.5C52.3426 96.5 31.5 75.4814 31.5 49.5C31.5 23.5186 52.3426 2.5 78 2.5C103.657 2.5 124.5 23.5186 124.5 49.5Z"
                  fill="white" stroke="#F29B4B" stroke-width="5"/>
              <path
                  d="M94.8424 79H60.1577C54.4595 79 50 74.8073 50 69.4499V30.5502C50 25.1928 54.4595 21 60.1577 21H94.8424C100.541 21 105 25.1928 105 30.5502V69.4499C104.752 74.8073 100.293 79 94.8424 79Z"
                  stroke="#F29B4B" stroke-width="4" stroke-miterlimit="10"/>
              <path d="M68 21C68 21 76.5255 7.5 87 21" stroke="#F29B4B" stroke-width="4" stroke-miterlimit="10"/>
              <path d="M66 21C66 21 75.7021 36.75 90 21" stroke="#F29B4B" stroke-width="4" stroke-miterlimit="10"/>
              <path d="M92 36H65V39H92V36Z" fill="#F29B4B"/>
              <path d="M92 51H65V55H92V51Z" fill="#F29B4B"/>
              <path d="M92 44H65V47H92V44Z" fill="#F29B4B"/>
              <path d="M83 59H65V63H83V59Z" fill="#F29B4B"/>
            </svg>

          </div>
          <div class="text-center">
            <p class="fz-26 Rubik400">Документы</p>
            <p class="text-center step_text Rubik400 fz-16 text-grey-6">По результатам прохождения
              поверки выдаем документы для
              МФЦ и управляющей компании</p>
          </div>
        </div>
        <div class="step_items flex justify-center items-center">
          <div class="">
            <svg width="153" height="97" viewBox="0 0 153 97" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M32.5 38.4259V61.4923L29.3244 61.3902L28.5071 61.3639L27.8323 61.8257L19.5395 67.5H2.50232L2.53482 32.5H19.9304L28.2332 38.0091L28.8614 38.4259H29.6154H32.5Z"
                  fill="white" stroke="#EB565B" stroke-width="5"/>
              <path
                  d="M125.177 61.826L124.502 61.3639L123.685 61.3902L120.5 61.4925V38.4259H123.393H124.147L124.776 38.0088L133.074 32.5H150.465L150.498 67.5H133.466L125.177 61.826Z"
                  fill="white" stroke="#EB565B" stroke-width="5"/>
              <path
                  d="M122.5 48.5C122.5 73.9051 101.905 94.5 76.5 94.5C51.0949 94.5 30.5 73.9051 30.5 48.5C30.5 23.0949 51.0949 2.5 76.5 2.5C101.905 2.5 122.5 23.0949 122.5 48.5Z"
                  fill="white" stroke="#EB565B" stroke-width="5"/>
              <path
                  d="M77.5 76C93.2401 76 106 63.464 106 48C106 32.536 93.2401 20 77.5 20C61.7599 20 49 32.536 49 48C49 63.464 61.7599 76 77.5 76Z"
                  stroke="#EB565B" stroke-width="4" stroke-miterlimit="10"/>
              <path d="M66 46.127L74.8847 54L94 38" stroke="#EB565B" stroke-width="4" stroke-miterlimit="10"/>
            </svg>

          </div>
          <div class="text-center">
            <p class="fz-26 Rubik400">Аршин</p>
            <p class="text-center step_text Rubik400 fz-16 text-grey-6">Регистрируем сведения о
              поверке в электронной базе
              ФГИС «АРШИН»</p>
          </div>
        </div>
      </div>
    </section>
    <section class="metr_form">
      <div class="container flex justify-around">
        <v-open-form/>
        <div class="q-pt-md">
          <img src="src/assets/metr.png" alt="metr" srcset="" class="dpNone"/>
        </div>
      </div>
    </section>
    <section class="bag-grey flex justify-center q-py-xl q-pl-md">
      <div class="flex">
        <p class="Rubik500 fz-32" style="max-width: 856px">ЕЖЕДНЕВНО МЫ ОБРАБАТЫВАЕМ <span class="text-red-5">БОЛЕЕ 900 ЗАЯВОК</span>
          И НАШИ КЛИЕНТЫ ПОЛУЧАЮТ:
        </p>
      </div>
      <div class="">
        <img src="src/assets/champ.png" alt="champ" class="champ_image">
      </div>
    </section>
    <section class="topCompany q-py-xl">
      <div class="container">
        <div class="topCompany_cards flex no-wrap ">
          <div class="card_company flex no-wrap items-center">
            <div class="image_company">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M40.5 78.9933C61.763 78.9933 79 61.7562 79 40.4933C79 19.2303 61.763 1.99329 40.5 1.99329C19.237 1.99329 2 19.2303 2 40.4933C2 61.7562 19.237 78.9933 40.5 78.9933Z"
                    stroke="#3CA9EA" stroke-width="3" stroke-miterlimit="10"/>
                <path d="M5.97449 57.1357H76.5164" stroke="#3CA9EA" stroke-width="3.902" stroke-miterlimit="10"/>
                <path
                    d="M41.494 60.1159C45.8838 60.1159 49.4424 56.5572 49.4424 52.1675C49.4424 47.7777 45.8838 44.2191 41.494 44.2191C37.1043 44.2191 33.5457 47.7777 33.5457 52.1675C33.5457 56.5572 37.1043 60.1159 41.494 60.1159Z"
                    fill="white" stroke="#3CA9EA" stroke-width="3.9694" stroke-miterlimit="10"/>
                <path d="M41.4933 23.8515V42.7289" stroke="#3CA9EA" stroke-width="2.7377" stroke-miterlimit="10"/>
                <path d="M67.0779 39.0034H78.0069" stroke="#3CA9EA" stroke-width="2.0788" stroke-miterlimit="10"/>
                <path d="M60.371 19.1321L68.0709 11.4321" stroke="#3CA9EA" stroke-width="2.0788"
                      stroke-miterlimit="10"/>
                <path d="M41.4933 11.9291V1" stroke="#3CA9EA" stroke-width="2.0788" stroke-miterlimit="10"/>
                <path d="M15.1641 11.4321L22.8641 19.1321" stroke="#3CA9EA" stroke-width="2.0788"
                      stroke-miterlimit="10"/>
                <path d="M3.24194 39.0034H14.6677" stroke="#3CA9EA" stroke-width="2.1441" stroke-miterlimit="10"/>
              </svg>
            </div>
            <div class="text_company">
              <h3 class="text-company-h3 Rubik500 ">Нам можно доверять</h3>
              <p class="text-company-subtitle  fz-16 Rubik500 text-grey-6">Поверку в официальной
                аккредитованной метрологической
                службе</p>
            </div>
          </div>
          <div class="card_company flex no-wrap">
            <div class="image_company">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M40.5 78.9933C61.763 78.9933 79 61.7562 79 40.4933C79 19.2303 61.763 1.99329 40.5 1.99329C19.237 1.99329 2 19.2303 2 40.4933C2 61.7562 19.237 78.9933 40.5 78.9933Z"
                    stroke="#3CA9EA" stroke-width="3" stroke-miterlimit="10"/>
                <path d="M5.97449 57.1357H76.5164" stroke="#3CA9EA" stroke-width="3.902" stroke-miterlimit="10"/>
                <path
                    d="M41.494 60.1159C45.8838 60.1159 49.4424 56.5572 49.4424 52.1675C49.4424 47.7777 45.8838 44.2191 41.494 44.2191C37.1043 44.2191 33.5457 47.7777 33.5457 52.1675C33.5457 56.5572 37.1043 60.1159 41.494 60.1159Z"
                    fill="white" stroke="#3CA9EA" stroke-width="3.9694" stroke-miterlimit="10"/>
                <path d="M41.4933 23.8515V42.7289" stroke="#3CA9EA" stroke-width="2.7377" stroke-miterlimit="10"/>
                <path d="M67.0779 39.0034H78.0069" stroke="#3CA9EA" stroke-width="2.0788" stroke-miterlimit="10"/>
                <path d="M60.371 19.1321L68.0709 11.4321" stroke="#3CA9EA" stroke-width="2.0788"
                      stroke-miterlimit="10"/>
                <path d="M41.4933 11.9291V1" stroke="#3CA9EA" stroke-width="2.0788" stroke-miterlimit="10"/>
                <path d="M15.1641 11.4321L22.8641 19.1321" stroke="#3CA9EA" stroke-width="2.0788"
                      stroke-miterlimit="10"/>
                <path d="M3.24194 39.0034H14.6677" stroke="#3CA9EA" stroke-width="2.1441" stroke-miterlimit="10"/>
              </svg>
            </div>
            <div class="text_company">
              <h3 class="text-company-h3 Rubik500">Мы экономим ваш бюджет</h3>
              <p class="text-company-subtitle fz-16 Rubik500 text-grey-6">Качественную работу за адекватные
                деньги</p>
            </div>
          </div>
          <div class="card_company flex no-wrap">
            <div class="image_company">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M40.5 78.9933C61.763 78.9933 79 61.7562 79 40.4933C79 19.2303 61.763 1.99329 40.5 1.99329C19.237 1.99329 2 19.2303 2 40.4933C2 61.7562 19.237 78.9933 40.5 78.9933Z"
                    stroke="#3CA9EA" stroke-width="3" stroke-miterlimit="10"/>
                <path d="M5.97449 57.1357H76.5164" stroke="#3CA9EA" stroke-width="3.902" stroke-miterlimit="10"/>
                <path
                    d="M41.494 60.1159C45.8838 60.1159 49.4424 56.5572 49.4424 52.1675C49.4424 47.7777 45.8838 44.2191 41.494 44.2191C37.1043 44.2191 33.5457 47.7777 33.5457 52.1675C33.5457 56.5572 37.1043 60.1159 41.494 60.1159Z"
                    fill="white" stroke="#3CA9EA" stroke-width="3.9694" stroke-miterlimit="10"/>
                <path d="M41.4933 23.8515V42.7289" stroke="#3CA9EA" stroke-width="2.7377" stroke-miterlimit="10"/>
                <path d="M67.0779 39.0034H78.0069" stroke="#3CA9EA" stroke-width="2.0788" stroke-miterlimit="10"/>
                <path d="M60.371 19.1321L68.0709 11.4321" stroke="#3CA9EA" stroke-width="2.0788"
                      stroke-miterlimit="10"/>
                <path d="M41.4933 11.9291V1" stroke="#3CA9EA" stroke-width="2.0788" stroke-miterlimit="10"/>
                <path d="M15.1641 11.4321L22.8641 19.1321" stroke="#3CA9EA" stroke-width="2.0788"
                      stroke-miterlimit="10"/>
                <path d="M3.24194 39.0034H14.6677" stroke="#3CA9EA" stroke-width="2.1441" stroke-miterlimit="10"/>
              </svg>
            </div>
            <div class="text_company">
              <h3 class="text-company-h3 Rubik500 ">Мы заботимся о вас</h3>
              <p class="text-company-subtitle  fz-16 Rubik500 text-grey-6">Соблюдение всех санитарно-
                эпидемиологических требований</p>
            </div>
          </div>
          <div class="card_company flex no-wrap">
            <div class="image_company">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M40.5 78.9933C61.763 78.9933 79 61.7562 79 40.4933C79 19.2303 61.763 1.99329 40.5 1.99329C19.237 1.99329 2 19.2303 2 40.4933C2 61.7562 19.237 78.9933 40.5 78.9933Z"
                    stroke="#3CA9EA" stroke-width="3" stroke-miterlimit="10"/>
                <path d="M5.97449 57.1357H76.5164" stroke="#3CA9EA" stroke-width="3.902" stroke-miterlimit="10"/>
                <path
                    d="M41.494 60.1159C45.8838 60.1159 49.4424 56.5572 49.4424 52.1675C49.4424 47.7777 45.8838 44.2191 41.494 44.2191C37.1043 44.2191 33.5457 47.7777 33.5457 52.1675C33.5457 56.5572 37.1043 60.1159 41.494 60.1159Z"
                    fill="white" stroke="#3CA9EA" stroke-width="3.9694" stroke-miterlimit="10"/>
                <path d="M41.4933 23.8515V42.7289" stroke="#3CA9EA" stroke-width="2.7377" stroke-miterlimit="10"/>
                <path d="M67.0779 39.0034H78.0069" stroke="#3CA9EA" stroke-width="2.0788" stroke-miterlimit="10"/>
                <path d="M60.371 19.1321L68.0709 11.4321" stroke="#3CA9EA" stroke-width="2.0788"
                      stroke-miterlimit="10"/>
                <path d="M41.4933 11.9291V1" stroke="#3CA9EA" stroke-width="2.0788" stroke-miterlimit="10"/>
                <path d="M15.1641 11.4321L22.8641 19.1321" stroke="#3CA9EA" stroke-width="2.0788"
                      stroke-miterlimit="10"/>
                <path d="M3.24194 39.0034H14.6677" stroke="#3CA9EA" stroke-width="2.1441" stroke-miterlimit="10"/>
              </svg>
            </div>
            <div class="text_company">
              <h3 class="text-company-h3 Rubik500 ">Мы ценим ваше время</h3>
              <p class="text-company-subtitle fz-16 Rubik500 text-grey-6">Выполнение заказа в удобное для вас время</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg_blue q-mb-xl" style="width: 100%; height: 129px;position: relative">
      <div class="container">
        <div class="flex items-center justify-around check_district_box"
             style="position: absolute; top: 0;left: 0;bottom: 0;right: 0">
          <p class="text-center text-white fz-32 Rubik500" id="about" ref="about">ЧТО ГОВОРЯТ НАШИ КЛИЕНТЫ?</p>
        </div>
      </div>
    </section>
    <section class="reviews-section">
      <div class="container  q-py-lg reviews-container">
        <v-slider/>
      </div>
    </section>
    <section class=" q-mb-xl " style="width: 100%;position: relative; background:#169AC4">
      <div class="container">
        <div class="">
          <div class="flex justify-center no-wrap">
            <div class="tabs flex justify-center Rubik500" style="width: 60%;">
              <p class="fz-60 text-white text-center  ">Выгодные тарифы</p>
              <div style="max-width: 770px; background:#169AC4;" class="slider_metr">
                <q-tabs
                    v-model="tab"
                    active-color="primary"
                    indicator-color="purple"
                    align="justify"
                    class="tabs-panel"
                >
                  <q-tab name="one" label="ОДИН СЧЕТЧИК" class="Rubik500 fz-16"/>
                  <q-tab name="two" label="ДВА СЧЕТЧИКА" class="Rubik500 fz-16"/>
                  <q-tab name="three" label="ТРИ СЧЕТЧИКА" class="Rubik500 fz-16"/>
                  <q-tab name=four label="ЧЕТЫРЕ СЧЕТЧИКА" class="Rubik500 fz-16"/>

                </q-tabs>
                <q-separator color="grey" size="1.5px"/>
                <q-tab-panels v-model="tab" animated class="tab-panels text-white" style="background:#169AC4">
                  <q-tab-panel name="one">
                    <div class="flex no-wrap justify-end slider_item">
                      <div class="tab-text">
                        <p class="tab-text__title fz-60 text-white">от 650₽*</p>
                        <p class="tab-text__subtitle text-white">
                          Стоимость работы по поверке счетчика на дому, без
                          снятия, с помощью переносной поверочной установки.
                          *Льготная цена при предъявлении соответствующих
                          удостоверений (социальных карт и т.д.), выдаваемых органами социальной защиты РФ
                        </p>
                      </div>
                      <div class="">
                        <img src="src/assets/metr1.png" alt="one metr" class="tab-image">
                      </div>
                    </div>
                  </q-tab-panel>
                  <q-tab-panel name="two">
                    <div class="flex no-wrap justify-end slider_item">
                      <div class="">
                        <p class="tab-text__title fz-60 text-white">от 1300₽*</p>
                        <p class="tab-text__subtitle text-white">Стоимость работы по поверке счетчика на дому, без
                          снятия, с помощью переносной поверочной установки.
                          *Льготная цена при предъявлении соответствующих
                          удостоверений (социальных карт и т.д.), выдаваемых
                          органами социальной защиты РФ</p>
                      </div>
                      <div class="">
                        <img src="src/assets/metr2.png" alt="two metr" class="tab-image">
                      </div>
                    </div>
                  </q-tab-panel>
                  <q-tab-panel name="three">
                    <div class="flex no-wrap justify-end slider_item">
                      <div class="">
                        <p class="tab-text__title fz-60 text-white">от 1950₽*</p>
                        <p class="tab-text__subtitle text-white">Стоимость работы по поверке счетчика на дому, без
                          снятия, с помощью переносной поверочной установки.
                          *Льготная цена при предъявлении соответствующих
                          удостоверений (социальных карт и т.д.), выдаваемых
                          органами социальной защиты РФ</p>
                      </div>
                      <div class="">
                        <img src="src/assets/metr3.png" alt="three metr" class="tab-image">
                      </div>
                    </div>
                  </q-tab-panel>
                  <q-tab-panel name="four">
                    <div class="flex no-wrap justify-end slider_item">
                      <div class="">
                        <p class="tab-text__title fz-60 text-white">от 2600₽*</p>
                        <p class="tab-text__subtitle text-white">Стоимость работы по поверке счетчика на дому, без
                          снятия, с помощью переносной поверочной установки.
                          *Льготная цена при предъявлении соответствующих
                          удостоверений (социальных карт и т.д.), выдаваемых
                          органами социальной защиты РФ</p>
                      </div>
                      <div class="">
                        <img src="src/assets/metr4.png" alt="four metr" class="tab-image">
                      </div>
                    </div>
                  </q-tab-panel>
                </q-tab-panels>
              </div>
            </div>
            <div class="flex justify-center slider_form" style="width: 40%;background: #50505F">
              <v-open-form class="dpNone"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partners" style="width: 100%">
      <div class="container">
        <div class="flex justify-center items-center no-wrap partners_block" style="gap: 20px">
          <div class="text-bold fz-26">При поддержке</div>
          <div class="flex items-center partners_block" style="gap: 10px">
            <div class=""><img src="src/assets/documnet.png" alt="my doc" class="part_logo"></div>
            <div class="partners_block"><img src="src/assets/gosusligi.png" alt="gosUslugi" class="part_logo"></div>
            <div class="partners_block"><img src="src/assets/gburc.png" alt="gburc" class="part_logo"></div>
            <div class="partners_block"><img src="src/assets/mosru.png" alt="mosru" class="part_logo"></div>
            <div class="partners_block"><img src="src/assets/accred.png" alt="accred" class="part_logo"></div>
            <div class="partners_block"><img src="src/assets/fso.png" alt="fso" class="part_logo"></div>
          </div>
        </div>
      </div>
    </section>
    <section style="width: 100%;">
      <div class="container">
        <div class=" q-pt-xl" style="margin: 0 auto">
          <div class="flex column justify-center q-pt-xl">
            <div class="text-center fz-32 text-black Rubik500">ВСЁ ЧТО НУЖНО ЗНАТЬ О ПОВЕРКЕ СЧЕТЧИКОВ ВОДЫ</div>
            <div class="fz-16 text-black  Rubik400   q-pt-md" style="width: 40%; margin: 0 auto;">
              Как и когда нужно проводить
              поверку счетчиков воды в
              Москве. Как узнать сроки проведения
              поверки счетчиков воды. Список необходимых документов для процедуры
            </div>
          </div>
          <div class="list q-pt-xl">
            <q-list style="width: 100%;max-width: 900px; margin: 0 auto">
              <q-expansion-item
                  group="somegroup"
                  label="ОБЯЗАТЕЛЬНА ЛИ ПОВЕРКА СЧЕТЧИКОВ ВОДЫ И ЗАЧЕМ ОНА НУЖНА?"
                  default-opened
                  class="q-pb-lg"
              >
                <q-card>
                  <q-card-section class="Rubik400 fz-16 accordion-list__text">
                    <p>
                      Поверка индивидуальных приборов учета (ИПУ), или счетчиков — обязательная процедура. Это
                      закреплено
                      в статье 13 Федерального закона «Об обеспечении единства измерений» № 102-ФЗ от 26 июня 2008 года,
                      а
                      также в постановлении Правительства Российской Федерации № 354 от 6 мая 2011 года.
                    </p>
                    <p>
                      Если не провести поверку вовремя, вы не сможете оплачивать горячую и холодную воду по показаниям
                      приборов учета*. С 1-го числа месяца, следующего за месяцем, в котором необходимо было провести
                      поверку, начисления будут проводиться так:
                    </p>
                    <ul>
                      <li>первые 3 месяца — по среднерасчетным показаниям ваших счетчиков за последние полгода;</li>
                      <li>с 4-го месяца — по показаниям общедомового прибора учета.</li>
                      <li>Вы снова сможете оплачивать воду по показаниям счетчиков после проведения поверки.</li>
                    </ul>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator/>

              <q-expansion-item
                  group="somegroup"
                  label="КОГДА НУЖНО ПРОВОДИТЬ ПОВЕРКУ?"
                  class="q-pb-lg"
              >
                <q-card>
                  <q-card-section class="accordion-list__text">
                    Интервал между поверками, или межповерочный интервал, устанавливается при утверждении типа средства
                    измерения и указывается в технической документации — паспорте счетчика.
                    Сроки поверки также можно узнать:
                    в вашем едином платежном документе (ЕПД) или другой квитанции на оплату жилищно-коммунальных услуг
                    (ЖКУ);
                    при подаче показаний счетчиков на mos.ru: на шаге 2 в таблице «Показания приборов учета» справа от
                    номера счетчика есть знак «•••», нажмите на него левой кнопкой мыши;
                    позвонив на горячую линию поверки счетчиков воды: 8 (800) 555-22-39
                    Важно: поверку счетчиков воды нужно провести до наступления даты, указанной в качестве срока
                    поверки.
                    По собственной инициативе вы можете проводить периодическую поверку счетчиков воды чаще
                    установленного межповерочного интервала. А если нарушены контрольные пломбы или знаки поверки —
                    внеочередная поверка счетчика обязательна.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator/>

              <q-expansion-item
                  group="somegroup"
                  label="КТО ДОЛЖЕН ПРОВОДИТЬ ПОВЕРКУ СЧЕТЧИКОВ?"
                  class="q-pb-lg"
              >
                <q-card>
                  <q-card-section class="accordion-list__text">
                    Для проведения поверки счетчиков собственник (пользователь) помещения в многоквартирном доме должен
                    обратиться в специализированную организацию, имеющую аккредитацию. Вы можете выбрать ее
                    самостоятельно или обратиться за рекомендацией в управляющую компанию.
                    Выбирая организацию для поверки самостоятельно, учитывайте:
                    как долго компания работает на рынке;
                    какие отзывы оставляют те, кто пользовался услугами компании;
                    стоимость услуг.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator/>

              <q-expansion-item
                  group="somegroup"
                  label="КАК ПРОХОДИТ ПОВЕРКА СЧЕТЧИКОВ ВОДЫ?"
                  class="q-pb-lg"
              >
                <q-card>
                  <q-card-section class="accordion-list__text">
                    При каких условиях будет проведена поверка ИПУ, зависит от оснащенности фирмы, с которой потребитель
                    заключит договор на поверку: есть у нее переносные приборы для проведения поверки или нет. Поверка
                    может проводиться:

                    без снятия прибора — если у компании, с которой вы заключили договор, есть переносные приборы для
                    проведения поверки;
                    со снятием прибора — если у компании, с которой вы заключили договор, нет переносных приборов для
                    проведения поверки.
                    Если во время поверки обнаружится, что старый счетчик вышел из строя, его отремонтируют или заменят
                    на новый.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-separator/>
              <q-expansion-item
                  group="somegroup"
                  label="СРОК ПОВЕРКИ НАСТУПИТ НЕСКОРО, НО МНЕ ЗВОНЯТ ЧТО БЫ ЕЕ ПРОВЕСТИ. ЧТО ДЕЛАТЬ"
                  class="q-pb-lg"
              >
                <q-card class="">
                  <q-card-section class="accordion-list__text">
                    Некоторые частные компании могут звонить или рассылать письма и предлагать свои услуги по поверке
                    счетчиков. Такая информация является рекламой коммерческих услуг и не накладывает на вас никаких
                    обязательств.

                    Если вам звонят и сообщают о необходимости срочной поверки счетчиков воды:

                    поинтересуйтесь, кто именно звонит: название компании, ее адрес и контактный телефон для обратного
                    звонка;
                    по окончании разговора проверьте, какой срок поверки установлен для ваших счетчиков;
                    если срок поверки ваших счетчиков наступает нескоро, и предложение компании вы расцениваете как
                    агрессивную рекламу, пожаловаться на действия такой компании можно в Федеральную службу по надзору в
                    сфере защиты прав потребителей и благополучия человека по городу Москве.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-separator/>
              <q-expansion-item
                  group="somegroup"
                  label="СКОЛЬКО СТОИТ ПОВЕРКА СЧЕТЧИКА ВОДЫ?"
                  class="q-pb-lg"
              >
                <q-card class="">
                  <q-card-section class="accordion-list__text">
                    Работы по замене, обслуживанию и поверке приборов учета выполняются на основании договора, который
                    вы как потребитель (собственник или наниматель помещения) заключаете с организацией.

                    Поверка счетчиков не относится к услугам по содержанию и ремонту общего имущества многоквартирного
                    дома или коммунальным услугам, поэтому оплачивается потребителем. Стоимость поверки не подлежит
                    государственному регулированию и определяется по соглашению сторон в договоре, никаких специально
                    установленных тарифов не существует.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-separator/>
              <q-expansion-item
                  group="somegroup"
                  label="ЧТО БУДЕТ ПОСЛЕ ПОВЕРКИ?"
                  class="q-pb-lg"
              >
                <q-card class="">
                  <q-card-section class="accordion-list__text">
                    По результатам поверки проводивший ее специалист должен в течение 40 дней с даты проведения поверки
                    внести данные о результатах работы в реестр ФГИС «Аршин». Доступ к этой системе открыт для всех. В
                    разделе «Сведения о результатах поверки средств измерений» владелец счетчика может ввести его
                    заводской номер или инвентарный номер и увидеть сведения о нем и результатах проведенной поверки.

                    Собственнику прибора учета также может быть выдано свидетельство о поверке в бумажном виде. Его
                    рекомендуется предоставить в управляющую организацию. Сделать это можно онлайн на mos.ru либо при
                    личном визите.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-separator/>
            </q-list>
          </div>
        </div>
      </div>
    </section>
    <section class="bg_blue q-mb-xl" style="width: 100%; height: 129px;position: relative">
      <div class="container">
        <div class="flex items-center justify-around check_district_box"
             style="position: absolute; top: 0;left: 0;bottom: 0;right: 0">
          <p class="text-center text-white fz-32 Rubik500">УСТАНОВКА И ЗАМЕНА СЧЕТЧИКОВ ВОДЫ</p>
        </div>
      </div>
    </section>
    <section style="width: 100%;" class="q-mb-xl">
      <div class="container">
        <div class="cards-meter flex justify-center Rubik500">
          <div class="item-meter">
            <div class="item-image">
              <img src="src/assets/zamena.png" alt="Zamena" style="width: auto;">
            </div>
            <div class="item-text flex">
              <p class="fz-21 text-white">
                Замена счетчика воды
              </p>
              <p class="">
                <p class="text-white fz-16" style="max-width: 300px ; line-height: 200%;">Если не установить прибор
                  учета,
                  оплата за воду будет начисляться по
                  нормативу. В этом случае вы
                  переплатите 50%, так как никто и
                  никогда не тратит такое количество
                  воды.</p>
              </p>
            </div>
          </div>
          <div class="item-meter">
            <div class="item-image">
              <img src="src/assets/zamena-2.png" alt="">
            </div>
            <div class="item-text">
              <p class="fz-21 text-white">
                Замена счетчика воды
              </p>
              <div class="">
                <p class="text-white fz-16" style="max-width: 270px ; line-height: 200%;">
                  Специальные приборы учета позволят
                  производить замеры водопотребления
                  и оплачивать только тот объем воды,
                  который был действительно
                  израсходован. В данном случае
                  получится существенная переплата.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style="width: 100%;" class="bag-grey q-mb-xl">
      <div class="container">
        <div class="flex justify-around">
          <div class="form_footer">
            <v-open-form/>
          </div>
          <div class="image_form_footer">
            <img src="src/assets/footer_form.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="" style="width: 100%;">
      <h2 class="fz-32 text-center text-bold q-mb-lg Rubik500">Цены:</h2>
      <div class="bg_blue Rubik400 list_box">
        <q-list class="flex column justify-center items-center ">
          <q-item class="list-item">
            <q-item-section class="list-title__block">
              <div class="list-title text-white fz-16 ">Поверка счетчика ХВС, поверка счетчика ГВС - для граждан
                пенсионного
                возраста
              </div>
            </q-item-section>
            <q-item-section class="list-subtitle__block">
              <div class="list-subtitle text-white fz-26">750₽</div>
            </q-item-section>
          </q-item>
          <q-separator class="separator_list"/>
          <q-item class="list-item">
            <q-item-section class="list-title__block">
              <div class="list-title text-white fz-16">Поверка счетчика ХВС, поверка счетчика ГВС - для граждан
                пенсионного
                возраста
              </div>
            </q-item-section>
            <q-item-section class="list-subtitle__block">
              <div class="list-subtitle text-white fz-26">750₽</div>
            </q-item-section>
          </q-item>
          <q-separator class="separator_list"/>
          <q-item class="list-item">
            <q-item-section class="list-title__block">
              <div class="list-title text-white fz-16">Поверка счетчика ХВС, поверка счетчика ГВС - для граждан
                пенсионного
                возраста
              </div>
            </q-item-section>
            <q-item-section class="list-subtitle__block">
              <div class="list-subtitle text-white fz-26">750₽</div>
            </q-item-section>
          </q-item>
        </q-list>


        <div class="flex justify-center">
          <q-btn class="text-center text-white fz-26" style="margin: 0 auto;" dense unelevated
                 @click="listOpen ? listOpen = false : listOpen = true"
          >
            Подробнее
          </q-btn>
        </div>

        <div class="text-opacity" v-if="listOpen === true">
          <q-list class="flex column justify-center items-center " v-for="gen of listService[0].general">
            <q-item class="list-item">
              <q-item-section class="list-title__block">
                <div class="list-title fz-16">{{ gen.name }}
                </div>
              </q-item-section>
              <q-item-section class="list-subtitle__block">
                <div class="list-subtitle  fz-21">{{ gen.price }}</div>
              </q-item-section>
            </q-item>
            <q-separator class="separator_list"/>
          </q-list>

          <p class="text-white text-center fz-26 q-my-lg ">САНТЕХНИЧЕСКИЕ РАБОТЫ</p>
          <p class="text-white text-center fz-26 q-my-xl ">СМЕСИТЕЛИ</p>
          <q-list class="flex column justify-center items-center text-opacity"
                  v-for="faus of listService[0].plumbing[0].faucets">
            <q-item class="list-item">
              <q-item-section class="list-title__block">
                <div class="list-title  fz-16">{{ faus.name }}</div>
              </q-item-section>
              <q-item-section class="list-subtitle__block">
                <div class="list-subtitle  fz-21">{{ faus.price }}</div>
              </q-item-section>
            </q-item>
            <q-separator class="separator_list"/>
          </q-list>

          <p class="text-white text-center fz-26 q-my-xl ">РАКОВИНЫ</p>

          <q-list class="flex column justify-center items-center text-opacity"
                  v-for="shell of listService[0].plumbing[0].shells">
            <q-item class="list-item text-opacity">
              <q-item-section class="list-title__block">
                <div class="list-title  fz-16">{{ shell.name }}</div>
              </q-item-section>
              <q-item-section class="list-subtitle__block">
                <div class="list-subtitle  fz-21">{{ shell.price }}</div>
              </q-item-section>
            </q-item>
            <q-separator class="separator_list"/>
          </q-list>

          <p class="text-white text-center fz-26 q-my-xl">Унитазы</p>

          <q-list class="flex column justify-center items-center text-opacity"
                  v-for="toul of listService[0].plumbing[0].toilet">
            <q-item class="list-item text-opacity">
              <q-item-section class="list-title__block">
                <div class="list-title  fz-16">{{ toul.name }}</div>
              </q-item-section>
              <q-item-section class="list-subtitle__block">
                <div class="list-subtitle  fz-21">{{ toul.price }}</div>
              </q-item-section>
            </q-item>
            <q-separator class="separator_list"/>
          </q-list>
          <p class="text-white text-center fz-26 q-my-xl  text-opacity">Прочие сантехнические работы</p>
          <q-list class="flex column justify-center items-center" v-for="other of listService[0].others">
            <q-item class="list-item">
              <q-item-section class="list-title__block">
                <div class="list-title  fz-16">{{ other.name }}</div>
              </q-item-section>
              <q-item-section class="list-subtitle__block">
                <div class="list-subtitle  fz-26">{{ other.price }}</div>
              </q-item-section>
            </q-item>
            <q-separator class="separator_list"/>
          </q-list>
          <div class="flex justify-center q-py-lg">
            <q-btn class="text-white bg-red list-sendCall" @click="openFormModal = true">ЗАКАЗАТЬ УСЛУГУ</q-btn>
          </div>
        </div>
      </div>
    </section>
    <section style="width: 100%" class="map_district">
      <div class="container">
        <div class="flex column justify-center absolute-center">
          <div class="bg-white q-mb-md" style="max-width: 450px; border-radius: 20px; padding: 5px 5rem;">
            <p class="fz-26 text-bold text-center">Ваш район</p>
            <p class="text-blue-5 fz-16 text-bold">125 районов и 10 округов</p>
          </div>
          <q-btn class="text-white bg-red map-sendCall" @click="openFormModal = true">ЗАКАЗАТЬ УСЛУГУ</q-btn>
        </div>
      </div>
    </section>
    <footer class="footer  q-pt-xl bg_blue" style="width: 100%;">
      <div class="container">
        <div class="flex justify-around text-white">
          <div class="img_footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="87" viewBox="0 0 74 87" fill="none">
              <path d="M34.4 9.19989V0.899902H72.9V72.3999H53.6V11.9999H16V72.3999H34.4V23.8999H19.5" stroke="white"
                    stroke-width="1.5758" stroke-miterlimit="10"/>
              <path d="M12.4 23.8999H1.09998V73.1999" stroke="white" stroke-width="1.5758" stroke-miterlimit="10"/>
              <path
                  d="M6.39999 81.9V85.8H5.5V81.9L5.29999 81.7L1.79999 85.9H0.700012L4.70001 81.3L1 77.5H2.10001L5.5 81V77.5H6.39999V81L9.79999 77.5H10.9L7.20001 81.3L11.2 85.9H10.1L6.60001 81.7L6.39999 81.9Z"
                  fill="white"/>
              <path d="M19.1 85.9H18.2V79.4L12.6 85.9H12.4V77.5H13.3V84L18.9 77.5H19.1V85.9Z" fill="white"/>
              <path d="M28 85.9H27.1L24.3 79.4L21.5 85.9H20.6L24.3 77.5H24.5L28 85.9Z" fill="white"/>
              <path d="M36 85.9H35.1V79.4L29.5 85.9H29.3V77.5H30.2V84L35.8 77.5H36V85.9Z" fill="white"/>
              <path
                  d="M47.9 84.9998H49.3V86.9998H48.5V85.6998H38V77.2998H38.9V84.8998H42.5V77.2998H43.3V84.8998H47V77.2998H47.9C47.9 77.3998 47.9 84.9998 47.9 84.9998Z"
                  fill="white"/>
              <path d="M50.6 77.3999H51.5V80.8999H55.8V77.3999H56.7V85.7999H55.8V81.6999H51.5V85.7999H50.6V77.3999Z"
                    fill="white"/>
              <path d="M65.3 85.9H64.4V79.4L58.8 85.9H58.6V77.5H59.5V84L65.1 77.5H65.3V85.9Z" fill="white"/>
              <path
                  d="M67.3 77.3999H68.2V80.5999L71.6 77.3999H72.7L68.7 81.1999L73 85.7999H71.9L68.2 81.8999V85.7999H67.3V77.3999Z"
                  fill="white"/>
            </svg>
          </div>
          <div class="footer_mid">
            <p class="Rubik400 fz-16 text-white cursor link_policy" @click="modalPolicy = true">Политика
              конфиденциальности </p>
            <p class="Rubik400 fz-16 text-white cursor link_policy" @click="modalTerms = true">Пользовательское
              соглашение</p>
          </div>
          <div class="footer_links flex column items-end">
            <p class="Rubik500 fz-16">2023, «ЖИЛИЩНИК»</p>
            <p class="Rubik500 fz-16">8(800) 555-22-39</p>
            <p class="Rubik500 fz-16">Москва, ул. Тихомирова, д. 17 к 1, пом. 14/1</p>
            <p class="Rubik500 fz-16">Служба контроля качества help@jil-mos.ru</p>
          </div>
        </div>
        <div class="q-pb-xl">
          <p class="text-center text-white Rubik500 fz-16">Поверка счетчиков воды в Москве без снятия. Все права
            защищены</p>
        </div>
      </div>
    </footer>
  </q-page>
</template>

<script setup>
import {ref} from "vue";
import VOpenForm from "components/v-OpenForm.vue";
import VModalForm from "components/v-modal-form.vue";
import {useQuasar} from "quasar";
import axios from "axios";
import VPolicy from "components/v-policy.vue";
import TermsOfUse from "components/termsOfUse.vue";
import VSlider from "components/v-slider.vue";

const regexpName = /^[а-яА-ЯёЁ\s]/;
const $q = useQuasar()
const tab = ref('one')
const listOpen = ref(false)
const openFormModal = ref(false)
const listService = ref([
  {
    general: [
      {name: 'Услуга', price: 'Стоимость'},
      {name: 'Акт ввода в эксплуатацию и опломбировка одного узла', price: '2500 ₽'},
      {name: 'Замена счетчика VALTEC', price: '2700₽ '},
      {name: 'Замена прокладок', price: '1000₽ '},
      {name: 'Замена опорной арматуры', price: '2000₽'},
    ],
    plumbing: [
      {
        faucets: [
          {name: 'Услуга', price: 'Стоимость от'},
          {name: 'Монтаж смесителя', price: '1500₽'},
        ],
        shells: [
          {name: 'Услуга', price: 'Стоимость от'},
          {name: 'Монтаж раковины', price: '2000₽'},
        ],
        toilet: [
          {name: 'Услуга', price: 'Стоимость от'},
          {name: 'Монтаж унитаза', price: '2000'},
        ]
      }
    ],
    others: [
      {name: 'Услуга', price: 'Стоимость от'},
      {name: 'Монтаж фильтров', price: '1500 ₽'},
      {name: 'Монтаж и подключение редукторов', price: '1500 ₽'},
    ]
  }
])
const nameInput = ref('')
const phoneInput = ref('')
const modalPolicy = ref(false)
const modalTerms = ref(false)

/*----------------------------------------- Функция получения последней заявки  --------------------------------------*/
let count
let lastId
const getLastId = async () => {
  let next_id = await axios.get('https://sale.ismos.isp.sprint.1t.ru/assets/getInfo.php')
  let id = await next_id.data
  lastId = await id.split('}')
  count = lastId.length - 1
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
    let res = await axios.post("https://sale.ismos.isp.sprint.1t.ru/assets/telegramRequest.php", {
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

</script>

<style>
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:hover::after {
  content: ""
}

.bag-grey {
  width: 100%;
  background: rgba(128, 128, 128, 0.26);
}

.container {
  max-width: 1920px;
  margin: 0 auto;
}


.main_promo {
  position: relative;
  width: 100%;
  background: url("src/assets/main_bg.svg") no-repeat rgba(53, 203, 226, 1);
  background-size: contain;
  margin-top: -3%;
}

.main_promo_title {
  padding-top: 5%;
  padding-left: 24%;
  min-height: 36vw;
  width: 100%;
  color: #FFF;
  font-size: 4vw;
  font-weight: 500;
  line-height: 1.4em;
  text-shadow: -3px 4px rgba(0, 0, 0, 0.25);
}

/*FORM*/
.form_main {
  position: absolute;
  bottom: 10%;
  right: 5%;
}

.form_gap {
  gap: 20px;
  flex-wrap: nowrap;
}

.input_form {
  color: #F2F2F2 !important;
  font-family: RubikLight;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.btn_submit {
  padding: 26px 30px;
  border-radius: 50px;
  color: #FFF;
  font-family: Rubik-Medium;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  max-width: 285px;

}

.pol_conf {
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  line-height: 28px;
  position: relative;
  z-index: 10;
}

/*plus*/
.list_plus {
  width: 50%;
  gap: 10%;
}

.items_plus__subtitle {
  color: #958F8C;

  font-size: 16.465px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.plus_company {
  max-width: 1440px;
}

/*Card*/
.main_cards {
  margin-top: -4%;
  z-index: 4;
  position: relative;
  gap: 20px;
}

.item_card {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  border-radius: 30px;
  color: #000;
  text-align: center;
  font-family: RobotoRegular;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

/*info*/
.info_arshin {
  gap: 35px;
}

.company_info {
  width: 50%;
}

.info_arshin_text {
  max-width: 521px;


}

.link_to_site {
  padding: 5px 30px;
  border: 1px solid #958F8C;
  border-radius: 20px;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.dashed_border {
  border-top: 1px dashed #A22A2C;
  width: 32vw;
  gap: 15px;

}

/* check_district */
.how_check {
  max-width: fit-content;
  margin: 0 auto;
  align-items: start;
}

.text-check_district {
  color: #FFF;
  font-size: 25.75px;
  font-style: normal;
  line-height: normal;
}

.btn_district {
  padding: 16px 25px;
  border: none;
  border-radius: 30px;

}

.check_district_box {
  max-width: 1440px;
  margin: 0 auto;
}

/* Step */
.step_title {
  margin: 0 auto;
  padding-bottom: 20px;
}

.step_text {
  max-width: 200px;
}

.step_cards {
  background: linear-gradient(270deg, rgba(242, 242, 242, 0.00) 0%, #F2F2F2 16.84%, #F2F2F2 84.59%, rgba(242, 242, 242, 0.00) 100%);
  max-width: 100vw;
  width: 100%;
}

.step_check {
  padding-left: 15px;
  width: 100%;
}

.step_items {
  background: white;
  padding: 15px 10px;
  border-radius: 10px;
  margin: 15px 7px;
}

/*recall_form*/

.recall_form {
  border-radius: 20px !important;
  max-width: 480px;
  padding: 60px 53px;
  margin: 70px;
  background: #169AC4;
}

.form_send_btn {
  max-width: 140px;
  background: #D43D46;
  border-radius: 20px;
  padding: 14px 25px;
  color: white;
  margin: 0 auto;
}


.metr_form {
  width: 100%;
}

.champ_image {
  border-radius: 20px;
  max-width: 600px;
  width: 90vw;
}

/*about company*/
.item_text {
  max-width: 387px;
  color: #000;
  text-align: center;
  font-family: RobotoRegular;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.card_company {
  border-radius: 20px;
  background: #F9F9F9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
  max-width: 390px;
  padding: 5px;
}

.topCompany_cards {
  gap: 20px;
}

.text-company-h3 {
  font-size: 20px;
  margin: 0;
}

.text-company-subtitle {
  font-size: 16px;
  max-width: 300px;
}

/*  Reviews */
.reviews-block {
  padding: 15px;
  width: 100%;
  gap: 10px;

}

.review-item {
  background: white;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  padding: 5%;
  max-width: 275px;
  margin-bottom: 6%;
  fill: #FFF;
  stroke-width: 0.3px;
  stroke: #B9B9B9;
  filter: drop-shadow(-3px 4px 4px rgba(0, 0, 0, 0.25));
}

.reviews-section {
  width: 100%;
  background: radial-gradient(218.38% 35.83% at 50% 49.99%, #F0F0F0 0%, #F2F2F2 71.15%, #F8F8F8 96.74%, #FAFAFA 100%);;
}

/*Tab*/
.tab-text__subtitle {
  font-size: 16px;


  max-width: 430px;
}

.tab-image {
  max-width: 295px;
}

.tabs-panel {
  color: white;
  background: #169AC4 !important;
}

/*  Partners */
.part_logo {
  width: 100%
}

/* Zamena */
.cards-meter {
  justify-content: space-around;
  gap: 10px;

}

.item-meter {
  width: 100%;
  max-width: 750px;
  display: flex;
  gap: 10px;
  background: #169AC4;
  border-radius: 20px;
}

/*list items*/
.list-item {
  width: 100%;
  max-width: 940px;
}

.list-title__block {
  flex-grow: 2;
}

.list-subtitle__block {
  flex-grow: 1;
}


.list-title {
  color: rgba(255, 255, 255, .7);
}


.list-subtitle {
  text-align: end;
  color: rgba(255, 255, 255, .7);
}

.separator_list {
  background: white;
  height: 2px;
  width: 100%;
  max-width: 950px;
}

.map_district {
  background: url("src/assets/Новая папка/map_bg.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  height: 50vh;
  opacity: 0.5;
  z-index: 1;
}

.map-sendCall {
  border-radius: 20px;
  border: none;
  z-index: 4;
}

/*footer */
.bg_blue {
  background: #14ABD6;
}

.link_policy:hover {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

.reviews-container {
  width: 90%;
}
</style>
