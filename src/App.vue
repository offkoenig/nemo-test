<template>
	<div class="main">
		<item-list :items="data" class="sidebar" @selectItem="selectItem"/>
		<item-content v-if="selectedItem" :item="selectedItem" @attributeAdd="attributeAdd"/>
	</div>
</template>

<script setup lang="ts">

import ItemList from './components/ItemList.vue';
import ItemContent from './components/ItemContent.vue';
import Data from './components/mockData';
import { ref } from "vue";
import { Product, ProductAttributes } from './components/types';

const data = ref<Product[]>(Data);


const selectedItem = ref<Product>();

/**
 * Изменено название метода для улучшения читаемости кода,
 */
const selectItem = (item: Product) => {
	selectedItem.value = item
}

/**
 * Изменено название метода для улучшения читаемости кода,
 * переделана логика для той же читаемости и понимаемости
 */
const attributeAdd = (attribute: ProductAttributes) => {
	selectedItem.value?.attributes.push(attribute)
}
</script>

<style scoped lang="css">
.main {
	display: flex;
	gap: 20px;
}
.sidebar {
	width: auto;
}
</style>
