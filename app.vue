<template>
  <div>
    <h1>Dit is de titel</h1>
    <p><pwc-chip type="removable">hallo</pwc-chip></p>
    <p><pwc-button appearance="primary">Dit is een button</pwc-button></p>

    <pwc-card class="card-left" pwc-densed pwc-levitation-3 legacy="false">
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
  </div>
  
</template>

<style>
    @import '@politie/pwc-webcomponents/style.css';
</style>

<script setup lang="ts">
// import { defineCustomElements } from '@politie/pwc-webcomponents/loader/index'
// defineCustomElements()
</script>

