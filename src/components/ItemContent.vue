<template>
	<div class="content">
		<span class="header"> {{ item.name }}</span>

		<div class="detail" v-for="attr in item.attributes" :key="attr.code">
			<div class="field">
				<span class="title">code:</span>
				<input :value="attr.code"/>
			</div>

			<div class="field">
				<span class="title">name:</span>
				<input :value="attr.name"/>
			</div>

			<div v-if="attr.color" class="field">
				<span class="title">color:</span>
				<input :value="attr.color"/>
			</div>

			<div v-else-if="attr.size" class="field">
				<span class="title">size:</span>
				<span>
					<input :value="attr.size.width" type="number"/> x <input :value="attr.size.height" type="number"/>
				</span>

			</div>

			<div v-else-if="attr.weight != undefined" class="field"> <!-- не отображается при нуле, так как 0 falsy -->
				<span class="title">weight:</span>
				<input :value="attr.weight" type="number"/>
			</div>

		</div>

		<div class="add">
			<label for="selectType">
				type
			</label>
			<select v-model="selectedType" id="selectType">
				<option v-for="value, index in contentTypes" :key="`select-type-option-${index}`" :value="value">{{ index }}</option>
			</select>

			<button @click="attributeAdd">
				Add
			</button>
		</div>

	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { Product, ProductAttributes } from "./types";

defineProps<{
	item: Product
}>();

const emit = defineEmits(['attributeAdd']);

const contentTypes = {
	color: {
		code: 'new code',
		name: 'new field',
		color: 'color'
	},
	size: {
		code: 'new code',
		name: 'new field',
		size: {
			width: 0,
			height: 0
		}
	},
	weight: {
		code: 'new code',
		name: 'new field',
		weight: 0
	}
}
const selectedType = ref<ProductAttributes>();

const attributeAdd = () => {
	emit('attributeAdd', selectedType.value);
}
</script>

<style scoped lang="css">
.header {
	font-weight: bold;
}
.content {
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 20px;
}
.detail {
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.field {
	display: flex;
	gap: 5px;
}
.title {
	font-weight: bold;
}
.add {
	display: flex;
	gap: 10px;
}
</style>
