<template>
  <v-row no-gutters align-self="center">
    <v-col cols="12">
      <div
        class="font-weight-black"
        :class="
          selectByComponentWidthUnbound(
            {
              lg: buttonToRight ? 'text-h3' : 'text-h4',
              md: 'text-h4',
              sm: 'text-h5',
            },
            'text-h6',
            carouselWidth
          )
        "
      >
        <UiGeneralButton
          :id="`${slideMarkdownFile.slug}.title`"
          :href="slideMarkdownFile.href"
          :to="slideMarkdownFile.to"
        >
          <template #default="{ to }">
            <v-list-item :to="to" :nuxt="to ? true : null">
              <div class="clickable">
                {{ slideMarkdownFile.title }}
              </div>
            </v-list-item>
          </template>
        </UiGeneralButton>
      </div>
    </v-col>
    <v-col
      v-show="buttonToRight"
      :cols="selectByComponentWidthUnbound({ sm: 9 }, 8, carouselWidth)"
    >
      <div
        class="font-weight-medium"
        :class="
          selectByComponentWidthUnbound(
            { md: 'text-body-1', sm: 'text-body-2' },
            'text-caption',
            carouselWidth
          )
        "
      >
        <nuxt-content :document="slideMarkdownFile" />
      </div>
    </v-col>
    <v-col
      v-show="buttonToRight"
      class="pl-4"
      align-self="center"
      :cols="selectByComponentWidthUnbound({ sm: 3 }, 4, carouselWidth)"
    >
      <UiStyledButton
        :href="slideMarkdownFile.href"
        :to="slideMarkdownFile.to"
        text="More Info"
        :x-large="selectByComponentWidthUnbound({ md: true }, false, carouselWidth)"
        :icon="getIcon()"
      />
    </v-col>
    <v-col v-show="!buttonToRight" cols="12">
      <p
        class="font-weight-medium"
        :class="
          selectByComponentWidthUnbound(
            { md: 'text-body-1 mb-5', sm: 'text-body-2 mb-3' },
            'text-caption mb-2',
            carouselWidth
          )
        "
      >
        <nuxt-content :document="slideMarkdownFile" />
      </p>
      <UiStyledButton
        :href="slideMarkdownFile.href"
        :to="slideMarkdownFile.to"
        text="More Info"
        :x-large="selectByComponentWidthUnbound({ md: true }, false, carouselWidth)"
        class="ma-auto"
        :icon="getIcon()"
      />
    </v-col>
  </v-row>
</template>

<script>
import ComponentRelativeGridMethods from '~/mixins/component-relative-grid-methods'

export default {
  mixins: [ComponentRelativeGridMethods],
  props: {
    // TODO: improve props validation
    buttonToRight: {
      type: Boolean,
    },
    slideMarkdownFile: {
      type: Object,
      required: true,
    },
    carouselWidth: {
      type: Number,
      default: undefined,
    },
  },
  data() {
    return {
      componentId: 'ui-carousel-text',
    }
  },
  methods: {
    getIcon() {
      if (this.slideMarkdownFile.href) {
        if (this.slideMarkdownFile.href === 'https://fairtracks.net') {
          return 'reload'
        } else {
          return 'open-in-new'
        }
      } else {
        return undefined
      }
    },
  },
}
</script>
