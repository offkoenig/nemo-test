<template>
	<div class="list">
		<span
			v-for="(item, i) in items"
			:key="i"
			@click="onClick(item)"
			class="item"
			:class="{ selected: item === selectedItem}"
		>
			{{ item.name }}
		</span>
	</div>

</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { Product } from './types';

defineProps<{
	items: Product[];
}>();

const emit = defineEmits(['selectItem']);

const selectedItem = ref<Product>();

const onClick = (item: Product) => {
	selectedItem.value = item;
	emit('selectItem', item);
}
</script>

<style lang="css">
.list {
	display: flex;
	flex-direction: column;
	border: 1px solid lightblue;
}

.item {
	padding: 10px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	min-width: 250px;
}

.item.selected {
	padding: 10px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	min-width: 250px;
	background: lightskyblue;
}

.item:hover {
	background: #f0f0ff;
}
</style>
