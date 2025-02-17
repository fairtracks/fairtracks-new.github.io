<template>
  <section>
    <v-hover v-slot="{ hover }">
      <div ref="carousel-section" :key="componentKey">
        <v-carousel
          :id="carouselId"
          v-tooltip="{
            content: `Tip: move mouse pointer away from carousel to resume auto-cycling of slides`,
            placement: 'bottom',
            container: false,
            trigger: 'manual',
            show: showTooltipAfterDelay(hover) && show,
          }"
          dark
          :cycle="!hover"
          :interval="interval"
          show-arrows-on-hover
          draggable="true"
          hide-delimiter-background
          :height="height"
        >
          <v-carousel-item
            v-for="(slideMdFile, slideIndex) in markdownFiles"
            :key="slideIndex"
            class="gradient-fill-carousel"
            :class="$vuetify.theme.dark ? 'background-dark' : 'background-light'"
            :src="
              showFullPageImg(slideMdFile) && !$config.optimizeImages
                ? $getImageAssetObjectFromPathArray(slideMdFile.img).optimizedImagePath
                : null
            "
            dark
          >
            <div v-show="showFullPageImg(slideMdFile)" class="v-responsive fill-height">
              <UiSmartBackgroundImg
                v-show="$config.optimizeImages"
                :image-asset="$getImageAssetObjectFromPathArray(slideMdFile.img)"
              />
              <v-row no-gutters class="fill-height">
                <v-col cols="12" align-self="end" class="pt-6 bg-transparent" :style="cssVars">
                  <UiCarouselText
                    :button-to-right="true"
                    :slide-markdown-file="slideMdFile"
                    :carousel-width="componentWidth"
                    :class="
                      selectByComponentWidth({ md: 'px-12 pb-12', sm: 'px-8 pb-8' }, 'px-4 pb-4')
                    "
                  />
                </v-col>
              </v-row>
            </div>
            <v-row v-show="showLeftToRightImg(slideMdFile)" no-gutters class="fill-height">
              <v-col cols="12">
                <UiSmartImg
                  :max-height="
                    selectByComponentWidth(
                      {
                        sm: componentHorizontal
                          ? calcComponentHeightAsString(0.6, 0)
                          : calcComponentHeightAsString(0.75, 0),
                      },
                      calcComponentHeightAsString(0.5, 0)
                    )
                  "
                  :image-asset="$getImageAssetObjectFromPathArray(slideMdFile.img)"
                  align-self="start"
                  :crop-bottom="slideMdFile.topToBottomImg ? true : null"
                  behind
                />
              </v-col>
              <v-col cols="12">
                <UiCarouselText
                  :button-to-right="componentHorizontal"
                  :slide-markdown-file="slideMdFile"
                  :carousel-width="componentWidth"
                  :class="selectByComponentWidth({ md: 'pa-12', sm: 'pa-8' }, 'pa-4')"
                />
              </v-col>
            </v-row>
            <v-row v-show="showTopToBottomImg(slideMdFile)" no-gutters class="fill-height">
              <v-col cols="6" align-self="center">
                <UiSmartImg
                  :image-asset="$getImageAssetObjectFromPathArray(slideMdFile.img)"
                  :max-height="calcComponentHeightAsString(1)"
                  :class="slideMdFile.topToBottomImg ? null : 'cropImgBottom'"
                  contain
                  behind
                />
              </v-col>
              <v-col
                cols="6"
                align-self="center"
                :class="selectByComponentWidth({ md: 'pa-12' }, 'pa-4')"
              >
                <UiCarouselText
                  :button-to-right="false"
                  :slide-markdown-file="slideMdFile"
                  :carousel-width="componentWidth"
                />
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-hover>
  </section>
</template>

<script>
import createRgbVarsForThemes from '~/mixins/create-rgb-vars-for-themes'
import MarkdownSupport from '~/mixins/markdown-support'
import ComponentRelativeGrid from '~/mixins/component-relative-grid'

export default {
  mixins: [createRgbVarsForThemes, MarkdownSupport, ComponentRelativeGrid],
  props: {
    // TODO: improve props validation
    carouselId: {
      type: String,
      required: true,
    },
    slidesFilesDir: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    interval: {
      type: Number,
      default: 8000,
    },
  },
  data() {
    return {
      componentId: 'sections-carousel-layout',
      componentRef: 'carousel-section',
      markdownFilesDir: this.slidesFilesDir, // Used by MarkdownSupport mixin to load Markdown files
      show: false,
    }
  },
  activated() {
    this.show = false
    this.hover = false
  },
  methods: {
    showTooltipAfterDelay(hover) {
      return new Promise((resolve) => {
        if (hover) {
          setTimeout(() => {
            this.show = true
            resolve(true)
          }, 700)
        } else {
          this.show = false
          resolve(true)
        }
      })
    },
    showFullPageImg(carouselItem) {
      return this._calcLayoutType(carouselItem) === 'fullPage'
    },
    showLeftToRightImg(carouselItem) {
      return this._calcLayoutType(carouselItem) === 'imgAtTop'
    },
    showTopToBottomImg(carouselItem) {
      return this._calcLayoutType(carouselItem) === 'sideBySide'
    },
    _calcLayoutType(carouselItem) {
      let layoutType = null
      if (carouselItem.topToBottomImg && carouselItem.leftToRightImg) {
        if (this.componentHorizontal) {
          layoutType = 'fullPage'
        } else {
          layoutType = 'imgAtTop'
        }
      } else if (carouselItem.topToBottomImg) {
        if (this.componentHorizontal) {
          layoutType = 'sideBySide'
        } else {
          layoutType = 'imgAtTop'
        }
      } else if (carouselItem.leftToRightImg) {
        if (this.componentHorizontalAndVeryWide) {
          layoutType = 'sideBySide'
        } else {
          layoutType = 'imgAtTop'
        }
      }
      return layoutType
    },
    containImage(carouselItem) {
      if (!carouselItem.topToBottomImg) {
        return true
      } else {
        return null
      }
    },
  },
}
</script>

<style>
.cropImgBottom .v-image__image--cover {
  background-position: center top !important;
}

.background-light > .v-responsive {
  background: var(--v-primary-lighten1);
}

.background-dark > .v-responsive {
  background: var(--v-primary-lighten1);
}

.gradient-fill-carousel > .v-responsive > .v-responsive__content {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), 70%, rgba(0, 0, 0, 0.2));
}

.bg-transparent {
  background: rgba(var(--v-primary-rgb), 0.75);
}
</style>
