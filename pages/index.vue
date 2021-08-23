<template>
  <main class="font-default mx-8 text-lg text-center text-grayish-blue">
    <section class="mb-32">
      <header class="bg-header bg-cover bg-no-repeat -mx-8">
        <img
          src="~/assets/img/logo.svg"
          alt="Clipboard logo"
          class="pb-16 pt-32 mx-auto"
        />
      </header>

      <h1 class="heading mb-5 text-3xl">A history of everything you copy</h1>
      <p class="mb-10 lg:mx-auto lg:w-2/5">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>

      <button class="bg-strong-cyan border-b-4 border-strong-cyan-shade font-semibold mb-5 px-16 py-3 rounded-full shadow-xl text-white lg:mb-0 lg:mr-4">Download for iOS</button>
      <button class="bg-light-blue border-b-4 border-light-blue-shade font-semibold px-16 py-3 rounded-full shadow-xl text-white">Download for Mac</button>
    </section>

    <section class="mb-40">
      <h2 class="heading mb-5 text-2xl ">Keep track of your snippets</h2>
      <p class="mb-16 lg:mx-auto lg:w-1/2">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>

      <div class="lg:flex lg:items-center lg:space-x-24">
        <img
          src="~/assets/img/image-computer.png"
          alt="Image of a Mac screen"
          class="mb-12 lg:-ml-16"
        />

        <div class="lg:text-left lg:w-1/4">
          <h3 class="heading mb-2 text-xl">Quick Search</h3>
          <p class="mb-12">Easily search your snippets by content, category, web address, application, and more.</p>

          <h3 class="heading mb-2 text-xl">iCloud Sync</h3>
          <p class="mb-12">Instantly saves and syncs snippets accross all your devices.</p>

          <h3 class="heading mb-2 text-xl">Complete History</h3>
          <p class="mb-12">Retrieve any snippets from the first moment you started using the app.</p>
        </div>
      </div>
    </section>

    <section class="mb-32">
      <h2 class="heading mb-5 text-2xl ">Access Clipboard Anywhere</h2>
      <p class="mb-16 lg:mx-auto lg:w-1/2">Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>

      <img
        src="~/assets/img/image-devices.png"
        alt="Image of an iPhone and an iPad syncing"
        class="mb-24 mx-auto"
      />
      <h3 class="heading mb-2 text-2xl lg:mb-4">Supercharge your workflow</h3>
      <p class="mb-24">We've got the tools to boost your productivity.</p>

      <div class="lg:flex lg:items-center lg:mx-auto lg:space-x-4 lg:w-4/5">
        <div class="lg:w-1/3">
          <img
            src="~/assets/img/icon-blacklist.svg"
            alt="Icon of a list"
            class="mb-12 mx-auto"
          />
          <h3 class="heading mb-2 text-xl">Create blacklists</h3>
          <p class="mb-12">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
        </div>

        <div class="lg:w-1/3">
          <img
            src="~/assets/img/icon-text.svg"
            alt="Icon of text editing"
            class="mb-12 mx-auto"
          />
          <h3 class="heading mb-2 text-xl">Plain text snippets</h3>
          <p class="mb-12">Remove unwanted formatting from copied text for a consistent look.</p>
        </div>

        <div class="lg:w-1/3">
          <img
            src="~/assets/img/icon-preview.svg"
            alt="Icon of an eye"
            class="mb-12 mx-auto"
          />
          <h3 class="heading mb-2 text-xl">Sneak preview</h3>
          <p class="mb-12">Quick preview of all snippets on your Clipboard for easy access.</p>
        </div>
      </div>
    </section>

    <section class="mb-56 lg:flex lg:items-center lg:mb-32 lg:mx-auto lg:w-4/5">
      <img
        src="~/assets/img/logo-google.png"
        alt="Google logo"
        class="mb-20 mx-auto"
      />

      <img
        src="~/assets/img/logo-ibm.png"
        alt="IBM logo"
        class="mb-20 mx-auto"
      />

      <img
        src="~/assets/img/logo-microsoft.png"
        alt="Microsoft logo"
        class="mb-20 mx-auto"
      />

      <img
        src="~/assets/img/logo-hp.png"
        alt="HP logo"
        class="mb-20 mx-auto"
      />

      <img
        src="~/assets/img/logo-vector-graphics.png"
        alt="Vector Graphics logo"
        class="mb-20 mx-auto"
      />
    </section>

    <section class="mb-56 lg:mb-32">
      <h3 class="heading mb-2 text-2xl">Clipboard for iOS and Mac OS</h3>
      <p class="mb-12 lg:mx-auto lg:w-1/2">Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.</p>

      <button class="bg-strong-cyan border-b-4 border-strong-cyan-shade font-semibold mb-5 px-16 py-3 rounded-full shadow-xl text-white lg:mb-0 lg:mr-4">Download for iOS</button>
      <button class="bg-light-blue border-b-4 border-light-blue-shade font-semibold px-16 py-3 rounded-full shadow-xl text-white">Download for Mac</button>
    </section>

    <footer class="bg-gray -mx-8 p-8 text-dark-grayish-blue">
      <div class="lg:flex lg:items-center lg:mx-auto lg:w-4/5">
        <div class="lg:mr-20">
          <img
            src="~/assets/img/logo.svg"
            alt="Clipboard logo"
            class="h-12 mb-8 mx-auto lg:mb-0"
          />
        </div>

        <nav class="flex flex-col space-y-4 mb-8 lg:flex-row lg:mb-0 lg:space-x-20 lg:space-y-0 lg:text-left">
          <div class="flex flex-col space-y-4">
            <a href="javascript:void(0)">FAQs</a>
            <a href="javascript:void(0)">Contact Us</a>
          </div>

          <div class="flex flex-col space-y-4">
            <a href="javascript:void(0)">Privacy Policy</a>
            <a href="javascript:void(0)">Press Kit</a>
          </div>
          
          <a href="javascript:void(0)">Install Guide</a>
        </nav>

        <nav class="space-x-6 lg:ml-auto">
          <a href="javascript:void(0)">
            <font-awesome-icon
              :icon="['fab', 'facebook-square']"
              size="lg"
            />
          </a>

          <a href="javascript:void(0)">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              size="lg"
            />
          </a>

          <a href="javascript:void(0)">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              size="lg"
            />
          </a>
        </nav>
      </div>
    </footer>
  </main>
</template>

<script>
export default {}
</script>
