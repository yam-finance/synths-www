<template>
    <div class="sci-wrapper bg-[#3739AA] rounded-xl py-4 px-6 w-full grid gap-x-2.5">
        <div class="sci__selector uppercase font-bold text-xs justify-self-start">weth</div>
        <button
            class="
                sci__max-button
                font-semibold
                text-black text-xs
                rounded
                bg-white
                p-1
                text-center
                justify-self-end
                basic-hover
            "
        >
            Max
        </button>
        <div class="sci__input">
            <input v-model="inputValue" class="w-full text-purpleLight outline-none" type="text" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineEmits } from "vue"

const props = defineProps({
    modelValue: {
        type: String,
        default: "0",
    },
})

const emits = defineEmits(["update:modelValue"])

const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => emits("update:modelValue", value),
})
</script>

<style scoped lang="scss">
.sci {
    &-wrapper {
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas:
            ". ."
            "input input";
    }

    &__input {
        grid-area: input;

        input {
            background: none;
        }
    }
}
</style>
