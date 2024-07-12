<template>
  <h1>Dit is de titel</h1>
  <pwc-button appearance="primary">Dit is een button</pwc-button>
  <pwc-switch name="news-letter" value="yes" checked>Houd mij op de hoogte!</pwc-switch>
  <pwc-colorpicker label="Select your favorite color" name="color" placeholder="For examples #00ff00" clearButton></pwc-colorpicker>
  <pwc-license-plate plate-number="GROEN-01" colored="true" country="NLD"></pwc-license-plate>
  <pwc-lightbox-item src="/cat.jpg"></pwc-lightbox-item>
  <pwc-progress-bar value="30" buffer-value="50" mode="buffer"></pwc-progress-bar>
</template>

<script setup lang="ts">
console.log('Hello from the component!')
import { defineCustomElements } from '@politie/pwc-webcomponents/loader/index.es2017.js'
await defineCustomElements()
</script>

<style>
@import '@politie/pwc-webcomponents/style.css';
</style>
