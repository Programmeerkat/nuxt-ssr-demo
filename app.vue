<template>
  <h1>Dit is de titel</h1>
  <pwc-chip type="removable">hallo</pwc-chip>
    <pwc-button appearance="primary">Dit is een button</pwc-button>

    <pwc-card class="card-left" pwc-densed pwc-contrast legacy="false">
      <pwc-card-header>Example Contrast Card</pwc-card-header>
      <pwc-card-content>
        <p>
          Fusce eros dui, convallis quis ornare sed, pharetra ut urna. Praesent
          semper mauris quis elementum vehicula. In arcu ex, aliquet in lectus
          in, maximus efficitur nisl. Donec finibus consequat placerat.
          Vestibulum congue ullamcorper lacus vel ullamcorper. Suspendisse porta
          erat vel sodales tempus.
        </p>
      </pwc-card-content>
      <pwc-card-footer>
        <pwc-button appearance="primary" icon="menu_book" type="flat">
          Some button
        </pwc-button>
      </pwc-card-footer>
    </pwc-card>
</template>

<script setup lang="ts">
import { defineCustomElements } from '@politie/pwc-webcomponents/loader/index.es2017.js'
console.log(defineCustomElements)
await defineCustomElements()
</script>

