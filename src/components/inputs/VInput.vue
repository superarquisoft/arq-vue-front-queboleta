<script lang="ts" setup>
defineProps<{
	id?: string;
	label?: string;
	placeholder?: string;
	type?: string;
	modelValue?: string;
	error?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const updateModelValue = (event: any) => {
	emit('update:modelValue', event.target.value);
};
</script>

<template>
	<div>
		<label
			v-if="label"
			for="email"
			class="mb-1 block font-medium"
			:class="error ? 'text-red-700' : 'text-gray-700'"
			>{{ label }}</label
		>
		<div class="flex flex-col">
			<input
				:id="id"
				:name="id"
				:type="type ?? 'text'"
				:placeholder="placeholder"
				:value="modelValue"
				@input="updateModelValue"
				class="block w-full rounded-md shadow-sm sm:text-sm"
				:class="
					error
						? 'border-red-300 bg-red-100 focus:border-red-500 focus:ring-red-500'
						: 'border-blue-300 focus:border-blue-500 focus:ring-blue-500'
				"
			/>
		</div>
	</div>
</template>
