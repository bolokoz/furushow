<!-- BlogPost.vue -->
<script setup>
defineProps(["review"]);
// console.log(frontmatter)
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <div class="flex items-center justify-center">
      <div class="w-full py-6 px-3">
        <div class="bg-white shadow-xl rounded-lg overflow-hidden">
          <div
            class="bg-cover bg-center h-80 p-4"
            style="
              background-image: url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);
            "
          >
            <div class="flex justify-end"></div>
          </div>

          <div class="p-4">
            <p class="uppercase tracking-wide text-sm font-light text-gray-700">
              Restaurante
            </p>
            <p class="text-3xl text-gray-900 font-bold">{{ review.title }}</p>
            <p class="text-gray-700">{{ review.date }}</p>

            <!-- <section>
                            <div class="flex items-center bg-white p-8 shadow-lg shadow-slate-200 rounded-lg w-auto space-x-1 lg:space-x-2">
                                <span class="text-slate-400 font-medium">
                                Nota sentimental
                            </span>
                            <span v-for="i in review.nota" class="star">★</span>
                            <span v-for="i in 5-review.nota" class="star">☆</span>
                            </div>
                        </section> -->

            <div class="rating">
              <span class="mr-2 uppercase tracking-wide text-sm font-light text-gray-700"> Nota geral: </span>
              <span v-for="i in review.nota" class="star mr-1"><HopeIcon icon="star" class="mr-3" /></span>
              <span v-for="i in 5 - review.nota" class="star mr-1"><HopeIcon icon="star" class="mr-3" /></span>
            </div>
          </div>

          <section>
            <div class="flex p-4 border-t border-gray-300 text-gray-700">
              <div class="flex-1 inline-flex items-center">
                <HopeIcon icon="clock" size="2rem" class="mr-3" />
                <p><span class="text-gray-900 font-bold">R$ 80</span> preço</p>
              </div>
              <div class="flex-1 inline-flex items-center">
                <svg
                  class="h-6 w-6 text-gray-600 fill-current mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                  ></path>
                </svg>
                <p><span class="text-gray-900 font-bold">2</span> pessoasporção</p>
              </div>
            </div>
          
            <div class="font-bold text-xl mb-2 px-6">Acompanhamentos</div>
            <div class="px-6 pt-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
          </section>

          <!-- <section class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{3}} / 5</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Carne e crosta</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4/5</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Molho e queijo</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">2/5</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Acompanhamentos</dd>
          </div>
      </dl>
  </div>
</section> -->

          <section
            class="grid gap-1 md:grid-cols-3 p-4 md:p-8 max-w-5xl mx-auto w-full"
          >
            <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
              <dl class="space-y-2">
                <dt
                  class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Carne e crosta
                </dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-white">
                  3/5
                </dd>

                <dd
                  class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400"
                >
                  <span>32k increase</span>

                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17 7L6.75 17.25"
                    ></path>
                  </svg>
                </dd>
              </dl>
            </div>

            <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
              <dl class="space-y-2">
                <dt
                  class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Molho e queijos
                </dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-white">
                  1/5
                </dd>

                <dd
                  class="flex items-center space-x-1 text-sm font-medium text-red-500 dark:text-red-400"
                >
                  <span>Desaprovado</span>

                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.25 8.75V17.25H8.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17 17L6.75 6.75"
                    ></path>
                  </svg>
                </dd>
              </dl>
            </div>

            <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
              <dl class="space-y-2">
                <dt
                  class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Acompanhamentos
                </dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-white">
                  3/5
                </dd>

                <dd
                  class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400"
                >
                  <span>Acima da média</span>

                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17 7L6.75 17.25"
                    ></path>
                  </svg>
                </dd>
              </dl>
            </div>
            <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-700">
              <dl class="space-y-2">
                <dt
                  class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Apresentação
                </dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-white">
                  3/3
                </dd>

                <dd
                  class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400"
                >
                  <span>32k increase</span>

                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17 7L6.75 17.25"
                    ></path>
                  </svg>
                </dd>
              </dl>
            </div>

            <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
              <dl class="space-y-2">
                <dt
                  class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Custo-beneficio
                </dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-white">
                  1/3
                </dd>

                <dd
                  class="flex items-center space-x-1 text-sm font-medium text-red-500 dark:text-red-400"
                >
                  <span>Desaprovado</span>

                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.25 8.75V17.25H8.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17 17L6.75 6.75"
                    ></path>
                  </svg>
                </dd>
              </dl>
            </div>

            <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
              <dl class="space-y-2">
                <dt
                  class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Atmosfera
                </dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-white">
                  2/3
                </dd>

                <dd
                  class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400"
                >
                  <span>Acima da média</span>

                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17 7L6.75 17.25"
                    ></path>
                  </svg>
                </dd>
              </dl>
            </div>
          </section>



          <!-- <section>
            <div class="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
              <div class="sm:flex sm:space-x-4">
                <div
                  class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8"
                >
                  <div class="bg-white p-5">
                    <div class="sm:flex sm:items-start">
                      <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-sm leading-6 font-medium text-gray-400">
                          Preço
                        </h3>
                        <p class="text-3xl font-bold text-black">R$ 71</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8"
                >
                  <div class="bg-white p-5">
                    <div class="sm:flex sm:items-start">
                      <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-sm leading-6 font-medium text-gray-400">
                          Porças serve
                        </h3>
                        <p class="text-3xl font-bold text-black">1 pessoa</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8"
                >
                  <div class="bg-white p-5">
                    <div class="sm:flex sm:items-start">
                      <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-sm leading-6 font-medium text-gray-400">
                          Avg. Click Rate
                        </h3>
                        <p class="text-3xl font-bold text-black">24.57%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> -->



          <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
            <div
              class="text-xs uppercase font-bold text-gray-600 tracking-wide"
            >
              Observações
            </div>
            <div class="flex items-center pt-2">
              <div
                class="bg-cover bg-center w-10 h-10 rounded-full mr-3"
                style="
                  background-image: url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80);
                "
              ></div>
              <div>
                <p class="font-bold text-gray-900">Parmegianólogo</p>
              </div>
            </div>
            <span class="ma-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              aperiam sit iure rerum possimus expedita ipsa voluptates ab
              perferendis earum vero nihil consequuntur reprehenderit? Suscipit
              possimus laboriosam culpa laborum? Quia?</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
